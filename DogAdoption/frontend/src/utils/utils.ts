import validToken from '../service/CheckAuth';

export function isLoggedIn() {
  const isLoggedIn = validToken();
  if (!isLoggedIn) {
    window.location.href = '/src/views/LandingPage';
  }
}
