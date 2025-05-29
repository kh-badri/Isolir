document.addEventListener("DOMContentLoaded", function () {
  // Update tahun di footer secara otomatis
  const tahunSpan = document.getElementById("tahun");
  if (tahunSpan) {
    tahunSpan.textContent = new Date().getFullYear();
  }

  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId.length > 1 && document.querySelector(targetId)) {
        // e.preventDefault(); // Dihapus agar scroll-behavior CSS yang bekerja
        // document.querySelector(targetId).scrollIntoView({
        //     behavior: 'smooth'
        // });
      }
    });
  });

  const liveChatLink = document.getElementById("livechat-link");
  if (liveChatLink) {
    liveChatLink.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Fungsi Live Chat akan segera tersedia!");
    });
  }

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  document
    .querySelectorAll(".content-section, .card, .langkah")
    .forEach((el) => {
      el.classList.add("fade-in-element");
      observer.observe(el);
    });
});
