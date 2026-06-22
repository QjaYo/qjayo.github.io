const header = document.querySelector(".site-header");

const updateHeader = () => {
  if (!header) return;
  header.dataset.scrolled = String(window.scrollY > 16);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
