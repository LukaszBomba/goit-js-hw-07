import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryPics = galleryItems.map((galleryPics) => `<div class="gallery__item">
<a class="gallery__link" href="${galleryPics.original}">
  <img
    class="gallery__image"
    src="${galleryPics.preview}"
    data-source="${galleryPics.original}"
    alt="${galleryPics.description}"
  />
</a>
</div>`).join("");

gallery.innerHTML = galleryPics;


gallery.addEventListener("click", (event) => {
    event.preventDefault();

    const Img = event.target.getAttribute("data-source");
    const instance = basicLightbox.create(`
    <img src="${Img}" />`,
      {
        onShow: (instance) => {
            document.addEventListener("keydown", (event) => {
                  if (event.key === "Escape") instance.close();
            })
      }
});
  
        
    
instance.show();
});