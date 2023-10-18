function openLightbox(imageUrl) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
  
    lightbox.style.display = "block";
    lightboxImage.src = imageUrl;
  }
  
  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
  
    lightbox.style.display = "none";
  }
  