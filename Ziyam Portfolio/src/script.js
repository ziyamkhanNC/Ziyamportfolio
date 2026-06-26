
const FALLBACK_DATA = {
  projects: [
    {
      id: "nanocoders",
      title: "NanoCoders",
      tagline: "Next-Generation EdTech & Coding Ecosystem for Youth",
      category: "EdTech",
      heroImage: "public/assets/data/Images/WhatsApp Image 2026-03-09 at 4.21.35 PM (2).jpeg",
      description: "An award-winning EdTech platform and tech academy transforming coding into gamified, hands-on learning pathways for over 1,400 students.",
      problem: "Traditional computer science education relies heavily on rote memorization and outdated syntaxes, leaving young students disengaged.",
      solution: "Built an interactive, project-driven web platform combined with live mentorship cohorts. Students build real-world web apps and games from day one.",
      technologies: ["React", "Node.js", "Tailwind CSS", "TypeScript", "PostgreSQL", "Three.js"],
      features: ["Interactive live coding sandbox", "Gamified milestone progression", "Integrated mentor feedback loop", "Custom project showcase"],
      timeline: "2022 - Present",
      challenges: "Scaling real-time code evaluation for hundreds of concurrent students while maintaining sub-100ms latency.",
      results: ["1400+ active students trained", "85% completion rate", "Recognized by top national startup incubators"],
      github: "https://github.com/ziyamkhan/nanocoders-platform",
      liveDemo: "https://nanocoders.io",
      caseStudy: "NanoCoders rapidly scaled into a nationwide movement. Students learned React and Python 3x faster than conventional curriculums."
    },
    {
      id: "colour-quest",
      title: "Colour Quest",
      tagline: "Gamified Color Theory & Accessible Palette Generator",
      category: "Web Apps",
      heroImage: "public/assets/data/Images/kids ai.jpeg",
      description: "An intuitive design utility that helps UI/UX designers master color harmony and WCAG 2.1 AAA accessible contrast ratios.",
      problem: "Designers struggle to build visually accessible color palettes that maintain high contrast for visually impaired users.",
      solution: "Engineered an algorithm-backed palette explorer simulating color blindness variations in real-time.",
      technologies: ["JavaScript (ES6+)", "HTML5 Canvas", "CSS3 Grid", "Color.js API", "GSAP"],
      features: ["Real-time WCAG score checker", "Interactive color wheel game", "One-click export to CSS & Tailwind", "Aurora gradient generator"],
      timeline: "3 Months (2024)",
      challenges: "Implementing accurate color space conversions (LAB, LCH, HSL) inside canvas animations without dropping frames.",
      results: ["Featured on design newsletters", "10,000+ palettes generated", "100% Lighthouse audit score"],
      github: "https://github.com/ziyamkhan/colour-quest",
      liveDemo: "https://colourquest.app",
      caseStudy: "Colour Quest bridged the gap between creative intuition and strict mathematical accessibility standards."
    },
    {
      id: "fps-web-game",
      title: "FPS Web Game",
      tagline: "High-Octane 3D Browser Shooter Powered by WebGL",
      category: "Games",
      heroImage: "public/assets/data/Images/WhatsApp Image 2026-03-09 at 4.21.35 PM (2).jpeg",
      description: "A zero-install 3D first-person shooter running directly inside standard web browsers at 60+ FPS.",
      problem: "Web games often suffer from clunky physics and heavy asset load times.",
      solution: "Harnessed Three.js and custom GLSL shaders with octree collision detection and compressed glTF assets.",
      technologies: ["Three.js", "WebGL", "GLSL Shaders", "Web Audio API", "Vite"],
      features: ["Custom Raycasting physics engine", "Spatial 3D audio environment", "Dynamic shadow mapping", "Sub-3MB initial asset payload"],
      timeline: "4 Months (2023)",
      challenges: "Optimizing draw calls and garbage collection to prevent memory leaks during extended gameplay sessions.",
      results: ["50,000+ game sessions played globally", "Showcased in Three.js developer showcases", "Zero server costs"],
      github: "https://github.com/ziyamkhan/fps-web-arena",
      liveDemo: "https://fpsarena.ziyam.dev",
      caseStudy: "This project proved that the web browser is a legitimate high-performance game console."
    },
    {
      id: "codenjoy",
      title: "CodeNJoy",
      tagline: "Interactive Coding Playground & Classroom Companion",
      category: "EdTech",
      heroImage: "public/assets/data/Images/Speaking.jpeg",
      description: "A collaborative real-time coding workspace allowing teachers to broadcast live code snippets to student screens.",
      problem: "Instructors spend 40% of their time debugging basic syntax typos on individual student machines.",
      solution: "Created a synchronized cloud workspace where instructors view student editors, flag issues instantly, and push hint snippets.",
      technologies: ["React", "Monaco Editor", "Socket.io", "Express", "Redis"],
      features: ["Synchronized live code streaming", "AI syntax assistant", "Instant snapshot sharing", "Temporary room codes"],
      timeline: "5 Months (2023 - 2024)",
      challenges: "Ensuring state synchronization across 50+ concurrent WebSockets per classroom without race conditions.",
      results: ["Adopted by 15+ coding schools", "Reduced troubleshooting latency by 65%", "Praised by tech educators"],
      github: "https://github.com/ziyamkhan/codenjoy-classroom",
      liveDemo: "https://codenjoy.io",
      caseStudy: "CodeNJoy emerged directly from my experience training 1400+ students to eliminate live teaching bottlenecks."
    }
  ],
  achievements: [
    { id: "ach-1", title: "National Startup Accelerator Winner", event: "National Tech Pitch 2025", date: "Nov 2025", location: "Islamabad", category: "Award", description: "Awarded 1st Place out of 300+ participating startups for NanoCoders.", image: "public/assets/data/Images/DSC05583.JPG", span: "col-span-2 row-span-2" },
    { id: "ach-2", title: "Keynote Speaker: Empowering Gen-Z", event: "DevCon Summit", date: "Aug 2025", location: "Lahore", category: "Speaking", description: "Delivered keynote to 800+ developers on scaling bootstrapped EdTech ventures.", image: "public/assets/data/Images/WhatsApp Image 2026-03-09 at 4.21.35 PM (2).jpeg", span: "col-span-1 row-span-1" },
    { id: "ach-3", title: "Milestone: 1,400+ Students Certified", event: "NanoCoders Ceremony", date: "June 2025", location: "Karachi", category: "Milestone", description: "Celebrated crossing 1,400 youth trained in modern frontend development.", image: "public/assets/data/Images/kids ai.jpeg", span: "col-span-1 row-span-2" },
    { id: "ach-4", title: "Best UI/UX Design Excellence", event: "Digital Creator Awards", date: "March 2025", location: "Global", category: "Award", description: "Recognized for outstanding visual storytelling and liquid glass aesthetic.", image: "public/assets/data/Images/ziyam-photo.jpg", span: "col-span-1 row-span-1" },
    { id: "ach-5", title: "Youngest EdTech Founder Panelist", event: "Future of Education Expo", date: "Jan 2025", location: "Karachi", category: "Leadership", description: "Joined industry veterans on stage to discuss CS curriculum modernization.", image: "public/assets/data/Images/Speaking.jpeg", span: "col-span-2 row-span-1" },
    { id: "ach-6", title: "WebGL Innovation Showcase", event: "Creative Frontend Collective", date: "Oct 2024", location: "Virtual", category: "Tech", description: "Featured for pushing browser hardware acceleration limits with Three.js.", image: "public/assets/data/Images/WhatsApp Image 2026-03-09 at 4.21.35 PM (2).jpeg", span: "col-span-1 row-span-1" }
  ],
  videos: [
    { id: "vid-csharp", title: "C# Variables and Data Types Tutorial for Beginners | Complete Guide", event: "YouTube Tutorial", topics: ["C#", "Programming"], audience: "Beginners", description: "Complete guide on C# variables and data types for absolute beginners.", duration: "10:00", thumbnail: "public/assets/data/Images/csharp-variables-thumbnail.jpg", type: "youtube", url: "https://www.youtube.com/embed/N0yX_oQA2E0" },
    { id: "vid-figma", title: "Figma Setup in 5 Minutes - Beginners Guide (Ep 2 | NanoCoders)", event: "NanoCoders", topics: ["Figma", "UI/UX Design"], audience: "Beginners", description: "A quick 5-minute setup guide for beginners getting started with Figma.", duration: "5:00", thumbnail: "public/assets/data/Images/figma-setup-thumbnail.jpg", type: "youtube", url: "https://www.youtube.com/embed/JaCub7lqxqw" }
  ],
  images: [
    { id: "future-leaders-award", title: "Future Leaders Award", caption: "Recognition at ITCN Asia for technology and youth empowerment.", src: "public/assets/data/Images/DSC05583.JPG" },
    { id: "kidpreneurship-session", title: "Kidpreneurship Session", caption: "A youth technology and entrepreneurship learning moment.", src: "public/assets/data/Images/kids ai.jpeg" },
    { id: "speaking-session", title: "Speaking Session", caption: "Motivational closing talk for young builders.", src: "public/assets/data/Images/Speaking.jpeg" },
    { id: "nanocoders-moment", title: "Nano Coders Moment", caption: "A Nano Coders event and community highlight.", src: "public/assets/data/Images/WhatsApp Image 2026-03-09 at 4.21.35 PM (2).jpeg" },
    { id: "ziyam-portrait", title: "Muhammad Ziyam Khan", caption: "Founder and CEO of Nano Coders.", src: "public/assets/data/Images/ziyam-photo.jpg" }
  ],
  skills: [
    { id: "html", name: "HTML5 & Semantic Web", category: "Frontend Architecture", level: "Expert (99%)", experience: "5+ Years", relatedProjects: ["NanoCoders", "Colour Quest", "FPS Web Game"], description: "Semantic markup, accessibility (ARIA), and SEO-optimized structures." },
    { id: "css", name: "CSS3 & Glassmorphism", category: "Frontend Architecture", level: "Master (98%)", experience: "5+ Years", relatedProjects: ["NanoCoders", "Colour Quest"], description: "Fluid layouts, Tailwind CSS, backdrop blurs, and liquid glass transitions." },
    { id: "javascript", name: "JavaScript (ES6+)", category: "Core Engineering", level: "Expert (95%)", experience: "5+ Years", relatedProjects: ["NanoCoders", "Colour Quest", "FPS Web Game"], description: "Event loops, async programming, WebSockets, and functional architecture." },
    { id: "react", name: "React & Ecosystem", category: "Frameworks", level: "Expert (96%)", experience: "4+ Years", relatedProjects: ["NanoCoders", "CodeNJoy"], description: "Component architecture, custom hooks, state management, and SSR." },
    { id: "python", name: "Python & AI", category: "Backend & AI", level: "Advanced (90%)", experience: "3+ Years", relatedProjects: ["NanoCoders Curriculum", "AI Hint Assistant"], description: "Algorithm design, automation scripting, FastAPI, and AI fundamentals." },
    { id: "threejs", name: "Three.js & WebGL", category: "Creative Coding", level: "Advanced (92%)", experience: "3+ Years", relatedProjects: ["FPS Web Game", "NanoCoders 3D"], description: "Hardware-accelerated 3D graphics, shaders, and scene optimization." },
    { id: "git", name: "Git Version Control", category: "DevOps", level: "Expert (95%)", experience: "5+ Years", relatedProjects: ["All Repositories"], description: "Branching strategies, interactive rebasing, and dev workflows." },
    { id: "github", name: "GitHub & CI/CD", category: "DevOps", level: "Expert (94%)", experience: "5+ Years", relatedProjects: ["NanoCoders Platform"], description: "GitHub Actions automation, open source management, and CI/CD." },
    { id: "figma", name: "Figma & Design Systems", category: "UI/UX Design", level: "Master (98%)", experience: "5+ Years", relatedProjects: ["NanoCoders Tokens", "Colour Quest UI"], description: "Auto-layout components, prototyping, and design tokens." },
    { id: "uidesign", name: "UI Design & Polish", category: "UI/UX Design", level: "Award-Winning (97%)", experience: "5+ Years", relatedProjects: ["Colour Quest", "Personal Brand"], description: "Liquid glass aesthetics, typography hierarchy, and dark mode grading." },
    { id: "uxdesign", name: "UX Research", category: "UI/UX Design", level: "Expert (94%)", experience: "4+ Years", relatedProjects: ["Student Journey Map"], description: "User journey mapping, wireframing, and conversion optimization." }
  ],
  testimonials: [
    { id: "test-1", quote: "Ziyam is one of the rare young founders who combines elite engineering talent with extraordinary visionary leadership. NanoCoders is fundamentally changing how software development is taught.", name: "Arsalan Ahmed", role: "MD, NIC Pakistan Accelerator", avatar: "public/assets/data/Images/ziyam-photo.jpg", rating: 5 },
    { id: "test-2", quote: "Before joining NanoCoders, I thought programming was impossible. Ziyam's teaching style and gamified curriculum helped me land my first developer job at just 18 years old!", name: "Fatima Zahra", role: "Alumni Student & Engineer", avatar: "public/assets/data/Images/kids ai.jpeg", rating: 5 },
    { id: "test-3", quote: "The liquid glass aesthetic and WebGL performance on Ziyam's web applications rival top agencies on Awwwards. Working with him elevated our conversion rate by 40%.", name: "Hamza Tariq", role: "CPO, VentureForge Labs", avatar: "public/assets/data/Images/WhatsApp Image 2026-03-09 at 4.21.35 PM (2).jpeg", rating: 5 }
  ],
  timeline: [
    { year: "2018", title: "The Beginning", subtitle: "Started my journey into programming", category: "Foundation", description: "Started my journey into programming by learning the fundamentals of coding and building my first web projects. This marked the beginning of my passion for technology." },
    { year: "2019 - 2021", title: "Building the Foundation", subtitle: "HTML, CSS, JS, Python, UI/UX", category: "Growth", description: "Expanded my knowledge of HTML, CSS, JavaScript, Python, UI/UX design, and graphic design while developing personal projects and strengthening my technical skills." },
    { year: "2022 - 2023", title: "Exploring Software Development", subtitle: "Web Apps & Game Dev", category: "Innovation", description: "Worked on web applications, interactive experiences, and game development projects while continuously improving my programming and design expertise." },
    { year: "2024", title: "Junior Game Developer", subtitle: "Section Soft", category: "Experience", description: "Joined Section Soft as a Junior Game Developer, where I gained hands-on industry experience, collaborated on professional game development projects, and strengthened my understanding of real-world software development workflows." },
    { year: "2025", title: "Founded NanoCoders", subtitle: "Vision & Mission", category: "Entrepreneurship", description: "Founded NanoCoders with the vision of empowering children and teenagers through coding, game development, web development, and technology education." },
    { year: "2025 - Present", title: "Creating Impact", subtitle: "Training & Educational Initiatives", category: "Impact", description: "Trained more than 1,400 students, launched educational initiatives, developed innovative digital products, and represented NanoCoders at technology events and workshops." },
    { year: "2026", title: "Leadership & Recognition", subtitle: "National Initiatives", category: "Leadership", description: "Expanded NanoCoders, participated in national startup and technology initiatives, earned recognition as a young entrepreneur, and continued building impactful educational technology solutions." },
    { year: "The Future", title: "Building the Next Generation", subtitle: "Global EdTech Vision", category: "Vision", description: "Scale NanoCoders into a globally recognized EdTech company, create world-class educational products, inspire millions of young learners, and shape the future of technology education." }
  ]
};

