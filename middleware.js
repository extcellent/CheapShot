// middleware.mjs
import { geolocation, next } from '@vercel/functions';

// Läuft auf allen Seiten-Requests, überspringt aber Bilder/CSS/JS-Dateien
export const config = {
  matcher: ['/((?!.*\\.(?:js|css|png|jpg|jpeg|svg|json|webp)$).*)'],
};

export default function middleware(request) {
  const { country } = geolocation(request);
  const resolvedCountry = country || 'US';

  return next({
    headers: {
      'Set-Cookie': `visitor_country=${resolvedCountry}; Path=/; Max-Age=86400`,
    },
  });
}
