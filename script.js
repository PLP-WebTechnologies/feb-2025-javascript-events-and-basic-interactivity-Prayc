// 1. Event Handling

// Button click: Change color on click
const colorBtn = document.getElementById('color-btn');
colorBtn.addEventListener('click', () => {
  colorBtn.style.backgroundColor = colorBtn.style.backgroundColor === 'orange' ? '#2d89ef' : 'orange';
});

// Hover effects: Change text color on hover
const hoverText = document.getElementById('hover-text');
hoverText.addEventListener('mouseenter', () => {
  hoverText.style.color = 'green';
});
hoverText.addEventListener('mouseleave', () => {
  hoverText.style.color = 'black';
});

// Keypress detection
const keypressInput = document.getElementById('keypress-input');
const keypressOutput = document.getElementById('keypress-output');
keypressInput.addEventListener('keydown', (e) => {
  keypressOutput.textContent = `You pressed: ${e.key}`;
});

// Bonus: Secret action on double-click or long press
const secretBtn = document.getElementById('secret-btn');

let pressTimer;

secretBtn.addEventListener('dblclick', () => {
  alert('Double-click detected! Secret unlocked 🔓');
});

secretBtn.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    alert('Long press detected! Secret unlocked 🔓');
  }, 1000); // 1 second long press
});
secretBtn.addEventListener('mouseup', () => {
  clearTimeout(pressTimer);
});
secretBtn.addEventListener('mouseleave', () => {
  clearTimeout(pressTimer);
});

// 2. Interactive Elements

// Text and color changing button
const textColorBtn = document.getElementById('text-color-btn');
textColorBtn.addEventListener('click', () => {
  textColorBtn.textContent = 'Clicked!';
  textColorBtn.style.backgroundColor = '#e91e63';
  textColorBtn.style.color = 'white';
});

// Simple image gallery/slideshow
const images = document.querySelectorAll('.gallery-img');
const prevImgBtn = document.getElementById('prev-img');
const nextImgBtn = document.getElementById('next-img');

let currentImgIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

prevImgBtn.addEventListener('click', () => {
  currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
  showImage(currentImgIndex);
});

nextImgBtn.addEventListener('click', () => {
  currentImgIndex = (currentImgIndex + 1) % images.length;
  showImage(currentImgIndex);
});

// Accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const isOpen = content.style.display === 'block';

    // Close all
    document.querySelectorAll('.accordion-content').forEach(c => (c.style.display = 'none'));
    accordionHeaders.forEach(h => h.classList.remove('active'));

    // Toggle this one
    if (!isOpen) {
      content.style.display = 'block';
      header.classList.add('active');
    }
  });
});

// 3. Form Validation
const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

// Real-time validation
nameInput.addEventListener('input', () => {
  nameError.textContent = nameInput.validity.valueMissing ? 'Name is required.' : '';
});

emailInput.addEventListener('input', () => {
  if (emailInput.validity.valueMissing) {
    emailError.textContent = 'Email is required.';
  } else if (emailInput.validity.typeMismatch) {
    emailError.textContent = 'Please enter a valid email.';
  } else {
    emailError.textContent = '';
  }
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.validity.valueMissing) {
    passwordError.textContent = 'Password is required.';
  } else if (passwordInput.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters.';
  } else {
    passwordError.textContent = '';
  }
});

form.addEventListener('submit', (e) => {