window.generatePlaceholder = function(seed, width=800, height=600) {
  return "public/assets/data/Images/ziyam-photo.jpg";
};

const APP_STATE = {
  projects: [],
  achievements: [],
  videos: [],
  images: [],
  skills: [],
  testimonials: [],
  timeline: [],
  activeCategory: "All",
  searchQuery: "",
  currentTestimonialIdx: 0,
  lightboxImages: [],
  currentLightboxIdx: 0
};

document.addEventListener("DOMContentLoaded", async () => {
  initLoadingScreen();
  await loadAllData();
  renderAllSections();
  initRotatingTitles();
  initInteractions();
  initSmoothScroll();
  initScrollAnimations();
});

function initLoadingScreen() {
  const loader = document.getElementById("loader");
  if (!loader) return;
  const bar = document.getElementById("loader-bar");
  const percentEl = document.getElementById("loader-percent");
  
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
      }, 500);
    }
    if (bar) bar.style.width = `${progress}%`;
    if (percentEl) percentEl.textContent = `${progress}%`;
  }, 60);
}

async function loadAllData() {
  const files = ['projects', 'achievements', 'videos', 'images', 'skills', 'testimonials', 'timeline'];
  
  for (const key of files) {
    try {
      const res = await fetch(`public/assets/data/${key}.json`);
      if (res.ok) {
        APP_STATE[key] = await res.json();
      } else {
        throw new Error("HTTP error");
      }
    } catch (err) {
      console.warn(`[Data Management] Using fallback data for ${key}`);
      APP_STATE[key] = FALLBACK_DATA[key];
    }
  }
}

