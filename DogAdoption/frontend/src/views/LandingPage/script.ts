import { HttpStatusCode } from 'axios';
import '../../assets/scss/style.scss';
import displayNav from '../../components/Navbar/navbar';
import Dog from '../../interface/Dog';
import http from '../../service/HttpClient';
import * as bootstrap from 'bootstrap';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const navBar = document.getElementById('navbar-placeholder') as HTMLElement;
const adoptionForm = document.getElementById('adoptionForm') as HTMLFormElement;
window.onload = () => {
  displayNav(navBar, 'nav-home');
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

async function fetchAndDisplayDogs(): Promise<void> {
  try {
    const response = await http.get<{ dog: Dog[] }>('/dog');
    const dogs: Dog[] = response.data.dog;
    console.log(dogs);
    const dogCards: string = dogs.map(createDogCard).join(' ');
    const dogCardsContainer = document.getElementById('dog-cards');
    if (dogCardsContainer) {
      dogCardsContainer.innerHTML = dogCards;
      const adoptMeButton = dogCardsContainer.querySelectorAll('.adoptionBtn');
      adoptMeButton.forEach((button) => {
        button.addEventListener('click', (event)=>{
          const button = event.currentTarget as HTMLButtonElement;
          const dogId = button.getAttribute('data-dog-id') as string; // Get the dog ID from the button
          console.log(dogId);
          adoptionForm?.setAttribute('data-dog-id', dogId);

          const adoptMeModal = bootstrap.Modal.getOrCreateInstance(
            document.getElementById('adoptionModal') as HTMLInputElement
          );
          adoptMeModal.show();
        });
      });
    } else {
      console.error('Element with ID "dogCards" not found.');
    }
  } catch (error) {
    console.log(error);
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
      console.log('Adopt Request sent');
    }
  } catch (error) {
    console.log('error', error);
  }
});
