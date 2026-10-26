"use client";
import { useState } from "react";
import { waLink } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
const f =
  "w-full rounded-lg border border-transparent bg-white px-3.5 py-3 font-normal text-slate-800 focus:outline focus:outline-[3px] focus:outline-teal";
export default function ContactForm({ services }) {
  const [s, set] = useState({
    name: "",
    phone: "",
    service: services[0],
    message: "",
  });
  const on = (e) => set({ ...s, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const t = `Hello Micbria Ltd,\nName: ${s.name}\nPhone: ${s.phone || "-"}\nService: ${s.service}\nMessage: ${s.message}`;
    window.open(waLink(t), "_blank", "noopener,noreferrer");
  };
  return (
    <form
      onSubmit={submit}
      className="grid gap-4 rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur"
    >
      <label className="grid gap-1.5 text-sm font-semibold">
        Name
        <input
          name="name"
          value={s.name}
          onChange={on}
          required
          autoComplete="name"
          className={f}
        />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold">
        Phone
        <input
          name="phone"
          type="tel"
          value={s.phone}
          onChange={on}
          autoComplete="tel"
          className={f}
        />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold">
        Service
        <select name="service" value={s.service} onChange={on} className={f}>
          {services.map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-semibold">
        Message
        <textarea
          name="message"
          rows={4}
          value={s.message}
          onChange={on}
          required
          className={f}
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-wa px-7 py-3.5 font-semibold text-white shadow-lg shadow-wa/30 transition hover:brightness-95 focus-visible:outline focus-visible:outline-4 focus-visible:outline-teal"
      >
        Send Us a Message
      </button>
      {/* <p className="text-center text-xs text-slate-300">
        Opens WhatsApp with your message ready to send.
      </p> */}
    </form>
  );
}
