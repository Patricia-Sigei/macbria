import ContactForm from "./ContactForm";
import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { waLink } from "@/lib/whatsapp";
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy py-20 text-white md:py-28"
    >
      <div
        aria-hidden
        className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-brand/30 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-accent">
            <span className="h-0.5 w-8 bg-accent" />
            Get in touch
          </p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Let’s talk about your project
          </h2>
          {/* <p className="mt-3 max-w-md text-slate-300">
            The quickest way to reach us is WhatsApp. You can also call or
            email.
          </p> */}
          {/* <Button
            variant="wa"
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6"
          >
            Let's Chat
          </Button> */}
          <address className="mt-10 space-y-5 not-italic">
            <p>
              <strong className="text-accent">Phone</strong>
              <br />
              {site.phones.map((p) => (
                <a
                  key={p.href}
                  href={`tel:${p.href}`}
                  className="mr-5 text-teal hover:underline"
                >
                  {p.label}
                </a>
              ))}
            </p>
            <p>
              <strong className="text-accent">Email</strong>
              <br />
              <a
                href={`mailto:${site.email}`}
                className="text-teal hover:underline"
              >
                {site.email}
              </a>
            </p>
            <p>
              <strong className="text-accent">Office</strong>
              <br />
              {site.address.street}
              <br />
              {site.address.po}, {site.address.city}, {site.address.country}
              <br />
              <a
                className="text-teal hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("The Hub Tsavo St Nairobi")}`}
              >
                Get directions →
              </a>
            </p>
          </address>
        </div>
        <ContactForm services={services.map((s) => s.title)} />
      </div>
    </section>
  );
}
