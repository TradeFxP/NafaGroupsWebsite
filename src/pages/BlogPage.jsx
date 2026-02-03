import React from 'react';
import SEO from '../components/SEO';
import BlogSection from '../components/BlogSection';

const BlogPage = () => {
  return (
    <div className="page-wrapper">
      <SEO 
        title="Technology Blog - AI, Cybersecurity & Enterprise Solutions"
        description="Stay updated with latest AI insights, cybersecurity trends, enterprise software innovations, metaverse platforms, and digital transformation best practices from Nafa Groups Ltd experts."
        keywords="technology blog, AI trends, cybersecurity news, enterprise software, metaverse insights, digital transformation, cloud architecture, automation, enterprise technology articles"
        canonical="/blog"
      />
      <BlogSection />
    </div>
  );
};

export default BlogPage;
