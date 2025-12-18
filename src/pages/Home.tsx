import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">MimeCheck</h1>
          <p className="hero-subtitle">
            A comprehensive MIME type validation library for .NET
          </p>
          <p className="hero-description">
            Detect and validate file types using magic byte signatures with support for 50+ file formats
          </p>
          
          <div className="badges">
            <a href="https://www.nuget.org/packages/MimeCheck/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/nuget/v/MimeCheck.svg" alt="NuGet" />
            </a>
            <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT" />
            </a>
          </div>

          <div className="cta-buttons">
            <a 
              href="https://www.nuget.org/packages/MimeCheck/" 
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              📦 Download from NuGet
            </a>
            <a 
              href="https://github.com/vijaypratap12/MimeCheck" 
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 View Source Code
            </a>
            <Link to="/docs" className="btn btn-outline">
              📚 Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features-container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Magic Byte Detection</h3>
              <p>Identify file types by reading actual file headers, not just extensions</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>Fluent Validation API</h3>
              <p>Chain validation rules with an intuitive builder pattern</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>ASP.NET Core Integration</h3>
              <p>Validation attributes, middleware, and DI support</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📁</div>
              <h3>Category-Based Filtering</h3>
              <p>Filter by Image, Document, Archive, Audio, Video, Executable, Font, etc.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Async/Await Support</h3>
              <p>Full async support for stream and file operations</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💉</div>
              <h3>Dependency Injection</h3>
              <p>Ready-to-use services for ASP.NET Core</p>
            </div>
          </div>
        </div>
      </section>

      <section className="code-example">
        <div className="code-container">
          <h2 className="section-title">Quick Example</h2>
          <div className="code-block">
            <pre>
              <code>{`using MimeCheck.Validation;

// Detect from file path
var result = MimeValidator.DetectFromFile("photo.jpg");
Console.WriteLine($"MIME Type: {result.MimeType}");     // image/jpeg
Console.WriteLine($"Category: {result.Category}");      // Image

// Validate with chained rules
var validation = MimeValidator.FromFile("upload.pdf")
    .AllowMimeTypes("application/pdf", "application/msword")
    .DenyExecutables()
    .MaxSizeMB(10)
    .ValidateExtension()
    .Validate();

if (validation.IsValid)
{
    Console.WriteLine("File is valid!");
}`}</code>
            </pre>
          </div>
          <Link to="/docs" className="btn btn-primary">
            View Full Documentation
          </Link>
        </div>
      </section>

      <section className="supported-formats">
        <div className="formats-container">
          <h2 className="section-title">Supported File Formats</h2>
          <div className="formats-grid">
            <div className="format-category">
              <h3>📷 Images</h3>
              <p>JPEG, PNG, GIF, BMP, WebP, TIFF, ICO, SVG, PSD, RAW</p>
            </div>
            <div className="format-category">
              <h3>📄 Documents</h3>
              <p>PDF, DOCX, XLSX, PPTX, DOC, XLS, PPT, ODT, RTF</p>
            </div>
            <div className="format-category">
              <h3>📦 Archives</h3>
              <p>ZIP, RAR, 7Z, TAR, GZ, BZ2, XZ</p>
            </div>
            <div className="format-category">
              <h3>🎵 Audio</h3>
              <p>MP3, WAV, FLAC, OGG, AAC, WMA, AIFF</p>
            </div>
            <div className="format-category">
              <h3>🎬 Video</h3>
              <p>MP4, AVI, MKV, MOV, WMV, FLV, WebM</p>
            </div>
            <div className="format-category">
              <h3>⚙️ Executables</h3>
              <p>EXE, DLL, MSI, ELF, Mach-O</p>
            </div>
            <div className="format-category">
              <h3>🔤 Fonts</h3>
              <p>TTF, OTF, WOFF, WOFF2, EOT</p>
            </div>
            <div className="format-category">
              <h3>📋 Other</h3>
              <p>SQLite, XML, JSON, and more</p>
            </div>
          </div>
        </div>
      </section>

      <section className="installation">
        <div className="installation-container">
          <h2 className="section-title">Installation</h2>
          <div className="install-methods">
            <div className="install-method">
              <h3>.NET CLI</h3>
              <div className="code-block">
                <pre><code>dotnet add package MimeCheck</code></pre>
              </div>
            </div>
            <div className="install-method">
              <h3>Package Manager</h3>
              <div className="code-block">
                <pre><code>Install-Package MimeCheck</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

