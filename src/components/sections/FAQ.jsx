import SectionHeading from '@/components/ui/SectionHeading';
import {faqs} from '@/data/faqs';
export default function FAQ(){return(
<section id="faq" className="bg-soft py-20 md:py-28"><div className="mx-auto max-w-3xl px-5">
<SectionHeading kicker="FAQs" title="Frequently asked questions" center/>
<div className="space-y-3">{faqs.map(f=>(<details key={f.q} className="group rounded-xl border border-slate-200 bg-white p-5 open:shadow-lg">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy [&::-webkit-details-marker]:hidden">{f.q}<span aria-hidden className="text-2xl text-accent transition group-open:rotate-45">+</span></summary>
<p className="mt-3 text-slate-500">{f.a}</p></details>))}</div></div></section>)}
