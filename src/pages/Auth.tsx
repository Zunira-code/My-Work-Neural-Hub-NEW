import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import Seo from "@/components/Seo";

const Auth = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate("/email-log", { replace: true });
    });
  }, [navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: { emailRedirectTo: `${window.location.origin}/email-log` },
        });
        if (error) throw error;
        toast({ title: "Account created", description: "You can now sign in." });
        setMode("signin");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
        if (error) throw error;
        navigate("/email-log", { replace: true });
      }
    } catch (err) {
      toast({
        title: "Sign in failed",
        description: err instanceof Error ? err.message : "Please try again.",
        variant: "destructive",
      });
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-muted/40 px-4">
      <Seo
        title="Admin sign in | Aegis Global Recruitment Agency"
        description="Secure sign in for the Aegis Global Recruitment Agency email tracking dashboard."
        path="/auth"
        noindex
      />
      <section className="w-full max-w-md bg-card border border-border rounded-2xl shadow-card p-8">
        <div className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-3">Aegis Global Recruitment</div>
        <h1 className="font-display font-bold text-2xl text-foreground mb-6">
          {mode === "signin" ? "Admin sign in" : "Create admin account"}
        </h1>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</label>
            <input
              id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5 w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm outline-none focus:ring-2 focus:ring-ring/30"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-xs font-semibold text-muted-foreground">Password</label>
            <input
              id="password" type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)}
              className="mt-1.5 w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm outline-none focus:ring-2 focus:ring-ring/30"
            />
          </div>
          <button
            type="submit" disabled={busy}
            className="w-full px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary-glow transition disabled:opacity-60"
          >
            {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
          </button>
        </form>

        <button
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="mt-5 text-sm text-muted-foreground hover:text-primary transition w-full text-center"
        >
          {mode === "signin" ? "First time? Create your admin account" : "Already have an account? Sign in"}
        </button>
      </section>
    </main>
  );
};

export default Auth;
