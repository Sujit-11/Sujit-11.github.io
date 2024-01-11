/* eslint-disable @typescript-eslint/no-unused-vars */
import '../../assets/scss/style.scss';
import http from '../../service/HttpClient';
import { HttpStatusCode } from 'axios';

const loginForm = document.getElementById('form-login') as HTMLFormElement;
const loginValidationError = document.getElementById(
  'login-error-message'
) as HTMLElement;
const emailInput = document.getElementById('login-email') as HTMLInputElement;
const passwordInput = document.getElementById(
  'login-password'
) as HTMLInputElement;

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  // Clear previous error messages
  emailInput.classList.remove('is-invalid');
  passwordInput.classList.remove('is-invalid');
  if (!loginValidationError.classList.contains('d-none')) {
    loginValidationError.classList.add('d-none');
  }
  const email = emailInput.value;
  const password = passwordInput.value;
  // Validate input
  if (!validateLoginInput(email.trim(), password.trim())) {
    loginValidationError.classList.remove('d-none');
  }
  // Submit form
  else {
    await sendPostRequestForLogin(email, password);
  }
});

const validateLoginInput = (email: string, password: string) => {
  if (email === '') {
    loginValidationError.innerHTML = 'Please enter your email';
    emailInput.classList.add('is-invalid');
    return false;
  }
  if (password === '') {
    loginValidationError.innerHTML = 'Please enter your password';
    passwordInput.classList.add('is-invalid');
    return false;
  }
  return true;
};

const sendPostRequestForLogin = async (email: string, password: string) => {
  try {
    const response = await http.post('/login', {
      email,
      password,
    });

    if (response.status === HttpStatusCode.Ok) {
      // Handle successful login here
      console.log('Login successful');
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error.response.status);
    if (error.response.status == HttpStatusCode.Unauthorized) {
      loginValidationError.classList.remove('d-none');
      loginValidationError.innerHTML = 'Invalid email or password';
    }
  }
};
