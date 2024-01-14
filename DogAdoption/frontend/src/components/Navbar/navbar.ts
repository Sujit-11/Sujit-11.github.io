// import * as bootstrap from 'bootstrap';

import validToken from '../../service/CheckAuth';

const displayNav = (placeholder: HTMLElement, active: string) => {
  fetch('../../components/Navbar/navbar.html')
    .then((res) => res.text())
    .then((data) => {
      placeholder.innerHTML = data;
      const navLinks = document.querySelectorAll('.nav-link');

      for (const navLink of navLinks) {
        navLink.classList.remove('active');
      }

      const currentPage = document.getElementById(active);
      currentPage!.classList.add('active');

      const homeElement = document.getElementById('nav-home');
      const requestElement = document.getElementById('nav-requests');
      const myDogElement = document.getElementById('nav-mydog');
      // const profileElement = document.getElementById('profile-dropdown');
      const loginElement = document.getElementById('nav-login');
      const signupElement = document.getElementById('nav-signup');
      const logout = document.getElementById('btn-logout');

      logout?.addEventListener('click', () => {
        localStorage.removeItem('Jwt');
        window.location.reload();
      });

      const isLoggedIn = validToken();
      console.log(isLoggedIn);
      if (isLoggedIn) {
        // User is logged in, hide login and signup elements
        homeElement?.classList.remove('d-none');
        requestElement?.classList.remove('d-none');
        myDogElement?.classList.remove('d-none');
        // profileElement?.classList.remove('d-none');
        logout?.classList.remove('d-none');
        loginElement?.classList.add('d-none');
        signupElement?.classList.add('d-none');
      } else {
        // User is logged out, show login and signup elements
        homeElement?.classList.add('d-none');
        requestElement?.classList.add('d-none');
        myDogElement?.classList.add('d-none');
        // profileElement?.classList.add('d-none');
        logout?.classList.add('d-none');
        loginElement?.classList.remove('d-none');
        signupElement?.classList.remove('d-none');
      }
    });
};
export default displayNav;
