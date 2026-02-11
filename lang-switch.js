(function () {
  var storageKey = "plaplant-lang";
  var root = document.documentElement;
  var buttons = document.querySelectorAll("[data-lang-button]");
  var titleEn = document.body.getAttribute("data-title-en");
  var titleEs = document.body.getAttribute("data-title-es");

  function setLang(lang) {
    var next = lang === "es" ? "es" : "en";
    root.setAttribute("lang", next);

    buttons.forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang-button") === next;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    if (next === "es" && titleEs) {
      document.title = titleEs;
    } else if (titleEn) {
      document.title = titleEn;
    }

    try {
      localStorage.setItem(storageKey, next);
    } catch (e) {
      // ignore storage errors
    }
  }

  var saved = null;
  try {
    saved = localStorage.getItem(storageKey);
  } catch (e) {
    saved = null;
  }

  setLang(saved === "es" ? "es" : "en");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.getAttribute("data-lang-button"));
    });
  });
})();
