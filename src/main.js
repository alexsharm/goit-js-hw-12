import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});

form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  gallery.innerHTML = '';
  loader.classList.remove('is-hidden');
  const searchParams = new URLSearchParams({
    key: '41849912-0888eabd10c40a0c420151dd5',
    q: evt.target.elements.search.value.trim(),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
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
        galleryLightbox.refresh();
      }
      evt.target.reset();
    })
    .catch(error => {
      console.log(error);
    });
}
