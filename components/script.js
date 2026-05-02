function toggleText() {
  const dots = document.getElementById("dots");
  const more = document.getElementById("more");
  const btn = document.getElementById("btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    more.style.display = "none";
    btn.innerHTML = "Read more";
  } else {
    dots.style.display = "none";
    more.style.display = "inline";
    btn.innerHTML = "Read less";
  }
}

function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}