export default function SectionHeading({kicker,title,intro,center=false}){return(
<div className={`mb-12 ${center?'mx-auto max-w-2xl text-center':'max-w-2xl'}`}>
<p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-accent"><span className="h-0.5 w-8 bg-accent"/>{kicker}</p>
<h2 className="mt-3 text-3xl font-extrabold leading-tight text-navy md:text-4xl">{title}</h2>
{intro&&<p className="mt-3 text-slate-500">{intro}</p>}</div>)}
