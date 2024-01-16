import validToken from '../service/CheckAuth';

export function isLoggedIn() {
  const isLoggedIn = validToken();
  if (!isLoggedIn) {
    window.location.href = '/src/views/LandingPage';
  }
}

export function getUserIdFromToken(token:string) {
  if (!token) {
    return null; // No token, so no user ID
  }
  const payloadBase64 = token.split('.')[1];
  const decodedJson = atob(payloadBase64);
  const decoded = JSON.parse(decodedJson);

  const userId = decoded.id;

  return userId;
}


