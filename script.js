let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("trailer-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Sembunyikan semua slide
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    // Reset ke slide pertama
    slides[slideIndex-1].style.display = "block";  // Tampilkan slide saat ini
    setTimeout(showSlides, 2000); // Ganti gambar setiap 2 detik
}

showSlides();  // Inisialisasi slideshow