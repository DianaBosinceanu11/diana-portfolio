// Typing Effect
const typingEl = document.querySelector('.typing');
const roles = ['Full Stack Developer', 'UI/UX Designer', 'Business Analyst', 'Creative Thinker'];

let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function typeEffect() {
  currentText = roles[index];
  if (isDeleting) {
    typingEl.textContent = currentText.substring(0, charIndex--);
  } else {
    typingEl.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % roles.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

typeEffect();

function toggleMenu() {
  const menu = document.getElementById('navMenu');
  menu.classList.toggle('active');
}

// Close menu when a nav link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navMenu').classList.remove('active');
  });
});


// Project Tab Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const webProjects = document.getElementById('web-projects');
  const figmaProjects = document.getElementById('figma-projects');

  function fadeOutIn(hideEl, showEl) {
    hideEl.classList.add('hidden');

    setTimeout(() => {
      hideEl.style.display = 'none';
      showEl.style.display = 'grid';
      setTimeout(() => {
        showEl.classList.remove('hidden');
      }, 50); // mic delay pt a aplica efectul
    }, 300); // timpul pentru fade-out
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (btn.dataset.tab === 'web') {
        fadeOutIn(figmaProjects, webProjects);
      } else {
        fadeOutIn(webProjects, figmaProjects);
      }
    });
  });
});


// Show and hide popup functions
function showPopup() {
  document.getElementById("success-popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("success-popup").style.display = "none";
}

// Main form submission logic
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  // Send message to yourself (you get notified)
  emailjs.sendForm("gmail_service", "template_p6cvw3f", this)
    .then(() => {
      console.log("Message sent to me!");
    })
    .catch((error) => {
      console.error("Failed to send to me:", error);
    });

  // Send confirmation to the user
  emailjs.sendForm("gmail_service", "template_43hcnkz", this)
    .then(() => {
      showPopup();
      this.reset();
    })
    .catch((error) => {
      console.error("Failed to send auto-reply:", error);
    });
});