function renderAllSections() {
  renderTimeline();
  renderProjects();
  renderAchievements();
  renderSpeakingAndVideos();
  renderImageGallery();
  renderSkills();
  renderTestimonials();
}

function renderImageGallery() {
  const container = document.getElementById("image-gallery-grid");
  if (!container) return;

  const images = APP_STATE.images || [];
  container.innerHTML = images.map((image, idx) => `
    <article class="gallery-item" tabindex="0" role="button" aria-label="View ${image.title}" onclick="openGalleryLightbox(${idx})" onkeydown="if(event.key === 'Enter') openGalleryLightbox(${idx})">
      <img src="${image.src}" alt="${image.title}" class="gallery-img" loading="lazy" onerror="this.onerror=null; this.src=window.generatePlaceholder('${image.title}', 900, 700)" />
      <div class="gallery-caption">
        <h3>${image.title}</h3>
        <p>${image.caption || ''}</p>
      </div>
    </article>
  `).join('');
}

function renderTimeline() {
  const container = document.getElementById("timeline-list");
  if (!container) return;
  
  container.innerHTML = APP_STATE.timeline.map((item, idx) => `
    <article class="timeline-item scroll-reveal" style="transition-delay: ${idx * 0.15}s">
      <div class="timeline-dot" aria-hidden="true"></div>
      <div class="timeline-content glass-panel">
        <span class="timeline-year">${item.year}</span>
        <h3 style="margin-bottom: 0.35rem">${item.title}</h3>
        <h4 class="text-gradient" style="font-size: 1rem; margin-bottom: 1rem">${item.subtitle}</h4>
        <p>${item.description}</p>
      </div>
    </article>
  `).join('');
}

