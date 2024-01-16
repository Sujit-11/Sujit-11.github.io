import { HttpStatusCode } from 'axios';
import '../../assets/scss/style.scss';
import displayNav from '../../components/Navbar/navbar';
import AdoptionRequest from '../../interface/AdoptionRequest';
import http from '../../service/HttpClient';
import showErrorResponse from '../../utils/ErrorResponse';
import { showToast } from '../../utils/Toast';

const navBar = document.getElementById('navbar-placeholder') as HTMLElement;
const toast = document.getElementById('toast') as HTMLElement;

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
    showErrorToast(error);
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
      requestElement.className = 'card mb-3';
      requestElement.innerHTML = `
          <div class="card-body">
            <h5 class="card-title">Dog: ${request.dogName}</h5>
            <p class="card-text">Requested by: ${request.requesterName}</p>
            <p class="card-text">Contact: ${request.adoptionPhone}</p>
            <p class="card-text">Message: ${request.adoptionInterest}</p>
          </div>
        `;
      requestsContainer.appendChild(requestElement);
    });
  } else {
    console.log('Element with ID "requests-container" not found.');
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const showErrorToast = (error: any) => {
  const message = showErrorResponse(error) || error;
  showToast(message, toast, 'error');
};
