import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryItem = galleryItems.map((galleryItem) => `<div class="gallery__item">
<a class="gallery__link" href="${galleryItem.original}">
  <img
    class="gallery__image"
    src="${galleryItem.preview}"
    data-source= "${galleryItem.original}" 
    alt="${galleryItem.description}"
  />
</a>
</div>`).join("");

gallery.innerHTML = galleryItem;



console.log(galleryItems);
