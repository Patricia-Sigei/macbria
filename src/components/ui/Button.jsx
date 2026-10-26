const v={primary:'bg-gradient-to-br from-accent to-orange-400 text-white shadow-lg shadow-accent/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40',
ghost:'border-2 border-white/40 text-white hover:bg-white/10',wa:'bg-wa text-white shadow-lg shadow-wa/30 hover:-translate-y-0.5 hover:brightness-95'};
export default function Button({href,variant='primary',small=false,children,className='',...p}){
const c=`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition focus-visible:outline focus-visible:outline-4 focus-visible:outline-teal ${small?'px-5 py-2 text-sm':'px-7 py-3.5'} ${v[variant]} ${className}`;
return href?<a href={href} className={c} {...p}>{children}</a>:<button className={c} {...p}>{children}</button>}
