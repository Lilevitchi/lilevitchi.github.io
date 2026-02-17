document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".md-footer");
  const sidebars = document.querySelectorAll(".md-sidebar");

  if (!footer || !sidebars.length) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      const offset = entry.isIntersecting ? footer.offsetHeight + 10 : 10;
      sidebars.forEach(sb => {
        sb.style.bottom = offset + "px";
      });
    },
    { threshold: 0 }
  );

  observer.observe(footer);
});
