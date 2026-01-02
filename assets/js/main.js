(function () {
  // Mobile menu toggle
  const btn = document.querySelector("[data-mobile-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (btn && nav) {
    btn.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // Active nav highlight based on current page
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll('a[data-navlink]').forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });
})();

