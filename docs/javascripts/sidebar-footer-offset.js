document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".md-footer");
  const sidebars = document.querySelectorAll(".md-sidebar");

  if (!footer || !sidebars.length) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      sidebars.forEach(sidebar => {
        sidebar.style.bottom = entry.isIntersecting ? "40px" : "10px";
      });
    },
    { threshold: 0 }
  );

  observer.observe(footer);
});
