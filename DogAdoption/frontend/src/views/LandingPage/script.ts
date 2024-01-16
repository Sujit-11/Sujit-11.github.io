import { HttpStatusCode } from 'axios';
import '../../assets/scss/style.scss';
import displayNav from '../../components/Navbar/navbar';
import Dog from '../../interface/Dog';
import http from '../../service/HttpClient';
import * as bootstrap from 'bootstrap';
import { showToast } from '../../utils/Toast';
import showErrorResponse from '../../utils/ErrorResponse';

const navBar = document.getElementById('navbar-placeholder') as HTMLElement;
const adoptionForm = document.getElementById('adoptionForm') as HTMLFormElement;
const toast = document.getElementById('toast') as HTMLElement;

window.onload = () => {
  displayNav(navBar, 'nav-home');
  fetchAndDisplayDogs();
};

function createDogCard(dog: Dog) {
  return `<div class="col-md-3 mb-5">
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img class="card-img-top" src="${dog.image}" style="width:100%; height:300px; object-fit:cover;" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${dog.name}</h5>
      </div>
    </div>
    <div class="flip-card-back">
      <div class="card-body">
        <h5 class="card-title">About ${dog.name}</h5>
        <p class="card-text">Gender: ${dog.gender}</p>
        <p class="card-text">Age: ${dog.age}</p>
        <p class="card-text">ID: ${dog.id}</p>
        <button type="button" class="adoptionBtn btn btn-primary" data-bs-toggle="modal" data-bs-target="#adoptionModal" data-dog-id="${dog.id}" >
            Adopt Me!
           </button>
      </div>
    </div>
  </div>
</div>

</div>
 `;
}

const adoptMeModal = bootstrap.Modal.getOrCreateInstance(
  document.getElementById('adoptionModal') as HTMLInputElement
);

async function fetchAndDisplayDogs(): Promise<void> {
  try {
    const response = await http.get<{ dog: Dog[] }>('/dog');
    const dogs: Dog[] = response.data.dog;
    const dogCards: string = dogs.map(createDogCard).join(' ');
    const dogCardsContainer = document.getElementById('dog-cards');
    if (dogCardsContainer) {
      dogCardsContainer.innerHTML = dogCards;
      const adoptMeButton = dogCardsContainer.querySelectorAll('.adoptionBtn');
      adoptMeButton.forEach((button) => {
        button.addEventListener('click', (event) => {
          const button = event.currentTarget as HTMLButtonElement;
          const dogId = button.getAttribute('data-dog-id') as string; // Get the dog ID from the button
          adoptionForm?.setAttribute('data-dog-id', dogId);

          adoptMeModal.show();
        });
      });
    } else {
      console.log('Element with ID "dogCards" not found.');
    }
  } catch (error) {
    showErrorToast(error);
  }
}

adoptionForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const dogId = adoptionForm.getAttribute('data-dog-id');
  try {
    const adopterPhone = (
      document.getElementById('adopterPhone') as HTMLInputElement
    ).value;
    const adopterInterest = (
      document.getElementById('adoptionInterest') as HTMLInputElement
    ).value;

    const submitResponse = await http.post(
      `/adopt/${dogId}`,
      {
        adoption_phone: adopterPhone,
        adoption_interest: adopterInterest,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('Jwt')}`,
        },
      }
    );

    // Check the response status
    if (submitResponse.status === HttpStatusCode.Accepted) {
      showToast(submitResponse.data.message, toast, 'success');
      if (adoptMeModal) {
        adoptMeModal.hide();
      }
    }
  } catch (error) {
    showErrorToast(error);
  }
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const showErrorToast = (error: any) => {
  const message = showErrorResponse(error) || error;
  showToast(message, toast, 'error');
};
