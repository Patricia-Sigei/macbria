import {site} from '@/data/site';
import {services} from '@/data/services';
import {faqs} from '@/data/faqs';
const title='Micbria Ltd | Construction & Engineering in Nairobi, Kenya';
const description='Micbria Ltd is a Nairobi construction company delivering road and building construction, water works, earthworks and engineering consultancy across Kenya.';
export const metadata={
metadataBase:new URL(site.url),
title,
description,
applicationName:site.name,
creator:site.name,
publisher:site.name,
alternates:{canonical:'/'},
robots:{index:true,follow:true,googleBot:{index:true,follow:true,'max-image-preview':'large','max-snippet':-1,'max-video-preview':-1}},
openGraph:{title,description,url:site.url,siteName:site.name,locale:'en_KE',type:'website',images:[{url:'/images/logo.png',alt:`${site.name} logo`}]},
twitter:{card:'summary',title,description,images:['/images/logo.png']}};
export const viewport={themeColor:'#0f1b2d'};
export const jsonLd={'@context':'https://schema.org','@graph':[
{'@type':'WebSite','@id':`${site.url}/#website`,url:site.url,name:site.name,inLanguage:'en-KE',publisher:{'@id':`${site.url}/#business`}},
{'@type':'GeneralContractor','@id':`${site.url}/#business`,name:site.name,legalName:site.name,description,slogan:site.tagline,url:site.url,
logo:`${site.url}/images/logo.png`,image:`${site.url}/images/logo.png`,email:site.email,telephone:site.phones.map(p=>p.href),
address:{'@type':'PostalAddress',streetAddress:site.address.street,postOfficeBoxNumber:'59528',postalCode:'00100',addressLocality:site.address.city,addressRegion:'Nairobi County',addressCountry:'KE'},
areaServed:{'@type':'Country',name:'Kenya'},founder:{'@type':'Person',name:site.director,jobTitle:'Director'},
makesOffer:services.map(s=>({'@type':'Offer',itemOffered:{'@type':'Service',name:s.title,areaServed:{'@type':'Country',name:'Kenya'}}}))}
]};
export const faqLd={'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqs.map(f=>({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}}))};
