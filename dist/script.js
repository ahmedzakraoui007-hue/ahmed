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

const onScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = height > 0 ? (scrollTop / height) * 100 : 0;
  progress.style.width = `${Math.min(100, Math.max(0, ratio))}%`;
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
            duration: 650,
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
  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });
}
