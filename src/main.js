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
loadBtn.addEventListener('click', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  if (evt.target != loadBtn) {
    loadBtn.classList.add('is-hidden');
    inputValue = evt.target.elements.search.value;
    gallery.innerHTML = '';
    page = 1;
    evt.target.reset();
  }
  loader.classList.remove('is-hidden');

  async function getPhotos() {
    const response = await axios.get(`https://pixabay.com/api/`, {
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
    return response.data;
  }

  getPhotos()
    .then(data => {
      console.log(data);
      totalPages = Math.ceil(data.totalHits / perPage);
      loader.classList.add('is-hidden');
      if (data.hits.length === 0) {
        const errorAlert = iziToast.error({
          message:
            'Sorry, there are no images matching <br> your search query. Please try again!',
          position: 'topRight',
          class: 'error-alert',
        });
      } else {
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
        gallery.insertAdjacentHTML('beforeend', htmlMarkup);
        loadBtn.classList.remove('is-hidden');
        galleryLightbox.refresh();
        if (evt.target === loadBtn) {
          const galleryCardProperties = document
            .querySelector('.gallery-item')
            .getBoundingClientRect();
          const galleryCardHeight = galleryCardProperties.height;
          console.log(galleryCardHeight);
          window.scrollBy({
            top: 2 * galleryCardHeight,
            behavior: 'smooth',
          });
        }
        console.log(page);
        console.log(totalPages);
        if (page == totalPages) {
          loadBtn.classList.add('is-hidden');
          loader.classList.add('is-hidden');
          return iziToast.error({
            position: 'topRight',
            message: `We're sorry, but you've reached the end of search results.`,
          });
        }
        page += 1;
      }
    })
    .catch(error => {
      console.log(error);
    });
}

// inputValue != evt.target.elements.search.value
