import React, { useEffect } from 'react';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical,
  ogImage,
  ogType = 'website'
}) => {
  const siteUrl = 'https://nafagroups.com';
  const defaultImage = `${siteUrl}/assets/images/og-image.jpg`;
  
  useEffect(() => {
    // Update document title
    document.title = `${title} | Nafa Groups Ltd`;
    
    // Helper function to update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    
    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Nafa Groups Ltd');
    updateMetaTag('robots', 'index, follow');
    
    // Open Graph tags
    updateMetaTag('og:title', `${title} | Nafa Groups Ltd`, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', `${siteUrl}${canonical}`, true);
    updateMetaTag('og:image', ogImage || defaultImage, true);
    updateMetaTag('og:site_name', 'Nafa Groups Ltd', true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', `${title} | Nafa Groups Ltd`);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage || defaultImage);
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `${siteUrl}${canonical}`);
    
  }, [title, description, keywords, canonical, ogImage, ogType]);
  
  return null;
};

export default SEO;
