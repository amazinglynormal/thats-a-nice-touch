const sections = document.querySelectorAll("section");
const tableOfContents = document.querySelector(".table-of-contents");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const link = tableOfContents.querySelector(
        `[href="#${entry.target.id}"]`
      );
      if (entry.isIntersecting) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "-5% 0px -75% 0px",
  }
);

sections.forEach((section) => observer.observe(section));
