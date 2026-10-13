
  function toggleDarkMode() {

    document.documentElement.classList.toggle("dark");

    const isDark = document.documentElement.classList.contains("dark");

    localStorage.setItem("darkMode", isDark);

    updateThemeButtons();
}


function updateThemeButtons() {

    const isDark = document.documentElement.classList.contains("dark");

    const desktopBtn = document.getElementById("desktopThemeBtn");
    const mobileBtn = document.getElementById("mobileThemeBtn");

    if (isDark) {

        desktopBtn.textContent = "☀️ Light";
        mobileBtn.textContent = "☀️ Light";

    } else {

        desktopBtn.textContent = "🌙 Dark";
        mobileBtn.textContent = "🌙 Dark";
    }
}


window.addEventListener("DOMContentLoaded", () => {

    const savedMode = localStorage.getItem("darkMode");

    if (savedMode === "true") {
        document.documentElement.classList.add("dark");
    }

    updateThemeButtons();
});





function toggleMenu() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('translate-x-full');
    }


    
  document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".progress-bar");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const targetWidth = bar.getAttribute("data-width");
          bar.style.width = targetWidth;
        }
      });
    }, { threshold: 0.5 });

    bars.forEach(bar => {
      observer.observe(bar);
    });
  });


    

  