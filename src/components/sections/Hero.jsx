import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { services } from "@/data/services";
import { waLink } from "@/lib/whatsapp";
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden
        className="absolute -right-32 -top-32 h-[560px] w-[560px] rounded-full bg-brand/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/3 h-[420px] w-[420px] rounded-full bg-accent/25 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[.07] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <p className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal">
            Construction &amp; Engineering · Nairobi, Kenya
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
            Building excellence{" "}
            <span className="bg-gradient-to-r from-teal via-cyan-200 to-accent bg-clip-text text-transparent">
              &amp; quality assurance
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Roads, buildings, water works and earth works, backed by dependable
            engineering consultancy. Tell us about your project and we’ll
            respond fast.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <Button
              variant="wa"
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's Chat
            </Button>
            <Button variant="ghost" href="#services">
              Explore services
            </Button>
          </div>
        </div>
        <div className="rounded-3xl border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur-md">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">
            What we build
          </p>
          <ul className="mt-5 space-y-3">
            {services.map((s, i) => (
              <li
                key={s.title}
                className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 font-medium"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand to-teal text-sm font-bold">
                  {i + 1}
                </span>
                {s.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
