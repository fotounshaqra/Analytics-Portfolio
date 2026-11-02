import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  Menu,
  X,
  Mail,
  ExternalLink,
  Award,
  GraduationCap,
  Database,
  BarChart3,
  Code2,
  Sun,
  Moon
} from "lucide-react";

import {
  profile, skills, projects, publications,credentials,
  experience, education
} from "./data/portfolio";

const navItems = [
  ["01", "About", "#about"],
  ["02", "Skills", "#skills"],
  ["03", "Projects", "#projects"],
  ["04", "Experience", "#experience"],
  ["05", "Education", "#education"],
  ["06", "Certificates", "#certificates"],
  ["07", "Contact", "#contact"]
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
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);


  const [language, setLanguage] = useState("en");
  const isArabic = language === "ar";

 
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "light";
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [language, isArabic]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);


  const toggleTheme = () => {
    setTheme((current) =>
      current === "light" ? "dark" : "light"
    );
    const [language, setLanguage] = useState("en");

const isArabic = language === "ar";
  };

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
    {theme === "light" ? (
      <Moon size={19} />
    ) : (
      <Sun size={19} />
    )}
  </button>

 <button
  className="language-toggle"
  onClick={() => setLanguage(isArabic ? "en" : "ar")}
  aria-label="Switch language"
  title="Switch language"
>
  {isArabic ? "EN" : "ع"}
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

              <p className="hero-description">
                {profile.introduction}
              </p>

              <div className="hero-actions">
                <a href="#projects" className="button button-primary">
                  Explore My Work <ArrowUpRight size={17} />
                </a>
                <a href={profile.cv} className="button button-outline" download>
                  Download CV <ArrowDown size={17} />
                </a>
              </div>

              <div className="social-links">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
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
                <a href={`mailto:${profile.email}`} aria-label="Email">
                  <Mail />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="hero-aside">
            <div className="hero-mark">F<span>.</span></div>
            <p>ANALYZE.</p>
            <p>DISCOVER.</p>
            <p className="accent-line">TRANSFORM.</p>
            <div className="hero-bottom">
              <span>BASED IN {profile.location.toUpperCase()}</span>
            </div>
          </div>

          <a href="#about" className="scroll-indicator">
            SCROLL TO EXPLORE <ArrowDown size={14} />
          </a>
        </section>

        {/* ABOUT */}
        <section className="section page-width" id="about">
          <SectionHeading
            number="1"
            title="About Me"
            description="A little introduction to my interests, background, and journey in data analytics."
          />

          <Reveal>
            <div className="about-layout">
              <div className="about-copy">
                <p className="large-copy">{profile.introduction}</p>
                <p>{profile.about}</p>
              </div>

              <div className="about-highlight">
                <span className="highlight-number">01</span>
                <h3>Curiosity drives discovery.</h3>
                <p>
                  I believe meaningful insights begin with asking
                  the right questions and understanding the data.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* SKILLS */}
        <section className="section section-tinted" id="skills">
          <div className="page-width">
            <SectionHeading
              number="2"
              title="Technical Skills"
              description="The tools and technologies I use and continue to develop."
            />

            <div className="skills-grid">
              {skills.map((group, index) => (
                <Reveal key={group.category} delay={index * 0.08}>
                  <article className="skill-card">
                    <span className="card-number">0{index + 1}</span>
                    <h3>{group.category}</h3>
                    <div className="skill-tags">
                      {group.items.map(item => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section page-width" id="projects">
          <SectionHeading
            number="3"
            title="Selected Projects"
            description="A selection of analytical work, dashboards, and projects demonstrating my approach to data."
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
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-link">
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


{/* PUBLICATIONS */}
<section className="section section-tinted" id="publications">
  <div className="page-width">
    <SectionHeading
      number="4"
      title="Publications"
      description="Research and academic contributions."
    />

    <div className="publications-list">
      {publications.map((publication) => (
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



{/* EXPERIENCE */}
<section className="section section-tinted" id="experience">
  <div className="page-width">
    <SectionHeading
      number="5"
      title="Professional Experience"
      description="My professional journey and hands-on experience."
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

              {item.logo && (
                <img
                  src={item.logo}
                  alt={`${item.organization} logo`}
                  className="company-logo"
                />
              )}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </div>
</section>
  {/* EDUCATION */}
<section className="section page-width" id="education">
  <SectionHeading
    number="6"
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


        {/* CERTIFICATES AND ACHIEVEMENTS */}
        <section className="section page-width" id="certificates">
          <SectionHeading
            number="7"
            title="Certificates & Achievements"
            description="A collection of professional learning milestones and achievements."
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
                    <a href={item.file} target="_blank" rel="noreferrer" className="credential-link" aria-label="View certificate">
                      <ArrowUpRight />
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact-section" id="contact">
          <div className="page-width">
            <Reveal>
              <p className="eyebrow">07 / GET IN TOUCH</p>
              <h2>Let's create something<br /><span>meaningful with data.</span></h2>
              <p className="contact-description">
                {profile.tagline} Feel free to connect with me
                for professional discussions and collaboration.
              </p>

              <a href={`mailto:${profile.email}`} className="button button-primary">
                Get In Touch <ArrowUpRight size={18} />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer page-width">
        <a href="#home" className="brand">FOTOUN<span>.</span></a>
        <p>© {new Date().getFullYear()} Fotoun Shaqra. All rights reserved.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
