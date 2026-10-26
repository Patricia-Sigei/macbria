import {site} from '@/data/site';
export default function Footer(){return(
<footer className="bg-navy-dark text-sm text-slate-400"><div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
<div><p className="text-lg font-extrabold tracking-wide text-white">MICBRIA LTD</p><p className="mt-2">{site.tagline}</p></div>
<div><p className="mb-3 font-semibold text-white">Quick links</p><ul className="grid grid-cols-2 gap-2">{site.nav.map(n=><li key={n.href}><a href={n.href} className="hover:text-teal">{n.label}</a></li>)}</ul></div>
<div><p className="mb-3 font-semibold text-white">Contact</p><p>{site.phones.map(p=>p.label).join(' · ')}</p><p>{site.email}</p><p>{site.address.street}, {site.address.city}</p></div></div>
<div className="border-t border-white/10 py-5 text-center">© {new Date().getFullYear()} {site.name}. All rights reserved.</div></footer>)}
