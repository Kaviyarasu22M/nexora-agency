export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        NEXORA<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="nav-button">
        Let's Talk ↗
      </a>
    </nav>
  );
}