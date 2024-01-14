import '../../assets/scss/style.scss';
import displayNav from '../../components/Navbar/navbar';
import Dog from '../../interface/Dog';
import http from '../../service/HttpClient';
import * as bootstrap from 'bootstrap';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const navBar = document.getElementById('navbar-placeholder') as HTMLElement;

window.onload = () => {
  displayNav(navBar, 'nav-home');
  fetchAndDisplayDogs();
};

function createDogCard(dog: Dog) {
  return `
      <div class="col-md-4 mb-2">
        <div class="card">
        <img class="card-img-top" src="${dog.image}.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${dog.name}</h5>
            <p class="card-text">Gender: ${dog.gender}</p>
            <p class="card-text">Age: ${dog.age}</p>
            <p class="card-text">ID: ${dog.id}</p>
            <button type="button" class="adoptionBtn btn btn-primary" data-bs-toggle="modal" data-bs-target="#adoptionModal" >
              Adopt Me!
            </button>
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
      console.log(adoptMeButton);
      adoptMeButton.forEach((button) => {
        // button.addEventListener('click', () => {
        //   const dogId = button.getAttribute('data-id');
        //   console.log(dogId);
        //   window.location.href = `/src/views/adoption.html?id=${dogId}`;
        // });

        button.addEventListener('click', () => {
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
