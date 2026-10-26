import Image from "next/image";
import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { site } from "@/data/site";
import { waLink } from "@/lib/whatsapp";
export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 backdrop-blur-lg">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-5">
        <a
          href="#top"
          aria-label="Micbria Ltd home"
          className="flex items-center gap-2.5 font-extrabold tracking-wide text-navy"
        >
          <Image
            src="/images/logo.png"
            alt="Micbria Ltd logo"
            width={64}
            height={51}
            priority
          />
          <span className="hidden sm:inline">MICBRIA LTD</span>
        </a>
        <nav aria-label="Main" className="hidden gap-6 lg:flex">
          {site.nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-slate-600 transition hover:text-brand"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button
            small
            variant="wa"
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            {/* <WhatsAppIcon className="h-4 w-4" /> */}
            Connect With Us
          </Button>
          <details className="relative lg:hidden">
            <summary
              aria-label="Menu"
              className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-lg border border-slate-200 text-lg [&::-webkit-details-marker]:hidden"
            >
              ☰
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 mt-3 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl"
            >
              {site.nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="block rounded-lg px-4 py-2.5 font-medium hover:bg-soft"
                >
                  {n.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
