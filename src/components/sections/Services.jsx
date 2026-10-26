import SectionHeading from '@/components/ui/SectionHeading';
import {services} from '@/data/services';
export default function Services(){return(
<section id="services" className="py-20 md:py-28"><div className="mx-auto max-w-6xl px-5">
<SectionHeading kicker="What we do" title="Engineering and construction, done right" intro="Five core services covering the full lifecycle of your infrastructure and building projects."/>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{services.map((s,i)=>(
<article key={s.title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl hover:shadow-brand/15">
<div aria-hidden className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${i%2?'from-accent to-orange-300':'from-brand to-teal'}`}/>
<span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand to-teal text-lg font-extrabold text-white">0{i+1}</span>
<h3 className="mt-5 text-lg font-bold text-navy">{s.title}</h3><p className="mt-2 text-slate-500">{s.text}</p></article>))}
<a href="#contact" className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-light p-7 text-white transition hover:-translate-y-1.5"><p className="text-xl font-bold">Have a project in mind?</p><p className="mt-2 text-slate-300">Get a quote →</p></a></div></div></section>)}
