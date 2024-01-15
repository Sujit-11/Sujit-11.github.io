const token = localStorage.getItem('Jwt') || '';

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
    // Optionally, redirect to login page or show a message
  }
}

// Call removeExpiredToken on page load
document.addEventListener('DOMContentLoaded', removeExpiredToken);

export default validToken;
