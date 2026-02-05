function setLang(lang) {
  localStorage.setItem("siteLang", lang);

  document.querySelectorAll("[data-lang]").forEach(el => {
    const value = el.getAttribute("data-" + lang);
    if (value) el.innerHTML = value;
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("siteLang") || "tr";
  setLang(lang);
});
