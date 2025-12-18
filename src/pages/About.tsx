import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1 className="about-title">About MimeCheck</h1>
        
        <section className="about-section">
          <h2>Project Overview</h2>
          <p>
            MimeCheck is a comprehensive MIME type validation library for .NET that provides robust file type 
            detection and validation using magic byte signatures. Unlike traditional methods that rely solely 
            on file extensions, MimeCheck reads the actual file headers to accurately identify file types, 
            providing an additional layer of security for your applications.
          </p>
          <p>
            With support for over 50 file formats across multiple categories including images, documents, 
            archives, audio, video, executables, and fonts, MimeCheck is designed to be both powerful and 
            easy to use.
          </p>
        </section>

        <section className="about-section">
          <h2>Why MimeCheck?</h2>
          <div className="features-list">
            <div className="feature-item">
              <h3>🔒 Enhanced Security</h3>
              <p>
                Prevent malicious files from being uploaded by validating actual file content, not just 
                file extensions which can be easily spoofed.
              </p>
            </div>
            <div className="feature-item">
              <h3>⚡ Performance Optimized</h3>
              <p>
                Reads only the necessary bytes for detection (typically 8-262 bytes), ensuring fast 
                validation without loading entire files into memory.
              </p>
            </div>
            <div className="feature-item">
              <h3>🎯 Developer Friendly</h3>
              <p>
                Intuitive fluent API, comprehensive ASP.NET Core integration, and extensive documentation 
                make it easy to implement secure file validation.
              </p>
            </div>
            <div className="feature-item">
              <h3>🔄 Actively Maintained</h3>
              <p>
                Regular updates, bug fixes, and new features based on community feedback and evolving 
                security requirements.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Use Cases</h2>
          <ul>
            <li>File upload validation in web applications</li>
            <li>Content management systems</li>
            <li>Document processing pipelines</li>
            <li>Media handling and conversion services</li>
            <li>Security scanning and malware detection</li>
            <li>API endpoints accepting file uploads</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>License</h2>
          <p>
            MimeCheck is released under the{' '}
            <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">
              MIT License
            </a>
            . This means you are free to use, modify, and distribute the library in both personal and 
            commercial projects.
          </p>
        </section>

        <section className="about-section">
          <h2>Contributing</h2>
          <p>
            Contributions are welcome! Whether it's bug reports, feature requests, or code contributions, 
            we appreciate all forms of community involvement.
          </p>
          <p>
            To contribute:
          </p>
          <ol>
            <li>Fork the repository on GitHub</li>
            <li>Create a feature branch</li>
            <li>Make your changes with clear commit messages</li>
            <li>Submit a pull request</li>
          </ol>
          <p>
            Please ensure your code follows the existing style and includes appropriate tests.
          </p>
        </section>

        <section className="about-section">
          <h2>Support & Contact</h2>
          <p>
            If you encounter any issues, have questions, or want to request features:
          </p>
          <div className="contact-links">
            <a 
              href="https://github.com/vijaypratap12/MimeCheck/issues" 
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">🐛</span>
              <span>Report Issues</span>
            </a>
            <a 
              href="https://github.com/vijaypratap12/MimeCheck/discussions" 
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">💬</span>
              <span>Discussions</span>
            </a>
            <a 
              href="https://github.com/vijaypratap12/MimeCheck" 
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">⭐</span>
              <span>Star on GitHub</span>
            </a>
          </div>
        </section>

        <section className="about-section">
          <h2>Acknowledgments</h2>
          <p>
            MimeCheck is built with modern .NET technologies and follows best practices for library 
            development. Special thanks to the .NET community for their continuous support and feedback.
          </p>
        </section>

        <section className="about-section cta-section">
          <h2>Get Started Today</h2>
          <p>
            Ready to add robust file validation to your .NET applications?
          </p>
          <div className="cta-buttons">
            <a 
              href="https://www.nuget.org/packages/MimeCheck/" 
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download from NuGet
            </a>
            <a 
              href="https://github.com/vijaypratap12/MimeCheck" 
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

