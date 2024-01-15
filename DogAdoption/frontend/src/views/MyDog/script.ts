import { HttpStatusCode } from 'axios';
import '../../assets/scss/style.scss';
import displayNav from '../../components/Navbar/navbar';
import Dog from '../../interface/Dog';
import http from '../../service/HttpClient';
import { getUserIdFromToken, isLoggedIn } from '../../utils/utils';
import * as bootstrap from 'bootstrap';

const navBar = document.getElementById('navbar-placeholder') as HTMLElement;
const updateForm = document.getElementById('form-updateDog') as HTMLFormElement;

window.onload = () => {
  displayNav(navBar, 'nav-mydog');
  isLoggedIn();
  fetchAndDisplayDogs();
};

function createDogCard(dog: Dog) {
  return `<div class="col-md-4 mb-5">
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
        button.addEventListener('click',(event)=>{
          const button = event.currentTarget as HTMLButtonElement;
          const dogId = button.getAttribute('data-dog-id') as string; // Get the dog ID from the button
          console.log(dogId);
          updateForm?.setAttribute('data-dog-id', dogId);
          
          const updateDogModal = bootstrap.Modal.getOrCreateInstance(
            document.getElementById('updateDogModal') as HTMLInputElement
          );
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
    console.log(error);
  }
}

async function deleteDog(dogId: string): Promise<void> {
  try {
    await http.delete(`/dog/${dogId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Jwt')}`,
      },
    });
    console.log(`Dog with ID ${dogId} has been deleted.`);
    // Optionally, remove the dog card from the UI or refresh the list
  } catch (error) {
    console.error(error);
  }
}

updateForm.addEventListener('submit',async(e)=>{
  e.preventDefault();
  const dogId = updateForm.getAttribute('data-dog-id');
  try {
    const name = (document.getElementById('updateDogName') as HTMLInputElement).value;
    const gender = (document.getElementById('updateDogGender') as HTMLInputElement).value;
    const age = (document.getElementById('updateDogAge') as HTMLInputElement).value;
    const address = (document.getElementById('updateDogAddress') as HTMLInputElement).value;

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
      console.log('Adopt Request sent');
    }
  } catch (error) {
    console.log('error', error);
  }
});


