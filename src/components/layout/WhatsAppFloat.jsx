import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import {waLink} from '@/lib/whatsapp';
export default function WhatsAppFloat(){return(
<a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat with Micbria Ltd on WhatsApp"
className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-wa px-4 py-3 font-semibold text-white shadow-2xl shadow-wa/40 transition hover:scale-105 focus-visible:outline focus-visible:outline-4 focus-visible:outline-teal">
<WhatsAppIcon className="h-6 w-6"/><span className="hidden sm:inline">Chat with us</span></a>)}