function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filtered = APP_STATE.projects.filter(p => {
    const matchesCat = APP_STATE.activeCategory === "All" || p.category === APP_STATE.activeCategory;
    const q = APP_STATE.searchQuery.toLowerCase();
    const matchesSearch = !q || 
      p.title.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q) ||
      p.technologies.some(t => t.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: span 2; text-align: center; padding: 4rem" class="glass-panel"><p>No projects match your search query.</p></div>`;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <article class="project-card glass-panel" tabindex="0" role="button" aria-label="View project ${p.title}" onclick="openProjectModal('${p.id}')" onkeydown="if(event.key === 'Enter') openProjectModal('${p.id}')">
      <div class="project-img-wrapper">
        <img src="${p.heroImage}" alt="${p.title}" class="project-img" loading="lazy" onerror="this.onerror=null; this.src=window.generatePlaceholder('${p.title}', 800, 600)" />
        <span class="project-category-badge">${p.category}</span>
      </div>
      <div class="project-info">
        <div>
          <h3 style="font-size: 1.75rem; margin-bottom: 0.5rem">${p.title}</h3>
          <p style="font-size: 0.95rem; margin-bottom: 1.25rem">${p.tagline || p.description.substring(0, 110) + '...'}</p>
          <div class="project-tech-tags">
            ${p.technologies.slice(0, 5).map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>
        <div class="project-card-footer">
          <span class="view-case-link">Explore Case Study <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
          <span style="font-size: 0.8rem; color: var(--text-muted)">${p.timeline}</span>
        </div>
      </div>
    </article>
  `).join('');
}

function filterCategory(cat, btnEl) {
  APP_STATE.activeCategory = cat;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");
  renderProjects();
}

function handleSearch(val) {
  APP_STATE.searchQuery = val;
  renderProjects();
}
window.filterCategory = filterCategory;
window.handleSearch = handleSearch;

function renderAchievements() {
  const container = document.getElementById("achievements-masonry");
  if (!container) return;

  APP_STATE.lightboxImages = APP_STATE.achievements.map(a => a.image);

  container.innerHTML = APP_STATE.achievements.map((a, idx) => `
    <article class="masonry-item ${a.span || 'col-span-1 row-span-1'}" tabindex="0" role="button" aria-label="View full image for ${a.title}" onclick="openLightbox(${idx})" onkeydown="if(event.key === 'Enter') openLightbox(${idx})">
      <img src="${a.image}" alt="${a.title}" class="masonry-img" loading="lazy" onerror="this.onerror=null; this.src=window.generatePlaceholder('${a.title}', 600, 800)" />
      <div class="masonry-overlay">
        <span class="ach-badge">${a.category}</span>
        <h4 style="color: #fff; font-size: 1.15rem; margin-bottom: 0.25rem">${a.title}</h4>
        <p style="font-size: 0.85rem; color: var(--text-secondary)">${a.event} • ${a.date}</p>
      </div>
    </article>
  `).join('');
}

function renderSpeakingAndVideos() {
  const speakContainer = document.getElementById("speaking-grid");

  const vids = APP_STATE.videos;
  if (!vids || vids.length === 0) return;

  const cardHtml = (v) => `
    <article class="video-card glass-panel" tabindex="0" role="button" aria-label="Play video ${v.title}" onclick="openVideoPlayer('${v.id}')" onkeydown="if(event.key === 'Enter') openVideoPlayer('${v.id}')">
      <div class="video-thumb-container">
        <img src="${v.thumbnail}" alt="${v.title}" class="video-thumb" loading="lazy" onerror="this.onerror=null; this.src=window.generatePlaceholder('${v.title}', 800, 450)" />
        <div class="play-button-overlay">
          <div class="play-circle">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style="margin-left: 3px" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </div>
        </div>
        <span class="video-duration">${v.duration}</span>
      </div>
      <div class="video-details">
        <span class="section-tag" style="font-size: 0.7rem; padding: 0.2rem 0.75rem; margin:0">${v.event}</span>
        <h3 style="font-size: 1.35rem">${v.title}</h3>
        <p style="font-size: 0.9rem">${v.description}</p>
        <div class="project-tech-tags" style="margin-top: auto">
          ${(v.topics || []).map(t => `<span class="tech-tag" style="border-color: rgba(20,184,166,0.3); color: var(--accent-primary)">#${t}</span>`).join('')}
        </div>
      </div>
    </article>
  `;

  if (speakContainer) speakContainer.innerHTML = vids.map(cardHtml).join('');
}

function renderSkills() {
  const container = document.getElementById("skills-grid");
  if (!container) return;

  const iconSvgMap = {
    html5: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 2l1.6 18L12 22l6.4-2L20 2H4z"/><path d="M8.5 7h7L15 12H9l.5 5 2.5.7 2.5-.7.3-3"/></svg>`,
    css3: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>`,
    javascript: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M11 16c0 1.1-.9 2-2 2s-2-.9-2-2M15 11v7"/></svg>`,
    react: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)"/></svg>`,
    python: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2c-3 0-5 2-5 5v3h10v2H7c-3 0-5 2-5 5s2 5 5 5h3v-3h-2v-2h10c3 0 5-2 5-5s-2-5-5-5h-3V5h2V3z"/></svg>`,
    threejs: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    git: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M18 15V9a3 3 0 0 0-3-3H9M6 9v9"/></svg>`,
    github: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
    figma: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>`,
    palette: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.5-.7 1.5-1.5 0-.4-.1-.7-.4-1-.3-.3-.4-.6-.4-1 0-.8.7-1.5 1.5-1.5H16c3.3 0 6-2.7 6-6 0-5-4.5-9-10-9z"/></svg>`,
    layout: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`
  };

  container.innerHTML = APP_STATE.skills.map(s => `
    <div class="skill-capsule glass-panel">
      <div class="skill-icon-wrapper">
        ${iconSvgMap[s.icon] || iconSvgMap['code'] || `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`}
      </div>
      <div>
        <h4 style="font-size: 1.1rem; margin-bottom: 0.25rem">${s.name}</h4>
        <span class="text-teal" style="font-size: 0.85rem; font-weight: 700">${s.level}</span>
      </div>
      
      <div class="skill-hover-popover">
        <div style="font-size: 0.8rem; color: var(--accent-secondary); margin-bottom: 0.25rem; font-weight: bold">${s.category}</div>
        <div style="font-size: 0.85rem; color: #fff; margin-bottom: 0.5rem">${s.description}</div>
        <div style="font-size: 0.75rem; color: var(--text-muted)">Used in: ${s.relatedProjects.join(', ')}</div>
      </div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const container = document.getElementById("testimonials-track");
  if (!container) return;

  container.innerHTML = APP_STATE.testimonials.map((t, i) => `
    <blockquote class="testimonial-card glass-panel" style="display: ${i === 0 ? 'flex' : 'none'}; min-height: 280px">
      <div class="quote-icon" aria-hidden="true">“</div>
      <p style="font-size: 1.15rem; color: #fff; font-style: italic">${t.quote}</p>
      <footer class="test-author">
        <img src="${t.avatar}" alt="${t.name}" class="author-avatar" loading="lazy" onerror="this.onerror=null; this.src=window.generatePlaceholder('${t.name}', 150, 150)" />
        <div>
          <cite style="font-size: 1.1rem; color: var(--accent-primary); font-style: normal; display: block; font-weight: 600">${t.name}</cite>
          <span style="font-size: 0.85rem; color: var(--text-secondary)">${t.role}</span>
        </div>
      </footer>
    </blockquote>
  `).join('');

  let idx = 0;
  setInterval(() => {
    const cards = container.querySelectorAll(".testimonial-card");
    if (!cards.length) return;
    cards[idx].style.display = "none";
    idx = (idx + 1) % cards.length;
    cards[idx].style.display = "flex";
  }, 6000);
}

function initRotatingTitles() {
  const titles = [
    "Founder & CEO of NanoCoders",
    "Front-End Developer",
    "UI/UX Designer",
    "Technology Educator",
    "Product Builder",
    "Public Speaker"
  ];
  const el = document.getElementById("rotating-title");
  if (!el) return;

  let titleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const cur = titles[titleIdx];
    if (isDeleting) {
      el.textContent = cur.substring(0, charIdx - 1);
      charIdx--;
    } else {
      el.textContent = cur.substring(0, charIdx + 1);
      charIdx++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIdx === cur.length) {
      speed = 2500;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      titleIdx = (titleIdx + 1) % titles.length;
      speed = 500;
    }

    setTimeout(type, speed);
  }

  setTimeout(type, 1000);
}

