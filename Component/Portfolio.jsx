const projects = [
  {
    title: "VELORA",
    category: "Luxury Fashion & E-commerce",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "NEXFIN",
    category: "Fintech Dashboard",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "FORMA",
    category: "Architecture & Interior",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "PULSE",
    category: "Fitness & Wellness",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio" id="work">
      <div className="section-header">
        <div>
          <p className="section-tag">SELECTED PROJECTS</p>

          <h2>
            Our latest work<span>.</span>
          </h2>
        </div>

        <p className="section-description">
          A collection of creative projects built with strategy,
          purpose and attention to detail.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={project.title}>
            <div className="portfolio-image">
              <img src={project.image} alt={project.title} />

              <div className="portfolio-overlay">
                <span>View Project ↗</span>
              </div>
            </div>

            <div className="portfolio-info">
              <div>
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>

              <span className="portfolio-number">
                0{index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}