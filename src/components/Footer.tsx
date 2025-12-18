import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MimeCheck</h3>
            <p>A comprehensive MIME type validation library for .NET</p>
          </div>
          <div className="footer-section">
            <h4>Links</h4>
            <ul>
              <li>
                <a 
                  href="https://www.nuget.org/packages/MimeCheck/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  NuGet Package
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/vijaypratap12/MimeCheck" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/vijaypratap12/MimeCheck/issues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Report Issues
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>License</h4>
            <p>MIT License</p>
            <p>© {currentYear} MimeCheck</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

