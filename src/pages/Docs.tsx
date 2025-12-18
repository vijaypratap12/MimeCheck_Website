import './Docs.css';

const Docs = () => {
  return (
    <div className="docs">
      <div className="docs-container">
        <h1 className="docs-title">Documentation</h1>
        
        <section className="docs-section">
          <h2>Installation</h2>
          <p>Install MimeCheck via NuGet Package Manager or .NET CLI:</p>
          <div className="code-block">
            <pre><code>dotnet add package MimeCheck</code></pre>
          </div>
          <p>Or via Package Manager Console:</p>
          <div className="code-block">
            <pre><code>Install-Package MimeCheck</code></pre>
          </div>
        </section>

        <section className="docs-section">
          <h2>Quick Start</h2>
          <h3>Basic MIME Detection</h3>
          <div className="code-block">
            <pre><code>{`using MimeCheck.Validation;
using MimeCheck.Detection;

// Detect from file path
var result = MimeValidator.DetectFromFile("photo.jpg");
Console.WriteLine($"MIME Type: {result.MimeType}");     // image/jpeg
Console.WriteLine($"Category: {result.Category}");      // Image
Console.WriteLine($"Confidence: {result.Confidence}");  // High

// Detect from byte array
byte[] fileBytes = File.ReadAllBytes("document.pdf");
var detection = MimeValidator.Detect(fileBytes);

// Detect from stream
using var stream = File.OpenRead("archive.zip");
var streamResult = await MimeValidator.DetectAsync(stream);`}</code></pre>
          </div>
        </section>

        <section className="docs-section">
          <h3>Fluent Validation API</h3>
          <div className="code-block">
            <pre><code>{`using MimeCheck.Validation;

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
}
else
{
    foreach (var error in validation.Errors)
    {
        Console.WriteLine($"Error: {error.Message}");
    }
}

// Category-based validation
var imageValidation = MimeValidator.FromBytes(fileBytes)
    .AllowImages()
    .AllowMimeTypes("image/svg+xml") // Also allow SVG
    .MaxSizeMB(5)
    .Validate();`}</code></pre>
          </div>
        </section>

        <section className="docs-section">
          <h3>Quick Validation Methods</h3>
          <div className="code-block">
            <pre><code>{`// Simple type checks
bool isImage = MimeValidator.IsImage("photo.png");
bool isDocument = MimeValidator.IsDocument("report.pdf");
bool isArchive = MimeValidator.IsArchive("backup.zip");
bool isExecutable = MimeValidator.IsExecutable("app.exe");

// Check specific MIME types
bool isPdf = MimeValidator.IsValid("file.pdf", "application/pdf");
bool isJpegOrPng = MimeValidator.IsValid("image.jpg", "image/jpeg", "image/png");`}</code></pre>
          </div>
        </section>

        <section className="docs-section">
          <h2>ASP.NET Core Integration</h2>
          <h3>Setup</h3>
          <div className="code-block">
            <pre><code>{`// Program.cs
using MimeCheck.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// Add MimeCheck services
builder.Services.AddMimeValidation(options =>
{
    options.DenyExecutables();
    options.WithMaxSizeMB(50);
    options.AllowCategories(MimeCategory.Image, MimeCategory.Document);
});

// Or use preset configurations
builder.Services.AddMimeValidationForImages(); // Only images
builder.Services.AddSecureMimeValidation();    // No executables, 100MB limit`}</code></pre>
          </div>
        </section>

        <section className="docs-section">
          <h3>Validation Attributes</h3>
          <div className="code-block">
            <pre><code>{`using MimeCheck.AspNetCore.Attributes;

[ApiController]
[Route("api/[controller]")]
public class UploadController : ControllerBase
{
    // Allow only specific MIME types
    [HttpPost("document")]
    public IActionResult UploadDocument(
        [AllowedMimeTypes("application/pdf", "application/msword")] 
        IFormFile file)
    {
        return Ok(new { file.FileName, file.Length });
    }

    // Allow by category
    [HttpPost("image")]
    public IActionResult UploadImage(
        [AllowedCategories(MimeCategory.Image)]
        [MaxFileSize(5 * 1024 * 1024)] // 5MB
        IFormFile file)
    {
        return Ok(new { file.FileName });
    }

    // Full validation with multiple rules
    [HttpPost("secure")]
    public IActionResult UploadSecure(
        [ValidateMimeType(
            AllowedTypes = new[] { "image/jpeg", "image/png", "application/pdf" },
            MaxSizeBytes = 10 * 1024 * 1024,
            ValidateExtension = true)]
        IFormFile file)
    {
        return Ok(new { file.FileName });
    }
}`}</code></pre>
          </div>
        </section>

        <section className="docs-section">
          <h3>Using the Validation Service</h3>
          <div className="code-block">
            <pre><code>{`using MimeCheck.AspNetCore.Services;

public class FileService
{
    private readonly IMimeValidationService _mimeValidator;

    public FileService(IMimeValidationService mimeValidator)
    {
        _mimeValidator = mimeValidator;
    }

    public async Task<bool> ProcessUpload(IFormFile file)
    {
        // Detect MIME type
        var detection = await _mimeValidator.DetectAsync(file);
        
        if (!detection.IsDetected)
            return false;

        // Validate with rules
        var validation = await _mimeValidator.ValidateAsync(file);
        
        return validation.IsValid;
    }
}`}</code></pre>
          </div>
        </section>

        <section className="docs-section">
          <h2>Advanced Usage</h2>
          <h3>Custom Validation Logic</h3>
          <div className="code-block">
            <pre><code>{`var result = MimeValidator.FromFile("file.dat")
    .AllowMimeTypes("application/octet-stream")
    .WithCustomValidation(detection =>
    {
        // Add custom validation logic
        if (detection.MimeType == "application/octet-stream")
        {
            // Perform additional checks
            return true;
        }
        return false;
    })
    .Validate();`}</code></pre>
          </div>
        </section>

        <section className="docs-section">
          <h3>Working with Streams</h3>
          <div className="code-block">
            <pre><code>{`// Async stream validation
await using var stream = File.OpenRead("large-file.zip");

var result = await MimeValidator.FromStream(stream)
    .AllowArchives()
    .MaxSizeMB(100)
    .ValidateAsync();`}</code></pre>
          </div>
        </section>

        <section className="docs-section">
          <h3>Extension Utilities</h3>
          <div className="code-block">
            <pre><code>{`using MimeCheck;

// Get MIME type from extension
string mimeType = FileExtensions.GetMimeType(".pdf"); // application/pdf

// Get extension from MIME type
string extension = FileExtensions.GetExtension("image/jpeg"); // .jpg

// Get category
MimeCategory category = FileExtensions.GetCategory(".docx"); // Document

// Check if extension is supported
bool supported = FileExtensions.IsSupported(".png"); // true`}</code></pre>
          </div>
        </section>

        <section className="docs-section">
          <h2>Error Handling</h2>
          <div className="code-block">
            <pre><code>{`var result = MimeValidator.FromFile("suspicious.exe")
    .DenyExecutables()
    .AllowDocuments()
    .Validate();

if (!result.IsValid)
{
    foreach (var error in result.Errors)
    {
        Console.WriteLine($"[{error.Code}] {error.Message}");
        // Example output:
        // [MIME_TYPE_DENIED] The MIME type 'application/x-msdownload' is not allowed
        // [CATEGORY_NOT_ALLOWED] File category 'Executable' is not in the allowed list
    }
}`}</code></pre>
          </div>
        </section>

        <section className="docs-section">
          <h2>Performance Considerations</h2>
          <ul>
            <li><strong>Minimal Read:</strong> Only reads the bytes needed for detection (typically 8-262 bytes)</li>
            <li><strong>No Full File Load:</strong> Works with streams without loading entire files into memory</li>
            <li><strong>Cached Signatures:</strong> Signature database is loaded once and cached</li>
            <li><strong>Async Support:</strong> Use async methods for I/O-bound operations</li>
          </ul>
        </section>

        <section className="docs-section">
          <h2>Need More Help?</h2>
          <p>
            For more examples and detailed API documentation, visit the{' '}
            <a href="https://github.com/vijaypratap12/MimeCheck" target="_blank" rel="noopener noreferrer">
              GitHub repository
            </a>
            .
          </p>
          <p>
            If you encounter any issues or have questions, please{' '}
            <a href="https://github.com/vijaypratap12/MimeCheck/issues" target="_blank" rel="noopener noreferrer">
              open an issue
            </a>{' '}
            on GitHub.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Docs;

