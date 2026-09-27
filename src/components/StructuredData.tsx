import { Helmet } from 'react-helmet-async';

export function StructuredData() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Astra Technology Horizon",
    "url": "https://cover-letter-for-comnp-domain.vercel.app",
    "logo": "https://cover-letter-for-comnp-domain.vercel.app/logo.png",
    "description": "Providing free tools for .NP domain registration including cover letter generation and image compression."
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "NP Domain Letter Generator",
    "url": "https://cover-letter-for-comnp-domain.vercel.app",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "NPR"
    },
    "description": "Generate perfectly formatted cover letters and compress images for .com.np domain registration in Nepal."
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(appSchema)}
      </script>
    </Helmet>
  );
}
