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
    <a class="gallery__link" href=${source}>
    <img
    class="gallery__image"
    src=${src}
    data-source=${source}
    alt=${alt}
    />
    </a>
    </div>`;
    })
    .join('');
};

const markup = createGalleryItemsMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML('afterbegin', markup);

let instance;

const handleEscapePress = (event) => {
  if (event.code !== 'Escape') {
    return;
  }
  instance.close();

  window.removeEventListener('keydown', handleEscapePress);
};

const handleGalleryItemClick = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const url = event.target.dataset.source;

  instance = basicLightbox.create(`
    <img src=${url} width="800" height="600">
`);

  instance.show();

  let visible = instance.visible();

  if (visible) {
    window.addEventListener('keydown', handleEscapePress);
  }
};

galleryContainerEl.addEventListener('click', handleGalleryItemClick);
