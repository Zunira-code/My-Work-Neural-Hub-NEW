import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

type State = "loading" | "valid" | "already" | "invalid" | "success" | "error";

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token") ?? "";
  const [state, setState] = useState<State>("loading");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const validate = async () => {
      if (!token) {
        setState("invalid");
        return;
      }
      try {
        const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`;
        const res = await fetch(url, {
          headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY },
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          setState("invalid");
          return;
        }
        setState(data?.used || data?.already_unsubscribed ? "already" : "valid");
      } catch {
        setState("error");
      }
    };
    validate();
  }, [token]);

  const confirm = async () => {
    setSubmitting(true);
    const { error } = await supabase.functions.invoke("handle-email-unsubscribe", { body: { token } });
    setSubmitting(false);
    setState(error ? "error" : "success");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-muted/40 px-4">
      <section className="w-full max-w-md bg-card border border-border rounded-2xl shadow-card p-8 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-3">
          Aegis Global Recruitment
        </div>
        <h1 className="font-display font-bold text-2xl text-foreground mb-3">Email preferences</h1>

        {state === "loading" && <p className="text-muted-foreground text-sm">Checking your link…</p>}

        {state === "valid" && (
          <>
            <p className="text-muted-foreground text-sm mb-6">
              Confirm that you no longer want to receive emails from us at this address.
            </p>
            <button
              onClick={confirm}
              disabled={submitting}
              className="w-full px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary-glow transition disabled:opacity-60"
            >
              {submitting ? "Unsubscribing…" : "Confirm unsubscribe"}
            </button>
          </>
        )}

        {state === "already" && (
          <p className="text-muted-foreground text-sm">You are already unsubscribed. No further emails will be sent.</p>
        )}

        {state === "success" && (
          <p className="text-muted-foreground text-sm">You have been unsubscribed. Sorry to see you go.</p>
        )}

        {state === "invalid" && (
          <p className="text-muted-foreground text-sm">This unsubscribe link is invalid or has expired.</p>
        )}

        {state === "error" && (
          <p className="text-muted-foreground text-sm">Something went wrong. Please try again later.</p>
        )}

        <a href="/" className="inline-block mt-6 text-sm font-semibold text-primary hover:underline">
          Back to website
        </a>
      </section>
    </main>
  );
};

export default Unsubscribe;
