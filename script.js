// script.js
const typingEl = document.querySelector('.typing');
const roles = ['Full Stack Developer', 'UI/UX Designer', 'Business Analyst','Tester', 'Creative Thinker'];
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
