import React, { useState, useEffect } from 'react';

const BlogSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.blog-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const posts = [
    {
      id: 1,
      image: '/assets/PERFORMANCE.png',
      category: 'Enterprise Tech',
      date: 'January 5, 2026',
      title: 'Cloud-Native Architecture for Modern Platforms',
      excerpt: 'How microservices and cloud infrastructure enable scalable, resilient enterprise systems. Best practices for building AI-powered and secure platforms.',
      link: '/blog/cloud-native-tech',
      author: 'Technical Team',
      readTime: '8 min read'
    },
    {
      id: 2,
      image: '/assets/ANALYTICS.png',
      category: 'AI & Automation',
      date: 'January 3, 2026',
      title: 'AI-Powered Automation in Enterprise Software',
      excerpt: 'Implementing intelligent automation workflows in enterprise CRM and business systems. Predictive analytics and smart decision-making platforms.',
      link: '/blog/ai-automation',
      author: 'Technical Team',
      readTime: '7 min read'
    },
    {
      id: 3,
      image: '/assets/SECURITY.png',
      category: 'Cybersecurity',
      date: 'December 30, 2025',
      title: 'Secure-by-Design Enterprise Architecture',
      excerpt: 'Using advanced security frameworks to protect digital infrastructure. Threat detection, compliance systems, and cloud security best practices.',
      link: '/blog/secure-architecture',
      author: 'Technical Team',
      readTime: '9 min read'
    }
  ];

  return (
    <section id="blog" className="blog-section section-padding">
      {/* Animated Background */}
      <div className="blog-bg-animation">
        <div className="blog-shape shape-1"></div>
        <div className="blog-shape shape-2"></div>
        <div className="blog-pattern"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-50">
            <h6 className={`section-subtitle ${isVisible ? 'animate-fade-in' : ''}`}>
              Technical Insights
            </h6>
            <h2 className={`section-title ${isVisible ? 'animate-slide-up' : ''}`}>
              Enterprise Technology Insights
            </h2>
            <p className={`section-description ${isVisible ? 'animate-fade-in-delayed' : ''}`}>
              AI, cybersecurity, and best practices for building intelligent platforms
            </p>
          </div>
        </div>
        <div className="row blog-grid">
          {posts.map((post, index) => (
            <div 
              key={post.id} 
              className="col-12 col-md-6 col-lg-4"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <article className={`blog-post ${isVisible ? 'animate-slide-up-blog' : ''}`}>
                <div className="post-image-wrapper">
                  <a href={post.link} className="post-image">
                    <img src={post.image} alt={post.title} />
                    <div className="image-overlay">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  </a>
                  <span className="post-category-badge">{post.category}</span>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span className="post-date">
                      <i className="fa fa-calendar"></i> {post.date}
                    </span>
                    <span className="post-read-time">
                      <i className="fa fa-clock"></i> {post.readTime}
                    </span>
                  </div>
                  <h3 className="post-title">
                    <a href={post.link}>{post.title}</a>
                  </h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-footer">
                    <div className="post-author">
                      <i className="fa fa-user"></i> {post.author}
                    </div>
                    <a href={post.link} className="read-more">
                      Read More <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12 text-center mt-50">
            <a href="/blog" className={`btn-view-all-blog ${isVisible ? 'animate-bounce-in' : ''}`}>
              View All Articles <i className="fa fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
