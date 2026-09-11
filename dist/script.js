const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("#nav");
const header = document.querySelector("#siteHeader");
const progress = document.querySelector("#scrollProgress");
const hero = document.querySelector(".hero");
const neuralCanvas = document.querySelector("#neuralCanvas");
const cursorAura = document.querySelector("#cursorAura");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  document.body.classList.add("motion-ready");
}

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const services = {
  strategy: {
    index: "01",
    title: "AI Marketing Strategy",
    text: "Build the roadmap for integrating AI into marketing without wasting time on random tools.",
    items: ["AI opportunity audit", "Workflow and use-case mapping", "Prioritized implementation roadmap"],
  },
  automation: {
    index: "02",
    title: "Marketing Automation & AI Tools Setup",
    text: "Implement the right tools, prompt systems, and repeatable workflows so the team can save time and scale faster.",
    items: ["Tool selection and setup", "Prompt libraries and SOPs", "Content and follow-up automations"],
  },
  content: {
    index: "03",
    title: "Social Media & Content Strategy",
    text: "Create a system for consistent content ideas, planning, production, repurposing, and quality control.",
    items: ["Content pillars and calendars", "AI-assisted production flow", "Brand voice and review system"],
  },
  growth: {
    index: "04",
    title: "SEO/GEO & Media Buying",
    text: "Build acquisition across search, AI discovery, paid campaigns, and social channels with a clear measurement loop.",
    items: ["SEO and generative search visibility", "Meta and paid social campaign setup", "Content and landing page optimization"],
  },
  training: {
    index: "05",
    title: "Team Training",
    text: "Upskill your marketing team with practical sessions they can apply immediately in daily work.",
    items: ["Prompting foundations", "AI content workflows", "Automation and analytics routines"],
  },
  wordpress: {
    index: "06",
    title: "WordPress Development",
    text: "Build clean websites and landing pages that strengthen credibility, acquisition, and conversion.",
    items: ["Business and personal websites", "Landing pages and lead capture", "SEO-ready page structure"],
  },
  ugc: {
    index: "07",
    title: "UGC Video Production",
    text: "Plan and produce authentic short-form videos with our UGC content creation partners for launches, ads, and social proof.",
    items: ["Creator brief and script direction", "UGC partner coordination", "Videos ready for organic and paid social"],
  },
};

const serviceDetail = document.querySelector("#serviceDetail");
const serviceIndex = document.querySelector("#serviceIndex");
const serviceTitle = document.querySelector("#serviceTitle");
const serviceText = document.querySelector("#serviceText");
const serviceList = document.querySelector("#serviceList");

document.querySelectorAll(".service-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const key = tab.getAttribute("data-service");
    const service = services[key];

    if (!service) {
      return;
    }

    document.querySelectorAll(".service-tab").forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    serviceDetail?.animate(
      [
        { opacity: 1, transform: "translateY(8px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 260, easing: "cubic-bezier(.2,.8,.2,1)" },
    );

    serviceIndex.textContent = service.index;
    serviceTitle.textContent = service.title;
    serviceText.textContent = service.text;
    serviceList.innerHTML = service.items.map((item) => `<li>${item}</li>`).join("");
  });
});

const onScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = height > 0 ? (scrollTop / height) * 100 : 0;

  if (progress) {
    progress.style.width = `${Math.min(100, Math.max(0, ratio))}%`;
  }

  header?.classList.toggle("is-scrolled", scrollTop > 18);
  document.body.style.setProperty("--hero-parallax", `${Math.min(92, scrollTop * 0.11)}px`);
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

if (!prefersReducedMotion && cursorAura && window.matchMedia("(pointer: fine)").matches) {
  document.body.classList.add("has-pointer");

  window.addEventListener(
    "pointermove",
    (event) => {
      document.body.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.body.style.setProperty("--cursor-y", `${event.clientY}px`);
    },
    { passive: true },
  );
}

if (!prefersReducedMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      card.style.setProperty("--rotate-y", `${((x - 0.5) * 7).toFixed(2)}deg`);
      card.style.setProperty("--rotate-x", `${((0.5 - y) * 5).toFixed(2)}deg`);
      card.style.setProperty("--glow-x", `${(x * 100).toFixed(1)}%`);
      card.style.setProperty("--glow-y", `${(y * 100).toFixed(1)}%`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--rotate-y", "0deg");
      card.style.setProperty("--rotate-x", "0deg");
      card.style.setProperty("--glow-x", "50%");
      card.style.setProperty("--glow-y", "50%");
    });
  });
}

const startNeuralCanvas = () => {
  if (!neuralCanvas || !hero || prefersReducedMotion) {
    return;
  }

  const context = neuralCanvas.getContext("2d");
  if (!context) {
    return;
  }

  let width = 0;
  let height = 0;
  let dpr = 1;
  let frame = 0;
  let points = [];

  const colors = [
    [255, 90, 20],
    [22, 217, 255],
    [216, 255, 62],
  ];

  const makePoints = () => {
    const count = width < 700 ? 24 : 54;
    points = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.18,
      phase: Math.random() * Math.PI * 2,
      color: colors[index % colors.length],
    }));
  };

  const resize = () => {
    const rect = hero.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    neuralCanvas.width = Math.floor(width * dpr);
    neuralCanvas.height = Math.floor(height * dpr);
    neuralCanvas.style.width = `${width}px`;
    neuralCanvas.style.height = `${height}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    makePoints();
  };

  const draw = (time) => {
    context.clearRect(0, 0, width, height);
    const pulse = Math.sin(time * 0.001) * 0.5 + 0.5;

    points.forEach((point) => {
      point.x += point.vx;
      point.y += point.vy;

      if (point.x < -40) point.x = width + 40;
      if (point.x > width + 40) point.x = -40;
      if (point.y < -40) point.y = height + 40;
      if (point.y > height + 40) point.y = -40;
    });

    for (let i = 0; i < points.length; i += 1) {
      const a = points[i];
      const ax = a.x + Math.sin(time * 0.0008 + a.phase) * 18;
      const ay = a.y + Math.cos(time * 0.0007 + a.phase) * 14;

      for (let j = i + 1; j < points.length; j += 1) {
        const b = points[j];
        const bx = b.x + Math.sin(time * 0.0008 + b.phase) * 18;
        const by = b.y + Math.cos(time * 0.0007 + b.phase) * 14;
        const distance = Math.hypot(ax - bx, ay - by);

        if (distance < 165) {
          const alpha = (1 - distance / 165) * (0.12 + pulse * 0.08);
          context.strokeStyle = `rgba(${a.color[0]}, ${a.color[1]}, ${a.color[2]}, ${alpha})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(ax, ay);
          context.lineTo(bx, by);
          context.stroke();
        }
      }

      context.fillStyle = `rgba(${a.color[0]}, ${a.color[1]}, ${a.color[2]}, 0.55)`;
      context.beginPath();
      context.arc(ax, ay, 1.8, 0, Math.PI * 2);
      context.fill();
    }

    frame = window.requestAnimationFrame(draw);
  };

  if ("ResizeObserver" in window) {
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(hero);
  } else {
    window.addEventListener("resize", resize, { passive: true });
  }

  resize();
  frame = window.requestAnimationFrame(draw);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      window.cancelAnimationFrame(frame);
      return;
    }

    frame = window.requestAnimationFrame(draw);
  });
};

startNeuralCanvas();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 },
);

if (!prefersReducedMotion) {
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}
