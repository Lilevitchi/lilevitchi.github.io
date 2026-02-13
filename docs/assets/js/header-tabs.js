document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".md-header");
  const tabs = document.querySelector(".md-tabs");

  if (!header || !tabs) return;

  // Évite les doublons (navigation interne MkDocs)
  if (tabs.parentElement === header) return;

  header.appendChild(tabs);
  tabs.classList.add("in-header");
});
