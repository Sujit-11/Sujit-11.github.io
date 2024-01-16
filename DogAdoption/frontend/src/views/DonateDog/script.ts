import axios, { HttpStatusCode } from 'axios';
import '../../assets/scss/style.scss';
import displayNav from '../../components/Navbar/navbar';
import http from '../../service/HttpClient';
import { isLoggedIn } from '../../utils/utils';
import { showToast } from '../../utils/Toast';
import showErrorResponse from '../../utils/ErrorResponse';
// Define a global variable to store the selected file
let selectedFile: File | null = null;

const navBar = document.getElementById('navbar-placeholder') as HTMLElement;
const addDogForm = document.getElementById('form-addDog') as HTMLFormElement;
const toast = document.getElementById('toast') as HTMLElement;

window.onload = () => {
  displayNav(navBar, 'nav-donatedog');
  isLoggedIn();
  setupFileInputListener();
};

function setupFileInputListener() {
  const fileInput = document.getElementById('dogImage') as HTMLInputElement;
  fileInput.addEventListener('change', handleImageUpload);
}

function handleImageUpload(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    selectedFile = input.files[0];
    // Update the image preview
    const reader = new FileReader();
    reader.onload = function (e) {
      const imagePreview = document.getElementById(
        'image-preview'
      ) as HTMLImageElement;
      imagePreview.src = e.target?.result as string;
      imagePreview.style.display = 'block';
      const uploadIcon = document.getElementById('upload-icon');
      if (uploadIcon) {
        uploadIcon.style.display = 'none';
      }
    };
    reader.readAsDataURL(selectedFile);
  }
}

addDogForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!selectedFile) {
    showToast('Please select a file', toast, 'error');
    return;
  }

  // Show the loading spinner
  // const loadingIndicator = document.getElementById('loading-indicator') as HTMLElement;
  // loadingIndicator.style.display = 'block';

  // Create a new FormData object and append the file
  const formData = new FormData();
  formData.append('file', selectedFile);
  formData.append('upload_preset', 'n7nlzgh2');

  // Cloudinary API URL
  const cloudinaryUrl =
    'https://api.cloudinary.com/v1_1/dlbd9gdkc/image/upload';

  try {
    // Post the image to Cloudinary using Axios
    const uploadResponse = await axios.post(cloudinaryUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // Get the URL of the uploaded image
    const imageUrl = uploadResponse.data.secure_url;

    // Proceed with the rest of the form submission process
    const dogName = (document.getElementById('dogName') as HTMLInputElement)
      .value;
    const dogAddress = (
      document.getElementById('dogAddress') as HTMLInputElement
    ).value;
    const dogAge = Number(
      (document.getElementById('dogAge') as HTMLInputElement).value
    );
    const dogGender = (
      document.getElementById('dogGender') as HTMLSelectElement
    ).value;

    const submitResponse = await http.post(
      '/dog',
      {
        name: dogName,
        address: dogAddress,
        age: dogAge,
        gender: dogGender,
        image: imageUrl,
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
    }

    // Hide the loading spinner
    // loadingIndicator.style.display = 'none';
  } catch (error) {
    showErrorToast(error);
    // Hide the loading spinner
    // loadingIndicator.style.display = 'none';response.data.message,toast, 'error');
    // Hide the loading spinner
    // loadingIndicator.style.display = 'none';
    // Hide the loading spinner
    // loadingIndicator.style.display = 'none';
  }
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const showErrorToast = (error: any) => {
  const message = showErrorResponse(error) || error;
  showToast(message, toast, 'error');
};
