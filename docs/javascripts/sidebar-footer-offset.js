document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".md-footer");
  if (!footer) return;

  const root = document.documentElement;
  const baseOffset = 10;

  const update = () => {
    const rect = footer.getBoundingClientRect();
    const vh = window.innerHeight;

    if (rect.top < vh) {
      root.style.setProperty(
        "--sidebar-footer-offset",
        rect.height + baseOffset + "px"
      );
    } else {
      root.style.setProperty(
        "--sidebar-footer-offset",
        baseOffset + "px"
      );
    }
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
});
