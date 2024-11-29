let indice = 0;

function mostrarSlide() {
    const slides = document.querySelector('.slides');
    slides.style.transform = `translateX(-${indice * 100}%)`;
}

function siguiente() {
    const totalSlides = document.querySelectorAll('.slide').length;
    indice = (indice + 1) % totalSlides;
    mostrarSlide();
}

function anterior() {
    const totalSlides = document.querySelectorAll('.slide').length;
    indice = (indice - 1 + totalSlides) % totalSlides;
    mostrarSlide();
}

function copiarConsejo() {
    const consejo = document.querySelector('.slides .slide:nth-child(' + (indice + 1) + ')').textContent.trim();
    navigator.clipboard.writeText(consejo)
        .then(() => alert('¡Consejo copiado al portapapeles!'))
        .catch(() => alert('Hubo un error al copiar el consejo.'));
}