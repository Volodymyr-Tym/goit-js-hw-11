import iziToast from 'izitoast';
import { createGalleryImageTemplate } from './js/render-functions';
import { fetchImages } from './js/pixabay-api';

const form = document.querySelector('form.js-form');
const gallery = document.querySelector('ul.js-gallery');

const onFormSubmit = event => {
  event.preventDefault();

  const input = form.search.value.trim();

  if (input === '') {
    iziToast.info({
      message: 'Searching field is empty',
      messageSize: '16',
      position: 'topRight',
    });

    event.target.reset();
  } else {
    fetchImages(input)
      .then(data => {
        if (data.totalHits === 0) {
          iziToast.error({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            messageSize: '16',
            position: 'topRight',
          });

          event.target.reset();
        } else {
          const drawGallery = data.hits
            .map(imageInfo => createGalleryImageTemplate(imageInfo))
            .join('');

          gallery.innerHTML = drawGallery;
          event.target.reset();
        }
      })

      .catch(err => {
        console.log(err);
      });
  }
};

form.addEventListener('submit', onFormSubmit);
