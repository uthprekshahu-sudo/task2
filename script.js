document.addEventListener('DOMContentLoaded', () => {

  /* ===================================================
     1. CONTACT FORM VALIDATION
  =================================================== */
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const messageInput = document.getElementById('message');
  const formSuccess = document.getElementById('formSuccess');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const messageError = document.getElementById('messageError');

  function showError(input, errorEl, message) {
    input.classList.add('invalid');
    errorEl.textContent = message;
  }

  function clearError(input, errorEl) {
    input.classList.remove('invalid');
    errorEl.textContent = '';
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    formSuccess.textContent = '';

    // Name validation
    if (nameInput.value.trim() === '') {
      showError(nameInput, nameError, 'Name is required.');
      isValid = false;
    } else {
      clearError(nameInput, nameError);
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
      showError(emailInput, emailError, 'Email is required.');
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      showError(emailInput, emailError, 'Enter a valid email address.');
      isValid = false;
    } else {
      clearError(emailInput, emailError);
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (phoneInput.value.trim() === '') {
      showError(phoneInput, phoneError, 'Phone number is required.');
      isValid = false;
    } else if (!phonePattern.test(phoneInput.value.trim())) {
      showError(phoneInput, phoneError, 'Enter a valid 10-digit phone number.');
      isValid = false;
    } else {
      clearError(phoneInput, phoneError);
    }

    // Message validation
    if (messageInput.value.trim() === '') {
      showError(messageInput, messageError, 'Message cannot be empty.');
      isValid = false;
    } else {
      clearError(messageInput, messageError);
    }

    if (isValid) {
      formSuccess.textContent = 'Form submitted successfully!';
      form.reset();
    }
  });

  /* ===================================================
     2. DYNAMIC TO-DO LIST
  =================================================== */
  const todoInput = document.getElementById('todoInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const todoList = document.getElementById('todoList');

  function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;
    span.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    todoInput.value = '';
    todoInput.focus();
  }

  addTaskBtn.addEventListener('click', addTask);
  todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  });

});
