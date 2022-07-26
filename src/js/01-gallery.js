import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryPic = galleryItems.map((galleryPic) => 
`<div class="gallery__item">
<a class="gallery__link" href= "${galleryPic.original}">

  <img
    class= "gallery__image"
    src= "${galleryPic.preview}"
    data-source= "${galleryPic.original}"
    alt= "${galleryPic.description}"
  />

</a>

</div>`).join(""); 

gallery.innerHTML = galleryPic;

gallery.addEventListener("click", (event) => {
    event.preventDefault();

    const dataImg = event.target.getAttribute("data-source");

    const instance = basicLightbox.create(`
    <img src="${dataImg}" alt="${altImg}" />
`, {
            onShow: (instance) => {
            document.addEventListener("keydown", (event) => {
                  if (event.key === "Escape") instance.close();
            })
      }
});
    
instance.show();
});

console.log(galleryItems);
