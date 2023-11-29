/**
 * Hides an element from an accessibility stand point
 *
 * @param {HTMLElement} element The element to be hidden
 */
const hideElement = (element) => {
  element.setAttribute('aria-hidden', 'true');
  element
    .querySelectorAll('button,input,a')
    .forEach((button) => button.setAttribute('tabindex', '-1'));
};

/**
 * Shows an element from an accessibility stand point
 *
 * @param {HTMLElement} element The element to be shown
 */
const showElement = (element) => {
  element.setAttribute('aria-hidden', 'false');
  element
    .querySelectorAll('button,input,a')
    .forEach((button) => button.removeAttribute('tabindex'));
};

/**
 * This toggles the current active form from login to signup and vice versa
 */
const toggleActiveForm = () => {
  const authCard = document.querySelector('.auth-card');
  const activeForm = authCard.getAttribute('data-current');

  if (activeForm === 'login') {
    // Set current active form to signup
    authCard.setAttribute('data-current', 'signup');

    // Hide all login content
    authCard
      .querySelectorAll('.login-content')
      .forEach((element) => hideElement(element));

    // Show all signup content
    authCard
      .querySelectorAll('.signup-content')
      .forEach((element) => showElement(element));
  } else {
    // Set current active form to login
    authCard.setAttribute('data-current', 'login');

    // Hide all signup content
    authCard
      .querySelectorAll('.signup-content')
      .forEach((element) => hideElement(element));

    // Show all login content
    authCard
      .querySelectorAll('.login-content')
      .forEach((element) => hideElement(element));
  }
};

window.onload = () => {
  // Hide all signup content by default
  document
    .querySelectorAll('.signup-content')
    .forEach((element) => hideElement(element));
};
