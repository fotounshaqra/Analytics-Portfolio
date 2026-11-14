import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
  Mail,
  ExternalLink,
  Award,
  BarChart3,
  Code2,
  Sun,
  Moon
} from "lucide-react";

import {
  profile,
  skills,
  projects,
  publications,
  credentials,
  experience,
  education
} from "./data/portfolio";

const navItems = [
  ["01", "About", "#about"],
  ["02", "Statistics", "#statistics"],
  ["03", "Experience", "#experience"],
  ["04", "Education", "#education"],
  ["05", "Skills", "#skills"],
  ["06", "Projects", "#projects"],
  ["07", "Publications", "#publications"],
  ["08", "Certifications", "#certifications"],
  ["09", "Contact", "#contact"]
];

function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.90 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ number, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{number} / PORTFOLIO</p>
      <h2>{title}</h2>
      {description && (
        <p className="section-description">{description}</p>
      )}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "light";
  });

  const toggleTheme = () => {
    setTheme(currentTheme =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div>
      <header className="navbar">
        <a href="#home" className="brand">
          FOTOUN<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(([number, label, link]) => (
            <a
              key={number}
              href={link}
              onClick={() => setMenuOpen(false)}
            >
              <span>{number}</span> {label}
            </a>
          ))}
        </nav>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? <Moon size={19} /> : <Sun size={19} />}
        </button>
      </header>

      <main>
        {/* HERO */}
        <section className="hero page-width" id="home">
          <div className="hero-content">
            <Reveal>
              <p className="eyebrow">
                DATA ANALYTICS · BUSINESS INTELLIGENCE
              </p>

              <h1>
                {profile.name.split(" ")[0]}
                <br />
                <span>{profile.name.split(" ").slice(1).join(" ")}</span>
              </h1>

              <h2>{profile.title}</h2>

              <p className="hero-description">{profile.tagline}</p>

              <div className="hero-actions">
                <a href="#contact" className="button button-primary">
                  Get In Touch <ArrowUpRight size={17} />
                </a>
              </div>

              <div className="social-links">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.36 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.14 20.45H3.58V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                  </svg>
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Code2 />
                </a>

                <a href="#contact"`>
                  <Mail />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="hero-aside">
  <div className="hero-mark">F<span>.</span></div>

  <div
    className="hero-location"
    style={{
      // Keep your existing styles here
    }}
  >
    BASED IN JEDDAH, SAUDI ARABIA
  </div>

</div>
</section>
        {/* 01 ABOUT */}
        <section className="section page-width" id="about">
          <SectionHeading
            number="01"
            title="About Me"
          />
<Reveal>
  <div className="about-layout">
    <div className="about-copy">
      <p className="large-copy">
        <strong>{profile.introductionBold}</strong>
        <span className="intro-normal">
          {profile.introduction}
        </span>
      </p>

      <p>{profile.about}</p>
    </div>

    <div className="about-highlight">
      <span className="highlight-number"></span>
      <h3>Bridging the gap between academia and industry.</h3>
    </div>
  </div>
</Reveal>

          {/* Decorative line-chart motif leading into Statistics */}
          <div
            aria-hidden="true"
            className="about-chart-motif"
            style={{
              width: "100%",
              height: "112px",
              marginTop: "3.5rem",
              overflow: "hidden",
              opacity: 0.42
            }}
          >
            <svg
              viewBox="0 0 1100 112"
              preserveAspectRatio="none"
              role="presentation"
              style={{ width: "100%", height: "100%", display: "block" }}
            >
              <defs>
                <linearGradient id="chartFade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--purple)" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="var(--purple)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 88 C75 84 95 70 150 76 S235 94 290 62 S380 73 430 48 S520 62 575 38 S665 53 720 29 S815 49 865 20 S965 40 1010 14 S1070 20 1100 8 L1100 112 L0 112 Z"
                fill="url(#chartFade)"
              />
              <path
                d="M0 88 C75 84 95 70 150 76 S235 94 290 62 S380 73 430 48 S520 62 575 38 S665 53 720 29 S815 49 865 20 S965 40 1010 14 S1070 20 1100 8"
                fill="none"
                stroke="var(--purple)"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
              <circle cx="290" cy="62" r="3.5" fill="var(--purple)" />
              <circle cx="575" cy="38" r="3.5" fill="var(--purple)" />
              <circle cx="865" cy="20" r="3.5" fill="var(--purple)" />
              <circle cx="1010" cy="14" r="3.5" fill="var(--purple)" />
            </svg>
          </div>
        </section>

        {/* 02 STATISTICS */}
        <section className="section page-width" id="statistics">
          <SectionHeading
            number="02"
            title="Statistics"
            description="My experience so far."
          />

          <div className="kpi-grid">
            <Reveal>
              <article className="kpi-card">
                <div className="kpi-anim">
                  <div className="icon-bars">
                    <span style={{ height: "38%" }}></span>
                    <span style={{ height: "62%" }}></span>
                    <span style={{ height: "48%" }}></span>
                    <span style={{ height: "80%" }}></span>
                  </div>
                </div>
                <div className="kpi-value">3+</div>
                <div className="kpi-label">End-to-End Projects Built</div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="kpi-card">
                <div className="kpi-anim">
                  <svg viewBox="0 0 44 44" width="44" height="44">
                    <circle
                      cx="22" cy="22" r="16"
                      fill="none"
                      stroke="var(--line)"
                      strokeWidth="8"
                    />
                    <circle
                      cx="22" cy="22" r="16"
                      fill="none"
                      stroke="var(--purple)"
                      strokeWidth="8"
                      strokeDasharray="60 41"
                      transform="rotate(-90 22 22)"
                    >
                      <animate
                        attributeName="stroke-dasharray"
                        values="60 41;40 61;60 41"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </svg>
                </div>
                <div className="kpi-value">5M+</div>
                <div className="kpi-label">Rows Analyzed</div>
              </article>
            </Reveal>

            <Reveal delay={0.2}>
              <article className="kpi-card">
                <div className="kpi-anim">
                  <svg viewBox="0 0 44 44" width="44" height="44">
                    <circle
                      cx="22" cy="22" r="16"
                      fill="none"
                      stroke="var(--line)"
                      strokeWidth="8"
                    />
                    <circle
                      cx="22" cy="22" r="16"
                      fill="none"
                      stroke="var(--purple)"
                      strokeWidth="8"
                      strokeDasharray="60 41"
                      transform="rotate(-90 22 22)"
                    >
                      <animate
                        attributeName="stroke-dasharray"
                        values="60 41;40 61;60 41"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <path
                      d="M22 13 L8 29 M22 13 L36 29 M8 34 L36 34"
                      fill="none"
                      stroke="var(--navy)"
                      strokeWidth="1.5"
                    />
                    <circle cx="22" cy="13" r="2.5" fill="var(--maroon)" />
                    <circle cx="8" cy="29" r="2.5" fill="var(--purple)" />
                    <circle cx="36" cy="29" r="2.5" fill="var(--lavender)" />
                  </svg>
                </div>
                <div className="kpi-value">4+</div>
                <div className="kpi-label">Data Pipelines</div>
              </article>
            </Reveal>

            <Reveal delay={0.3}>
              <article className="kpi-card">
                <div className="kpi-anim">
                  <svg viewBox="0 0 44 44" width="44" height="44">
                    <rect
                      x="5" y="7" width="34" height="29" rx="3"
                      fill="none"
                      stroke="var(--maroon)"
                      strokeWidth="2"
                    />
                    <path
                      d="M5 14 H39"
                      fill="none"
                      stroke="var(--maroon)"
                      strokeWidth="2"
                    />
                    <circle cx="10" cy="10.5" r="1" fill="var(--purple)" />
                    <circle cx="14" cy="10.5" r="1" fill="var(--lavender)" />
                    <rect x="10" y="20" width="5" height="10" rx="1" fill="var(--purple)" />
                    <rect x="19" y="24" width="5" height="6" rx="1" fill="var(--lavender)" />
                    <rect x="28" y="17" width="5" height="13" rx="1" fill="var(--maroon)" />
                  </svg>
                </div>
                <div className="kpi-value">6+</div>
                <div className="kpi-label">Dashboards Built</div>
              </article>
            </Reveal>
          </div>
        </section>

        {/* 03 EXPERIENCE */}
        <section className="section section-tinted" id="experience">
          <div className="page-width">
            <SectionHeading
              number="03"
              title="Professional Experience"
              description=" My data journey."
            />

            <div className="timeline">
              {experience.map((item, index) => (
                <Reveal key={index}>
                  <article className="timeline-item">
                    <div className="experience-content">
                      <div className="experience-text">
                        <p className="eyebrow">{item.period}</p>
                        <h3>{item.title}</h3>
                        <p className="organization">{item.organization}</p>
                        {item.description && <p>{item.description}</p>}
                      </div>

                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 04 EDUCATION */}
        <section className="section page-width" id="education">
          <SectionHeading
            number="04"
            title="Education"
            description="My academic background and continued learning journey."
          />

          <div className="timeline">
            {education.map((item, index) => (
              <Reveal key={index}>
                <article className="timeline-item">
                  <p className="eyebrow">{item.period}</p>
                  <h3>{item.degree}</h3>
                  <p className="organization">{item.institution}</p>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 05 SKILLS */}
        <section className="section section-tinted" id="skills">
          <div className="page-width">
            <SectionHeading
              number="05"
              title="Softwares & Programing Languages"
              description="The tools and technologies I use and learn about."
            />

            <div className="skills-grid">
              {skills.map((group, index) => (
                <article className="skill-card" key={group.category}>
                  <span className="card-number">0{index + 1}</span>
                  <h3>{group.category}</h3>
                  <div className="skill-tags">
                    {group.items.map(item => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 06 PROJECTS */}
        <section className="section page-width" id="projects">
          <SectionHeading
            number="06"
            title="Selected Projects"
            description="A selection of dashboards and projects demonstrating my approach to data. I enjoy combining numbers with graphs and colors to have a memorable impact. Datasets used in these are publicly available. Dashboards I've built on Power BI won't be displayed due to confidentiality."
          />

          <div className="projects-list">
            {projects.map((project, index) => (
              <Reveal key={project.number} delay={index * 0.08}>
                <article className="project-row">
                  <span className="project-number">{project.number}</span>
                  <div className="project-content">
                    <p className="eyebrow">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="skill-tags">
                      {project.tools.map(tool => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>

                    {project.findings && (
                      <p className="project-findings">
                        <strong>Key insights:</strong> {project.findings}
                      </p>
                    )}

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-link"
                      >
                        View Project <ExternalLink size={15} />
                      </a>
                    )}
                  </div>

                  <div className="project-symbol">
                    <BarChart3 size={38} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 07 PUBLICATIONS */}
        <section className="section section-tinted" id="publications">
          <div className="page-width">
            <SectionHeading
              number="07"
              title="Publications"
              description="Research contributions."
            />

            <div className="publications-list">
              {publications.map(publication => (
                <Reveal key={publication.number}>
                  <article className="publication-row">
                    <span className="project-number">
                      {publication.number}
                    </span>

                    <div className="publication-content">
                      <p className="eyebrow">
                        {publication.organization} · {publication.year}
                      </p>
                      <h3>{publication.title}</h3>
                      <p>{publication.description}</p>
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-link"
                      >
                        Read Publication <ExternalLink size={15} />
                      </a>
                    </div>

                    <div className="project-symbol">
                      <Award size={38} />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 08 CERTIFICATion*/}
        <section className="section page-width" id="certifications">
          <SectionHeading
            number="08"
            title="Certifications & Achievements"
            description="Learning milestones."
          />

          <div className="credentials-list">
            {credentials.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.04}>
                <article className="credential-row">
                  <span className="credential-number">{item.number}</span>
                  <div className="credential-icon">
                    <Award size={22} />
                  </div>
                  <div className="credential-info">
                    <span className="eyebrow">{item.type}</span>
                    <h3>{item.title}</h3>
                    <p>{item.organization} · {item.year}</p>
                  </div>

                  {item.file && (
                    <a
                      href={item.file}
                      target="_blank"
                      rel="noreferrer"
                      className="credential-link"
                      aria-label="View certificate"
                    >
                      <ArrowUpRight />
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </section>


{/* 09 CONTACT */}
<section className="section page-width" id="contact">
  <SectionHeading
    number="09"
    title="Get In Touch"
  />

  <Reveal>
    <div className="contact-form-wrapper">
      <h3>Let's connect.</h3>

      <p className="contact-form-description">
        Have an opportunity, a question, or just want
        to say hello? I'd love to hear from you.
      </p>

      <form
        className="contact-form"
        onSubmit={(event) => {
          event.preventDefault();

          const data = new FormData(event.currentTarget);

          const firstName = data.get("firstName");
          const lastName = data.get("lastName");
          const email = data.get("email");
          const subject = data.get("subject");
          const message = data.get("message");

          const body = `${message}\n\nBest regards,\n${firstName} ${lastName}\nEmail: ${email}`;

          window.location.href =
            `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }}
      >
        <div className="contact-form-row">
          <div className="contact-field">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last name"
              autoComplete="family-name"
              required
            />
          </div>
        </div>

        <div className="contact-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </div>

        <div className="contact-field">
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="What would you like to discuss?"
            required
          />
        </div>

        <div className="contact-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me more..."
            rows={5}
            required
          />
        </div>

        <button type="submit" className="contact-send">
          Send Message ↗
        </button>

        <p className="contact-form-note">
          This will open your default email app.
        </p>
      </form>
    </div>
  </Reveal>
</section>


      </main>

      <footer className="footer page-width">
        <a href="#home" className="brand">
          FOTOUN<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Fotoun Shaqra. All rights reserved.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
