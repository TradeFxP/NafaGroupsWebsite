import React from 'react';
import SEO from '../components/SEO';
import BlogSection from '../components/BlogSection';

const BlogPage = () => {
  return (
    <div className="page-wrapper">
      <SEO 
        title="Fintech Blog - Latest Trends, Blockchain & AI Innovations"
        description="Stay updated with latest fintech insights, blockchain technology updates, cryptocurrency news, AI-powered financial solutions, DeFi trends, and digital banking innovations from NaFa Barter experts."
        keywords="fintech blog, blockchain news, cryptocurrency updates, AI fintech trends, DeFi insights, digital banking blog, crypto trading tips, financial technology articles, payment technology news"
        canonical="/blog"
      />
      <BlogSection />
    </div>
  );
};

export default BlogPage;
