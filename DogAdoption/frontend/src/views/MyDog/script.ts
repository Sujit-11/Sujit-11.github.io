import { HttpStatusCode } from 'axios';
import '../../assets/scss/style.scss';
import displayNav from '../../components/Navbar/navbar';
import Dog from '../../interface/Dog';
import http from '../../service/HttpClient';
import { getUserIdFromToken, isLoggedIn } from '../../utils/utils';
import * as bootstrap from 'bootstrap';
import { showToast } from '../../utils/Toast';
import showErrorResponse from '../../utils/ErrorResponse';

const navBar = document.getElementById('navbar-placeholder') as HTMLElement;
const updateForm = document.getElementById('form-updateDog') as HTMLFormElement;
const toast = document.getElementById('toast') as HTMLElement;

window.onload = () => {
  displayNav(navBar, 'nav-mydog');
  isLoggedIn();
  fetchAndDisplayDogs();
};

const updateDogModal = bootstrap.Modal.getOrCreateInstance(
  document.getElementById('updateDogModal') as HTMLInputElement
);

function createDogCard(dog: Dog) {
  return `<div id="dog-card-${dog.id}" class="col-md-4 mb-5">
    <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img class="card-img-top" src="${dog.image}" style="width:100%; height:300px; object-fit:cover;" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${dog.name}</h5>
          <button type="button" class="updateBtn btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateDogModal" data-dog-id ="${dog.id}" >
                Update
            </button>
            <button type="button" class="btn btn-danger deleteBtn" data-dog-id="${dog.id}">
               <i class="bi bi-trash" ></i>
            </button>
        </div>
      </div>
    </div>
  </div>
  
  </div>
   `;
}

async function fetchAndDisplayDogs(): Promise<void> {
  try {
    const token = localStorage.getItem('Jwt') || '';
    const userId = getUserIdFromToken(token);
    const response = await http.get<{ dog: Dog[] }>(`/dog/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Jwt')}`,
      },
    });
    const dogs: Dog[] = response.data.dog;
    const dogCards: string = dogs.map(createDogCard).join(' ');
    const dogCardsContainer = document.getElementById('dog-cards');
    if (dogCardsContainer) {
      dogCardsContainer.innerHTML = dogCards;
      const updateButton = dogCardsContainer.querySelectorAll('.updateBtn');
      updateButton.forEach((button) => {
        button.addEventListener('click', (event) => {
          const button = event.currentTarget as HTMLButtonElement;
          const dogId = button.getAttribute('data-dog-id') as string; 
          updateForm?.setAttribute('data-dog-id', dogId);
          updateDogModal.show();
        });
      });
      const deleteButtons = dogCardsContainer.querySelectorAll('.deleteBtn');
      deleteButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const dogId = button.getAttribute('data-dog-id');
          if (dogId) {
            deleteDog(dogId);
          }
        });
      });
    }
  } catch (error) {
    showErrorToast(error);
  }
}

async function deleteDog(dogId: string): Promise<void> {
  try {
    const response = await http.delete(`/dog/${dogId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Jwt')}`,
      },
    });
    const dogCard = document.getElementById(`dog-card-${dogId}`);
    if (dogCard) {
      // Remove the dog card from the UI
      dogCard.remove();
    }
    showToast(response.data.message, toast, 'success');
  } catch (error) {
    showErrorToast(error);
  }
}

updateForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const dogId = updateForm.getAttribute('data-dog-id');
  try {
    const name = (document.getElementById('updateDogName') as HTMLInputElement)
      .value;
    const gender = (
      document.getElementById('updateDogGender') as HTMLInputElement
    ).value;
    const age = (document.getElementById('updateDogAge') as HTMLInputElement)
      .value;
    const address = (
      document.getElementById('updateDogAddress') as HTMLInputElement
    ).value;

    const submitResponse = await http.put(
      `/dog/${dogId}`,
      {
        name,
        gender,
        age,
        address,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('Jwt')}`,
        },
      }
    );

    if (submitResponse.status === HttpStatusCode.Accepted) {
      showToast(submitResponse.data.message,toast,'success');
      if (updateDogModal) {
        updateDogModal.hide();
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
