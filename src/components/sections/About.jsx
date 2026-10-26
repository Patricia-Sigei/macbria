import SectionHeading from '@/components/ui/SectionHeading';
import {values} from '@/data/services';
import {site} from '@/data/site';
export default function About(){return(
<section id="about" className="py-20 md:py-28"><div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
<div><SectionHeading kicker="About us" title="A partner you can build with"/>
<p className="-mt-4 mb-4 text-slate-600">{site.name} is a Nairobi-based construction and engineering company led by Director {site.director}. We combine hands-on site delivery with sound engineering judgement, so clients get projects that are safe, durable and well finished.</p>
<p className="text-slate-600">Our promise is simple: <strong className="text-navy">building excellence and quality assurance</strong> on every job, large or small.</p></div>
<ul className="grid gap-4">{values.map((v,i)=>(<li key={v.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-soft p-5">
<span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl font-bold text-white ${i===1?'bg-accent':'bg-brand'}`}>✓</span>
<div><h3 className="font-bold text-navy">{v.title}</h3><p className="text-slate-500">{v.text}</p></div></li>))}</ul></div></section>)}
