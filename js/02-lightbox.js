import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryPics = galleryItems
  .map(
    (galleryPics) => `
<a class="gallery__item" href="${galleryPics.original}">
  <img
  class="gallery__image"
  src="${galleryPics.preview}"
  alt="${galleryPics.description}" 
  title = "${galleryPics.description}"/>
</a>`
  )
  .join("");

gallery.innerHTML = galleryPics;

new SimpleLightbox(".gallery a", { captionDelay: 100 });