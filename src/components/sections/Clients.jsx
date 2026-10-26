import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import {clients,testimonials} from '@/data/clients';
export default function Clients(){return(
<section id="clients" className="bg-navy py-20 text-white md:py-28"><div className="mx-auto max-w-6xl px-5">
<div className="mb-12 max-w-2xl"><p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-accent"><span className="h-0.5 w-8 bg-accent"/>Trusted by</p>
<h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Companies we’ve worked with</h2></div>
<ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">{clients.map((c,i)=>(<li key={i} className="grid h-24 place-items-center rounded-xl border border-dashed border-white/25 bg-white/5 p-3 text-center text-xs font-semibold text-slate-400">
{c.logo?<Image src={c.logo} alt={c.name} width={120} height={60} className="max-h-14 w-auto object-contain"/>:'Client logo'}</li>))}</ul>
<h3 className="mb-6 mt-16 text-2xl font-bold">Happy clients</h3>
<div className="grid gap-6 md:grid-cols-3">{testimonials.map((t,i)=>(<blockquote key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
<p aria-label="5 out of 5 stars" className="text-accent">★★★★★</p><p className="mt-3 text-slate-200">“{t.quote}”</p>
<footer className="mt-5 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand to-teal font-bold">{t.name[0]}</span><span className="text-sm"><strong>{t.name}</strong><br/><span className="text-slate-400">{t.role}</span></span></footer></blockquote>))}</div></div></section>)}
