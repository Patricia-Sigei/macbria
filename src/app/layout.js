import './globals.css';
import {jsonLd,faqLd} from '@/lib/seo';
export {metadata,viewport} from '@/lib/seo';
export default function RootLayout({children}){return(
<html lang="en"><body className="bg-white font-sans leading-relaxed text-slate-800 antialiased">
<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify([jsonLd,faqLd])}}/>
{children}</body></html>)}
