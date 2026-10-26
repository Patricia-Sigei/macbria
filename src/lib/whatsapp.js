import {site} from '@/data/site';
export const defaultMessage='Hello Micbria Ltd, I would like to enquire about your services.';
export const waLink=(text=defaultMessage)=>`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
