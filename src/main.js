import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('.load-btn');

let totalPages;
let inputValue;
let page = 1;
let perPage = 40;

const galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});

form.addEventListener('submit', handleSubmit);
loadBtn.addEventListener('click', handleClick);

async function getPhotos() {
  try {
    const httpResponse = await axios.get(`https://pixabay.com/api/`, {
      params: {
        key: '41849912-0888eabd10c40a0c420151dd5',
        q: inputValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
        per_page: perPage,
      },
    });
    return httpResponse.data;
  } catch (error) {
    console.log(error);
    iziToast.error({
      position: 'topRight',
      message: 'An error has occured',
    });
  }
}

function renderHtml(data) {
  const htmlMarkup = data.hits
    .map(
      image =>
        `
        <li class="gallery-item">
         <a href="${image.largeImageURL}">
             <img class='gallery-image' src="${image.webformatURL}" alt="${image.tags}">
         </a>
        <div class="info-cont">
          <div class="info-item">
            <h4><b>Likes</b></h4>
            <p>${image.likes}</p>
          </div>
          <div class="info-item">
            <h4><b>Views</b></h4>
            <p>${image.views}</p>
          </div>
          <div class="info-item">
            <h4><b>Comments</b></h4>
            <p>${image.comments}</p>
          </div>
          <div class="info-item">
            <h4><b>Downloads</b></h4>
            <p>${image.downloads}</p>
          </div>
        </div>
        </li>
              `
    )
    .join('');
  return htmlMarkup;
}

async function handleSubmit(evt) {
  evt.preventDefault();

  loadBtn.classList.add('is-hidden');
  inputValue = evt.target.elements.search.value;
  gallery.innerHTML = '';
  page = 1;
  evt.target.reset();
  loader.classList.remove('is-hidden');
  try {
    const photosData = await getPhotos();
    totalPages = Math.ceil(photosData.totalHits / perPage);
    loader.classList.add('is-hidden');
    if (photosData.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching <br> your search query. Please try again!',
        position: 'topRight',
        class: 'error-alert',
      });
    } else {
      gallery.insertAdjacentHTML('beforeend', renderHtml(photosData));
      loadBtn.classList.remove('is-hidden');
      galleryLightbox.refresh();
      if (page == totalPages) {
        loadBtn.classList.add('is-hidden');
        iziToast.error({
          position: 'topRight',
          message: `We're sorry, but you've reached the end of search results.`,
        });
      }
      loader.classList.add('is-hidden');
    }
  } catch (error) {
    console.log(error);
    iziToast.error({
      position: 'topRight',
      message: 'An error has occured',
    });
  }
}

async function handleClick() {
  loader.classList.remove('is-hidden');
  page += 1;
  try {
    const newPhotosData = await getPhotos();
    gallery.insertAdjacentHTML('beforeend', renderHtml(newPhotosData));
    galleryLightbox.refresh();
    if (page == totalPages) {
      loadBtn.classList.add('is-hidden');
      iziToast.error({
        position: 'topRight',
        message: `We're sorry, but you've reached the end of search results.`,
      });
    }
    loader.classList.add('is-hidden');
    const galleryCardProperties = document
      .querySelector('.gallery-item')
      .getBoundingClientRect();
    const galleryCardHeight = galleryCardProperties.height;
    window.scrollBy({
      top: 2 * galleryCardHeight,
      behavior: 'smooth',
    });
  } catch (error) {
    console.log(error);
    iziToast.error({
      position: 'topRight',
      message: 'An error has occured',
    });
  }
}
