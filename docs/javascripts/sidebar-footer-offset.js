<script>
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".md-footer");
  if (!footer) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      const footerHeight = footer.offsetHeight;

      document.documentElement.style.setProperty(
        "--sidebar-gap",
        entry.isIntersecting
          ? `${footerHeight + 10}px`
          : "10px"
      );
    },
    {
      root: null,
      threshold: 0
    }
  );

  observer.observe(footer);
});
</script>
