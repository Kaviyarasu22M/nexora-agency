export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="#home" className="footer-logo">
          NEXORA<span>.</span>
        </a>

        <p>Building digital experiences that move brands forward.</p>

        <a href="#contact" className="footer-cta">
          Start a project ↗
        </a>
      </div>

      <div className="footer-bottom">
        <p>© 2026 NEXORA Studio. All rights reserved.</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#home" className="back-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}