function openProjectModal(id) {
  const proj = APP_STATE.projects.find(p => p.id === id);
  if (!proj) return;

  const modal = document.getElementById("project-modal");
  const content = document.getElementById("project-modal-body");

  content.innerHTML = `
    <span class="section-tag">${proj.category}</span>
    <h2 style="margin-bottom: 1rem">${proj.title}</h2>
    <p style="font-size: 1.2rem; color: var(--text-primary); margin-bottom: 2.5rem">${proj.description}</p>
    
    <div style="margin-bottom: 3rem">
      <img src="${proj.heroImage}" alt="${proj.title}" style="width:100%; border-radius: 20px; border: 1px solid var(--glass-border); box-shadow: var(--glow-primary)" loading="lazy" onerror="this.onerror=null; this.src=window.generatePlaceholder('${proj.title}', 1200, 600)" />
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2.5rem; margin-bottom: 3rem">
      <div class="glass-panel" style="padding: 2rem; background: rgba(255,255,255,0.03)">
        <h4 class="text-teal" style="margin-bottom: 1rem">The Problem</h4>
        <p>${proj.problem}</p>
      </div>
      <div class="glass-panel" style="padding: 2rem; background: rgba(255,255,255,0.03)">
        <h4 class="text-violet" style="margin-bottom: 1rem">The Solution</h4>
        <p>${proj.solution}</p>
      </div>
    </div>

    <div style="margin-bottom: 3rem">
      <h3 style="margin-bottom: 1.5rem">Architecture & Key Features</h3>
      <ul style="list-style: none; display: grid; gap: 1rem">
        ${proj.features.map(f => `<li style="display:flex; gap:1rem; align-items:center"><span style="color:var(--accent-primary); font-weight:bold">✓</span> <span style="color:#fff">${f}</span></li>`).join('')}
      </ul>
    </div>

    <div style="margin-bottom: 3rem">
      <h4 style="margin-bottom: 1rem">Technologies Engineered</h4>
      <div class="project-tech-tags">
        ${proj.technologies.map(t => `<span class="tech-tag" style="padding: 0.5rem 1rem; font-size: 0.9rem">${t}</span>`).join('')}
      </div>
    </div>

    <div style="margin-bottom: 3rem" class="glass-panel" style="padding: 2rem">
      <h4 class="text-cyan" style="margin-bottom: 1rem">Technical Challenges & Outcomes</h4>
      <p style="margin-bottom: 1.5rem">${proj.challenges}</p>
      <div style="display:flex; flex-wrap:wrap; gap:1.5rem">
        ${proj.results.map(r => `<div style="flex:1; min-width:200px; padding:1rem; background:rgba(20,184,166,0.1); border-radius:12px; border:1px solid rgba(20,184,166,0.3)"><strong style="color:#fff">${r}</strong></div>`).join('')}
      </div>
    </div>

    <div style="display:flex; gap: 1.5rem; flex-wrap: wrap">
      ${proj.liveDemo ? `<a href="${proj.liveDemo}" target="_blank" class="btn btn-primary">Launch Live App</a>` : ''}
      ${proj.github ? `<a href="${proj.github}" target="_blank" class="btn btn-secondary">View Repository</a>` : ''}
    </div>
  `;

  modal.classList.add("active");
}

