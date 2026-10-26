import SectionHeading from '@/components/ui/SectionHeading';
import {steps} from '@/data/services';
export default function Process(){return(
<section id="process" className="py-20 md:py-28"><div className="mx-auto max-w-6xl px-5">
<SectionHeading kicker="How we work" title="A clear path from idea to handover" center/>
<ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{steps.map((s,i)=>(<li key={s.t} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-accent to-orange-400 text-lg font-extrabold text-white">{i+1}</span>
<h3 className="mt-4 font-bold text-navy">{s.t}</h3><p className="mt-1 text-slate-500">{s.d}</p></li>))}</ol></div></section>)}
