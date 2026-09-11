const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("#nav");
const header = document.querySelector("#siteHeader");
const progress = document.querySelector("#scrollProgress");

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
  training: {
    index: "04",
    title: "Team Training",
    text: "Upskill your marketing team with practical sessions they can apply immediately in daily work.",
    items: ["Prompting foundations", "AI content workflows", "Automation and analytics routines"],
  },
  wordpress: {
    index: "05",
    title: "WordPress Development",
    text: "Build clean websites and landing pages that strengthen credibility, acquisition, and conversion.",
    items: ["Business and personal websites", "Landing pages and lead capture", "SEO-ready page structure"],
  },
  ugc: {
    index: "06",
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
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.animate(
          [
            { opacity: 1, transform: "translateY(14px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: 620,
            easing: "cubic-bezier(.2,.8,.2,1)",
          },
        );
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 },
);

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}
