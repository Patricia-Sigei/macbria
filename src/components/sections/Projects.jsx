import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import {projects} from '@/data/projects';
export default function Projects(){return(
<section id="projects" className="bg-soft py-20 md:py-28"><div className="mx-auto max-w-6xl px-5">
<SectionHeading kicker="Our work" title="Featured projects" intro="A selection of the work we deliver. Project photos will be added here."/>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{projects.map((p,i)=>(
<figure key={i} className={`group relative h-72 overflow-hidden rounded-2xl bg-navy ${i===0?'lg:col-span-2':''}`}>
<Image src={p.image} alt={`${p.title} – ${p.category}`} fill unoptimized sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent"/>
<figcaption className="absolute inset-x-0 bottom-0 p-5 text-white"><span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider">{p.category}</span>
<h3 className="mt-2 text-lg font-bold">{p.title}</h3><p className="text-sm text-slate-300">{p.location}</p></figcaption></figure>))}</div></div></section>)}
