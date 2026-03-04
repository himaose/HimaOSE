// Intersection Observer untuk scroll animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply observer ke semua elemen dengan class scroll-reveal
document.addEventListener("DOMContentLoaded", function () {
  const revealElements = document.querySelectorAll(".scroll-reveal");
  revealElements.forEach((el) => observer.observe(el));
  // open visi by default if section exists
  if (document.getElementById("visi")) {
    const firstCard = document.querySelector(".vm-card");
    showVM("visi", firstCard);
  }

  // ensure feather icons are rendered for any dynamic icons
  if (window.feather) {
    feather.replace();
  }
});

// Toggle description function (used by logo cards)
function toggleDesc(id) {
  const el = document.getElementById(id);
  if (el.style.display === "block") {
    el.style.display = "none";
  } else {
    document.querySelectorAll(".philo-desc").forEach((desc) => {
      desc.style.display = "none";
    });
    el.style.display = "block";
  }
}

// Show vision or mission, hiding the other and highlight the card
function showVM(id, card) {
  // hide contents
  document.querySelectorAll(".vm-content").forEach((el) => {
    el.classList.remove("show");
  });
  const el = document.getElementById(id);
  if (el) {
    el.classList.add("show");
  }

  // card highlight
  document.querySelectorAll(".vm-card").forEach((c) => {
    c.classList.remove("selected");
  });
  if (card) {
    card.classList.add("selected");
  }
}
