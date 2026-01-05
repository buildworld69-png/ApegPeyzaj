(function () {
  // Year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("is-open");
    });

    // Close on link click (mobile)
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => nav.classList.remove("is-open"));
    });
  }

  // Contact form -> mailto (temporary)
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);

      const name = (data.get("name") || "").toString().trim();
      const phone = (data.get("phone") || "").toString().trim();
      const subject = (data.get("subject") || "").toString().trim();
      const message = (data.get("message") || "").toString().trim();

      const lines = [
        `Ad Soyad: ${name}`,
        phone ? `Telefon: ${phone}` : null,
        "",
        message
      ].filter(Boolean);

      const mailSubject = encodeURIComponent(subject || "İletişim Formu");
      const mailBody = encodeURIComponent(lines.join("\n"));

      window.location.href = `mailto:apeggrup34@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    });
  }
})();
