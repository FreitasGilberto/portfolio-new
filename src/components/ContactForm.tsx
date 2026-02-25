import { useState } from "react";

export function ContactForm({ emailTo }: { emailTo: string }) {
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const message = String(fd.get("message") || "");

    const subject = encodeURIComponent(`Portfolio: ${name} te escribió`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;

    setStatus("ok");
    e.currentTarget.reset();
  }

  const input =
    "w-full rounded-[18px] border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[rgb(var(--ocean)/0.6)]";

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <input className={input} name="name" placeholder="Tu nombre" required />
      <input
        className={input}
        name="email"
        type="email"
        placeholder="Tu email"
        required
      />
      <textarea
        className={input}
        name="message"
        placeholder="Tu mensaje"
        rows={5}
        required
      />

      <button
        type="submit"
        className="w-full rounded-full bg-[rgb(var(--pumpkin)/1)] px-4 py-3 text-sm font-medium text-white hover:bg-[rgb(var(--pumpkin)/0.9)] transition active:scale-[0.98] cursor-pointer"
      >
        Enviar
      </button>

      {status === "ok" && (
        <p className="text-sm text-[rgb(var(--ocean)/1)]">
          Listo ✅ Se abrió tu cliente de mail.
        </p>
      )}
    </form>
  );
}
