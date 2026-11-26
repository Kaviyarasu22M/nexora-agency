const services = [
  {
    number: "01",
    icon: "✳",
    title: "UI/UX Design",
    description:
      "We design intuitive and visually engaging interfaces that create seamless digital experiences.",
  },
  {
    number: "02",
    icon: "⌘",
    title: "Web Development",
    description:
      "We develop fast, responsive and scalable websites tailored to your business needs.",
  },
  {
    number: "03",
    icon: "◈",
    title: "Branding",
    description:
      "We build memorable brand identities that help businesses stand out from the crowd.",
  },
  {
    number: "04",
    icon: "↗",
    title: "Digital Marketing",
    description:
      "We help brands reach the right audience and grow their digital presence.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="section-header">
        <div>
          <p className="section-tag">WHAT WE DO</p>
          <h2>
            Our services<span>.</span>
          </h2>
        </div>

        <p className="section-description">
          Creative solutions designed to help your business grow,
          connect and stand out.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.number}>
            <div className="service-top">
              <span className="service-icon">{service.icon}</span>
              <span className="service-number">{service.number}</span>
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <div className="service-arrow">↗</div>
          </div>
        ))}
      </div>
    </section>
  );
}