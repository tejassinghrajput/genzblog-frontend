import React from 'react';
import '../assets/LandingPage.css';

const Login = () => {
  const blogs = [
    { 
      title: 'Exploring the Future of Technology', 
      excerpt: 'A glimpse into the tech trends of tomorrow...', 
      link: '/blog/1',
      author: 'John Doe',
      date: 'November 14, 2024',
      views: '1200 views'
    },
    { 
      title: 'How Gen Z is Shaping Social Media', 
      excerpt: 'The role of Gen Z in the transformation of social platforms...', 
      link: '/blog/2',
      author: 'Jane Smith',
      date: 'November 13, 2024',
      views: '800 views'
    },
    { 
      title: 'Top 5 Programming Languages to Learn in 2024', 
      excerpt: 'A rundown of the most popular programming languages...', 
      link: '/blog/3',
      author: 'Alice Johnson',
      date: 'November 12, 2024',
      views: '950 views'
    },
  ];

  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="navbar-logo">
          <h2>GenZ Blog</h2>
        </div>
        <div className="navbar-links">
          <a href="#blogs" className="nav-link">Blogs</a>
          <a href="#total-blogs" className="nav-link">Total</a>
          <a href="/login" className="nav-link">Login Now</a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-text">
          <h1>Welcome to GenZ Blog</h1>
          <p>Your ultimate source for tech trends, social media insights, and more!</p>
          <a href="#blogs" className="cta-button">Explore Blogs</a>
        </div>
      </header>

      <section id="blogs" className="blogs-section">
        <h2>Recent Blog Posts</h2>
        <div className="blog-list">
          {blogs.map((blog, index) => (
            <div key={index} className="card">
              <div className="card-inner">
                <div className="card-front">
                  <h3>{blog.title}</h3>
                  <p>{blog.excerpt}</p>
                  <a href={blog.link} className="read-more-btn">Read More</a>
                </div>
                <div className="card-back">
                  <p><strong>Author:</strong> {blog.author}</p>
                  <p><strong>Published:</strong> {blog.date}</p>
                  <p><strong>Views:</strong> {blog.views}</p>
                  <a href={blog.link} className="read-more-btn">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="total-blogs" className="total-blogs">
        <h2>Total Blogs: {blogs.length}</h2>
        <p>Explore more topics and dive into a world of knowledge!</p>
      </section>
    </div>
  );
};

export default Login;
