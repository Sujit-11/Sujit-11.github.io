import { HttpStatusCode } from 'axios';
import '../../assets/scss/style.scss';
import displayNav from '../../components/Navbar/navbar';
import AdoptionRequest from '../../interface/AdoptionRequest';
import http from '../../service/HttpClient';

const navBar = document.getElementById('navbar-placeholder') as HTMLElement;

window.onload = () => {
  displayNav(navBar, 'nav-requests');
  fetchAdoptionRequests();
};

// Function to fetch all adoption requests
async function fetchAdoptionRequests(): Promise<void> {
  try {
    const response = await http.get('/adopt', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Jwt')}`,
      },
    });

    if (response.status === HttpStatusCode.Accepted) {
      displayAdoptionRequests(response.data);
    } 
  } catch (error) {
    console.log('error', error);
  }
}

// Function to display adoption requests on the page
function displayAdoptionRequests(requests: AdoptionRequest[]): void {
  const requestsContainer: HTMLElement | null =
    document.getElementById('requests-container');

  if (requestsContainer) {
    requestsContainer.innerHTML = ''; // Clear existing requests

    requests.forEach((request: AdoptionRequest) => {
      const requestElement: HTMLDivElement = document.createElement('div');
      requestElement.className = 'request';
      requestElement.innerHTML = `
        <h3>${request.dogName}</h3>
        <p>Requested by: ${request.requesterName}</p>
        <p>Contact: ${request.adoptionPhone}</p>
        <p>Message: ${request.adoptionInterest}</p>
      `;
      requestsContainer.appendChild(requestElement);
    });
  } else {
    console.log('Element with ID "requests-container" not found.');
  }
}
