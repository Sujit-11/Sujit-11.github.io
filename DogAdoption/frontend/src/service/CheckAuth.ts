import { showToast } from '../utils/Toast';

const token = localStorage.getItem('Jwt') || '';
const toast = document.getElementById('toast') as HTMLElement;

// Function to check if the token is expired
function isTokenExpired(token: string): boolean {
  const payloadBase64 = token.split('.')[1];
  const decodedJson = atob(payloadBase64);
  const decoded = JSON.parse(decodedJson);
  const exp = decoded.exp; // The 'exp' field contains the expiration time
  const currentTime = Date.now() / 1000; // Current time in seconds
  return exp < currentTime;
}

// Updated validToken function to check for expiration
const validToken = (): boolean => {
  if (token === '') {
    return false;
  }
  return !isTokenExpired(token);
};

// Function to remove the token if it's expired
export function removeExpiredToken(): void {
  if (token && isTokenExpired(token)) {
    localStorage.removeItem('Jwt');
    showToast('Token has been expired', toast, 'warning');
  }
}

// Call removeExpiredToken on page load
document.addEventListener('DOMContentLoaded', removeExpiredToken);

export default validToken;
