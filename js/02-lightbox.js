import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerEl = document.querySelector('.gallery');

const createGalleryItemsMarkup = (array) => {
  return array
    .map(({ preview, original, description }) => {
      const src = preview;
      const source = original;
      const alt = description;

      return `<div class="gallery__item">
    <a class="gallery__item" href=${source}>
    <img
    class="gallery__image"
    src=${src}
    alt=${alt}
    />
    </a>
    </div>`;
    })
    .join('');
};

const markup = createGalleryItemsMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML('afterbegin', markup);

let lightbox;

const handleGalleryItemClick = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  lightbox = new SimpleLightbox('.gallery a');
};

galleryContainerEl.addEventListener('click', handleGalleryItemClick);