function closeProjectModal() {
  document.getElementById("project-modal").classList.remove("active");
}
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;

function openVideoPlayer(id) {
  const vid = APP_STATE.videos.find(v => v.id === id);
  if (!vid) return;

  const modal = document.getElementById("video-modal");
  const container = document.getElementById("video-player-container");
  const titleEl = document.getElementById("video-modal-title");

  titleEl.textContent = vid.title;

  if (vid.mp4Src) {
    container.innerHTML = `<video controls autoplay style="width:100%; border-radius:16px; border:1px solid var(--glass-border)" src="${vid.mp4Src}"><source src="${vid.mp4Src}" type="video/mp4" />Your browser does not support HTML video.</video>`;
  } else {
    container.innerHTML = `<iframe width="100%" height="450" style="border-radius:16px; border:1px solid var(--glass-border)" src="${vid.url}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }

  modal.classList.add("active");
}

function closeVideoModal() {
  const modal = document.getElementById("video-modal");
  const container = document.getElementById("video-player-container");
  modal.classList.remove("active");
  setTimeout(() => { container.innerHTML = ""; }, 300);
}
window.openVideoPlayer = openVideoPlayer;
window.closeVideoModal = closeVideoModal;

function openLightbox(idx) {
  APP_STATE.currentLightboxIdx = idx;
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  img.src = APP_STATE.lightboxImages[idx];
  lb.classList.add("active");
}

function openGalleryLightbox(idx) {
  APP_STATE.lightboxImages = (APP_STATE.images || []).map(image => image.src);
  openLightbox(idx);
}
window.openGalleryLightbox = openGalleryLightbox;

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
}
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

function navLightbox(step) {
  const len = APP_STATE.lightboxImages.length;
  APP_STATE.currentLightboxIdx = (APP_STATE.currentLightboxIdx + step + len) % len;
  document.getElementById("lightbox-img").src = APP_STATE.lightboxImages[APP_STATE.currentLightboxIdx];
}
window.navLightbox = navLightbox;

function initInteractions() {

  const spotlight = document.getElementById("mouse-spotlight");
  if (spotlight) {
    window.addEventListener("mousemove", (e) => {
      spotlight.style.left = `${e.clientX}px`;
      spotlight.style.top = `${e.clientY}px`;
    });
  }

  const portrait = document.getElementById("portrait-container");
  if (portrait) {
    portrait.addEventListener("mousemove", (e) => {
      const rect = portrait.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      portrait.style.transform = `rotateY(${x / 15}deg) rotateX(${-y / 15}deg)`;
    });
    portrait.addEventListener("mouseleave", () => {
      portrait.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
  }

  const copyBtn = document.getElementById("copy-email-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("contact@nanocoders.io");
      showToast("Email address copied to clipboard!");
    });
  }

  const form = document.getElementById("official-contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = form.querySelector("button[type='submit']");
      const orig = btn.innerHTML;
      btn.innerHTML = `Sending Message... <span class="pulse-dot"></span>`;
      btn.disabled = true;

      setTimeout(() => {
        showToast("Thank you! Your message has been sent to Ziyam.");
        form.reset();
        btn.innerHTML = orig;
        btn.disabled = false;
      }, 1500);
    });
  }

  const menuBtn = document.getElementById("mobile-menu-btn");
  const overlay = document.getElementById("mobile-nav-overlay");
  if (menuBtn && overlay) {
    menuBtn.addEventListener("click", () => {
      overlay.classList.toggle("active");
    });
    overlay.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => overlay.classList.remove("active"));
    });
  }
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  const text = document.getElementById("toast-msg");
  if (!toast) return;
  text.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}

function initSmoothScroll() {

  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
}

function initScrollAnimations() {

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".stat-number").forEach(el => {
          const target = parseInt(el.getAttribute("data-target"), 10);
          const suffix = el.getAttribute("data-suffix") || "";
          animateCounter(el, target, suffix);
        });
        statsObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById("stats");
  if (statsSection) statsObserver.observe(statsSection);

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".scroll-reveal").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "opacity 0.7s ease, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)";
    revealObserver.observe(el);
  });
}

function animateCounter(el, target, suffix) {
  let start = 0;
  const duration = 2000;
  const startTime = performance.now();

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 4); // Quartic ease out
    const currentVal = Math.floor(easeProgress * target);
    
    el.textContent = currentVal + suffix;
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = target + suffix;
    }
  }
  requestAnimationFrame(step);
}
