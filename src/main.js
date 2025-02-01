import iziToast from 'izitoast/dist/js/iziToast.min.js';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api.js';
import { handleSuccess } from './js/render-function.js';

export const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = event.currentTarget.elements.state.value.trim();

  refs.gallery.innerHTML = '';

  if (!inputValue) {
    iziToast.error({
      message: 'Please enter your request',
      position: 'topRight',
    });
    return;
  }

  refs.loader.classList.remove('is-hidden');

  fetchImages(inputValue)
    .then(data => {
      refs.loader.classList.add('is-hidden');

      if (data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, no images found. Please try again!',
          position: 'topRight',
        });
        return;
      }

      const markup = handleSuccess(data.hits);
      refs.gallery.insertAdjacentHTML('beforeend', markup);

      const library = new SimpleLightbox('.gallery a', {
        captionDelay: 300,
        captionsData: 'alt',
      });
      library.refresh();
    })
    .catch(error => {
      iziToast.error({
        message: 'Error fetching images. Please try again later.',
        position: 'topRight',
      });
      console.error(error);
    });
}
