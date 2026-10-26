# Micbria Ltd website — Next.js 14 + Tailwind CSS 3
    npm install
    npm run dev          # http://localhost:3000
Copy .env.example to .env.local and set NEXT_PUBLIC_SITE_URL to the live domain.

## Structure
- src/app: layout, page, sitemap, robots, favicon, globals.css
- src/components/layout: Header, Footer, WhatsAppFloat
- src/components/sections: Hero, Services, Projects, About, Clients, Process, FAQ, Contact, ContactForm
- src/components/ui: Button, SectionHeading, WhatsAppIcon
- src/data: site.js (contacts, WhatsApp number, nav), services, projects, clients, faqs
- src/lib: seo.js (metadata + JSON-LD), whatsapp.js (link builder)
- public/images: logo + projects placeholders

## Replace placeholders
- Projects: put photos in public/images/projects and edit src/data/projects.js
- Clients/testimonials: edit src/data/clients.js (logos go in public/images/clients)
- WhatsApp number: site.whatsapp in src/data/site.js (country code, no + sign)
