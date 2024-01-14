import '../../assets/scss/style.scss';
import displayNav from '../../components/Navbar/navbar';
// import Dog from '../../interface/Dog';
// import http from '../../service/HttpClient';
// import * as bootstrap from 'bootstrap';

const navBar = document.getElementById('navbar-placeholder') as HTMLElement;
window.onload = () => {
  displayNav(navBar, 'nav-mydog');
  setupFileInputListener();
};

function handleImageUpload(event: Event) {
  const input = event.target as HTMLInputElement;
  if (!input.files?.length) {
    return;
  }
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    const imagePreview = document.getElementById(
      'image-preview'
    ) as HTMLImageElement;
    imagePreview.src = e.target.result as string;
    imagePreview.style.display = 'block';
    const uploadIcon = document.getElementById('upload-icon');
    if (uploadIcon) {
      uploadIcon.style.display = 'none';
    }
  };
  reader.readAsDataURL(file);
}

function setupFileInputListener() {
  const fileInput = document.getElementById('dogImage') as HTMLInputElement;
  fileInput.addEventListener('change', handleImageUpload);
}
