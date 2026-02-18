import { Helmet } from 'react-helmet-async';

interface HreflangTagsProps {
  path: string; // e.g., "/", "/about", "/blog/riesling"
}

export function HreflangTags({ path }: HreflangTagsProps) {
  const baseUrl = "https://sommelierquintelier.com";
  const fullPath = path === "/" ? "" : path;
  
  return (
    <Helmet>
      {/* Hreflang tags for multilingual SEO */}
      <link rel="alternate" hrefLang="nl" href={`${baseUrl}${fullPath}?lang=nl`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}${fullPath}?lang=en`} />
      <link rel="alternate" hrefLang="fr" href={`${baseUrl}${fullPath}?lang=fr`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${fullPath}`} />
    </Helmet>
  );
}
