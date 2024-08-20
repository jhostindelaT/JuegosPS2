$(document).ready(function() {
    console.log('home.js cargado');

    function initCarrusel() {
        let currentImageIndex = 0;
        const $images = $('.imagen-Carrusel');
        const totalImages = $images.length;

        function showNextImage() {
            $images.eq(currentImageIndex).removeClass('active');
            currentImageIndex = (currentImageIndex + 1) % totalImages;
            $images.eq(currentImageIndex).addClass('active');
        }

        $images.eq(currentImageIndex).addClass('active');
        setInterval(showNextImage, 10000); // Cambia de imagen cada 3 segundos
    }

    // Inicializa el carrusel
    initCarrusel();
});
