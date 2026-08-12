import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Seo from "@/components/Seo";

type LogRow = {
  id: string;
  message_id: string | null;
  template_name: string | null;
  recipient_email: string | null;
  status: string | null;
  error_message: string | null;
  created_at: string;
};

const PRESETS = [
  { label: "Last 24h", days: 1 },
  { label: "Last 7 days", days: 7 },
  { label: "Last 30 days", days: 30 },
];

const PAGE_SIZE = 50;

const statusClass = (status: string | null) => {
  if (status === "sent") return "bg-green-100 text-green-800";
  if (status === "dlq" || status === "failed" || status === "bounced") return "bg-red-100 text-red-800";
  if (status === "suppressed" || status === "complained") return "bg-yellow-100 text-yellow-900";
  return "bg-muted text-muted-foreground";
};

const statusLabel = (status: string | null) =>
  status === "dlq" ? "failed" : status ?? "unknown";

const isoDay = (d: Date) => d.toISOString().slice(0, 10);

const EmailLog = () => {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [rows, setRows] = useState<LogRow[]>([]);
  const [loading, setLoading] = useState(false);

  const today = new Date();
  const weekAgo = new Date(Date.now() - 7 * 86400000);
  const [from, setFrom] = useState(isoDay(weekAgo));
  const [to, setTo] = useState(isoDay(today));
  const [template, setTemplate] = useState("all");
  const [status, setStatus] = useState("all");
  const [sortDesc, setSortDesc] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    let active = true;
    const check = async () => {
      const { data } = await supabase.auth.getSession();
      if (!active) return;
      if (!data.session) {
        navigate("/auth", { replace: true });
        return;
      }
      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", data.session.user.id)
        .eq("role", "admin")
        .maybeSingle();
      if (!active) return;
      setIsAdmin(!!roles);
      setChecking(false);
    };
    check();
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) navigate("/auth", { replace: true });
    });
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, [navigate]);

  const load = useCallback(async () => {
    setLoading(true);
    const start = new Date(`${from}T00:00:00.000Z`).toISOString();
    const end = new Date(`${to}T23:59:59.999Z`).toISOString();
    const { data } = await supabase
      .from("email_send_log")
      .select("id, message_id, template_name, recipient_email, status, error_message, created_at")
      .gte("created_at", start)
      .lte("created_at", end)
      .order("created_at", { ascending: false })
      .limit(2000);
    setRows((data as LogRow[]) ?? []);
    setLoading(false);
  }, [from, to]);

  useEffect(() => {
    if (isAdmin) load();
  }, [isAdmin, load]);

  // one row per unique email (latest status wins)
  const deduped = useMemo(() => {
    const map = new Map<string, LogRow>();
    for (const r of rows) {
      const key = r.message_id ?? r.id;
      const prev = map.get(key);
      if (!prev || new Date(r.created_at) > new Date(prev.created_at)) map.set(key, r);
    }
    return [...map.values()];
  }, [rows]);

  const templates = useMemo(
    () => [...new Set(deduped.map((r) => r.template_name).filter(Boolean))] as string[],
    [deduped],
  );

  const filtered = useMemo(() => {
    const list = deduped.filter((r) => {
      if (template !== "all" && r.template_name !== template) return false;
      if (status === "sent" && r.status !== "sent") return false;
      if (status === "failed" && !["dlq", "failed", "bounced"].includes(r.status ?? "")) return false;
      if (status === "suppressed" && r.status !== "suppressed") return false;
      return true;
    });
    return list.sort((a, b) =>
      sortDesc
        ? new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        : new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
    );
  }, [deduped, template, status, sortDesc]);

  const stats = useMemo(() => {
    const base = deduped.filter((r) => template === "all" || r.template_name === template);
    return {
      total: base.length,
      sent: base.filter((r) => r.status === "sent").length,
      failed: base.filter((r) => ["dlq", "failed", "bounced"].includes(r.status ?? "")).length,
      suppressed: base.filter((r) => r.status === "suppressed").length,
    };
  }, [deduped, template]);

  const pageRows = filtered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  const applyPreset = (days: number) => {
    setFrom(isoDay(new Date(Date.now() - days * 86400000)));
    setTo(isoDay(new Date()));
    setPage(0);
  };

  if (checking) {
    return <main className="min-h-screen grid place-items-center text-muted-foreground text-sm">Loading…</main>;
  }

  if (!isAdmin) {
    return (
      <main className="min-h-screen grid place-items-center px-4 text-center">
        <div>
          <h1 className="font-display font-bold text-2xl text-foreground mb-2">No access</h1>
          <p className="text-muted-foreground text-sm mb-6">This dashboard is restricted to administrators.</p>
          <button
            onClick={async () => { await supabase.auth.signOut(); navigate("/auth", { replace: true }); }}
            className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold"
          >
            Sign out
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-muted/30 px-4 py-10">
      <Seo
        title="Email tracking | Aegis Global Recruitment Agency"
        description="Internal dashboard tracking emails sent from the Aegis Global Recruitment Agency website."
        path="/email-log"
        noindex
      />
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-1">Aegis Global Recruitment</div>
            <h1 className="font-display font-bold text-3xl text-foreground">Email tracking</h1>
          </div>
          <div className="flex gap-2">
            <button onClick={load} className="px-4 py-2 rounded-md border border-border bg-card text-sm font-semibold">
              Refresh
            </button>
            <button
              onClick={async () => { await supabase.auth.signOut(); navigate("/auth", { replace: true }); }}
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold"
            >
              Sign out
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Total emails", value: stats.total },
            { label: "Delivered", value: stats.sent },
            { label: "Failed", value: stats.failed },
            { label: "Suppressed", value: stats.suppressed },
          ].map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-xl p-5 shadow-card">
              <div className="text-xs text-muted-foreground">{s.label}</div>
              <div className="font-display font-bold text-3xl text-foreground mt-1">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-xl p-5 mb-6 flex flex-wrap items-end gap-3">
          <div className="flex gap-2">
            {PRESETS.map((p) => (
              <button
                key={p.label} onClick={() => applyPreset(p.days)}
                className="px-3 py-2 rounded-md border border-border text-xs font-semibold hover:border-primary/40 transition"
              >
                {p.label}
              </button>
            ))}
          </div>
          <div>
            <label htmlFor="from" className="text-xs font-semibold text-muted-foreground">From</label>
            <input id="from" type="date" value={from} onChange={(e) => { setFrom(e.target.value); setPage(0); }}
              className="mt-1 block px-3 py-2 rounded-md border border-input bg-background text-sm" />
          </div>
          <div>
            <label htmlFor="to" className="text-xs font-semibold text-muted-foreground">To</label>
            <input id="to" type="date" value={to} onChange={(e) => { setTo(e.target.value); setPage(0); }}
              className="mt-1 block px-3 py-2 rounded-md border border-input bg-background text-sm" />
          </div>
          <div>
            <label htmlFor="tpl" className="text-xs font-semibold text-muted-foreground">Email type</label>
            <select id="tpl" value={template} onChange={(e) => { setTemplate(e.target.value); setPage(0); }}
              className="mt-1 block px-3 py-2 rounded-md border border-input bg-background text-sm">
              <option value="all">All</option>
              {templates.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="st" className="text-xs font-semibold text-muted-foreground">Status</label>
            <select id="st" value={status} onChange={(e) => { setStatus(e.target.value); setPage(0); }}
              className="mt-1 block px-3 py-2 rounded-md border border-input bg-background text-sm">
              <option value="all">All</option>
              <option value="sent">Sent</option>
              <option value="failed">Failed</option>
              <option value="suppressed">Suppressed</option>
            </select>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/60 text-muted-foreground">
                <tr>
                  <th className="text-left font-semibold px-4 py-3">Type</th>
                  <th className="text-left font-semibold px-4 py-3">Recipient</th>
                  <th className="text-left font-semibold px-4 py-3">Status</th>
                  <th className="text-left font-semibold px-4 py-3">
                    <button onClick={() => setSortDesc(!sortDesc)} className="hover:text-primary transition">
                      Sent {sortDesc ? "↓" : "↑"}
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading && (
                  <tr><td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">Loading…</td></tr>
                )}
                {!loading && pageRows.length === 0 && (
                  <tr><td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">No emails in this range.</td></tr>
                )}
                {!loading && pageRows.map((r) => (
                  <tr key={r.id} className="border-t border-border align-top">
                    <td className="px-4 py-3 text-foreground">{r.template_name ?? "—"}</td>
                    <td className="px-4 py-3 text-foreground">{r.recipient_email ?? "—"}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${statusClass(r.status)}`}>
                        {statusLabel(r.status)}
                      </span>
                      {r.error_message && (
                        <div className="text-xs text-destructive mt-1 max-w-xs break-words">{r.error_message}</div>
                      )}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                      {new Date(r.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {pages > 1 && (
            <div className="flex items-center justify-between px-4 py-3 border-t border-border text-sm">
              <span className="text-muted-foreground">Page {page + 1} of {pages}</span>
              <div className="flex gap-2">
                <button disabled={page === 0} onClick={() => setPage(page - 1)}
                  className="px-3 py-1.5 rounded-md border border-border disabled:opacity-40">Previous</button>
                <button disabled={page + 1 >= pages} onClick={() => setPage(page + 1)}
                  className="px-3 py-1.5 rounded-md border border-border disabled:opacity-40">Next</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default EmailLog;
