/*
  LIGHTBOX GALLERY INIT
*/
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = GLightbox({
    selector: "#lightgallery a",
    touchNavigation: true,
    loop: true,
    zoomable: true,
    draggable: true,
  });
});
