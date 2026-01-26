import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical,
  ogImage,
  ogType = 'website'
}) => {
  const siteUrl = 'https://nafabarter.com';
  const defaultImage = `${siteUrl}/assets/images/og-image.jpg`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title} | NaFa Barter - Fintech Solutions</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={`${siteUrl}${canonical}`} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={`${title} | NaFa Barter`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={`${siteUrl}${canonical}`} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:site_name" content="NaFa Barter" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | NaFa Barter`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="NaFa Barter" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      
      {/* Mobile Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      
      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialService",
          "name": "NaFa Barter",
          "description": description,
          "url": siteUrl,
          "logo": `${siteUrl}/assets/NaFa-Groups-Logo.png`,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-88009-98899",
            "contactType": "Customer Service",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
          },
          "sameAs": [
            "https://www.facebook.com/nafabarter",
            "https://www.twitter.com/nafabarter",
            "https://www.linkedin.com/company/nafabarter"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
