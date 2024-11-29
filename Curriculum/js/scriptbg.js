document.addEventListener("DOMContentLoaded", function () {
    const changeBgDiv = document.querySelector('.changebg-img');
    const changebgApp = document.querySelector('.navbar-ellipse-img');
    const changebtnArticles = document.querySelectorAll('.btn-article img');


    let isNight = false; // Controla si está en modo noche

    // Añade el evento al contenedor de la imagen
    changeBgDiv.addEventListener('click', function () {
        if (isNight) {
            // Cambiar a modo día y poner o dejar por defecto sus propiedades normales.
            document.documentElement.style.setProperty('--bg-principal', '');
            document.documentElement.style.setProperty('--text-color-principal', '');
            document.documentElement.style.setProperty('--navbar-color', '');
            document.documentElement.style.setProperty('--button-bg', '');
            document.documentElement.style.setProperty('--button-border', '');
            document.documentElement.style.setProperty('--ellipse-shadow', '');
            document.documentElement.style.setProperty('--ellipse-shadow-light', '');
            document.documentElement.style.setProperty('--changebg-margin', '');
            document.documentElement.style.setProperty('--article1-bg-ligth', '');
            document.documentElement.style.setProperty('--article2-bg-ligth', '');
            document.documentElement.style.setProperty('--bg-articles', '');
            
            // Cambiar icono
            changeBgDiv.style.backgroundImage = "url('icons/sun.png')";
            changebgApp.style.backgroundImage = "url('icons/app.png')";
            changebtnArticles.forEach((img) => {
                img.src = "icons/left-chevron.png"; // Cambia el src de la imagen
            });

        } else {
            // Cambiar a modo noche y cambiar todas las propiedades por defecto a las del modo noche.
            document.documentElement.style.setProperty('--bg-principal', 'var(--bg-principal-night)');
            document.documentElement.style.setProperty('--text-color-principal', 'var(--text-color-principal-night)');
            document.documentElement.style.setProperty('--navbar-color', 'var(--navbar-color-night)');
            document.documentElement.style.setProperty('--button-bg', 'var(--button-bg-night)');
            document.documentElement.style.setProperty('--button-border', 'var(--button-border-night)');
            document.documentElement.style.setProperty('--ellipse-shadow', 'var(--ellipse-shadow-night)');
            document.documentElement.style.setProperty('--ellipse-shadow-light', 'var(--ellipse-shadow-light-night)');
            document.documentElement.style.setProperty('--changebg-margin', 'var(--changebg-margin-night)');
            document.documentElement.style.setProperty('--article1-bg-ligth', 'var(--article1-bg-night)');
            document.documentElement.style.setProperty('--article2-bg-ligth', 'var(--article2-bg-night)');
            document.documentElement.style.setProperty('--bg-articles', 'var(--bg-articles-night)');

            
            // Cambiar icono
            changeBgDiv.style.backgroundImage = "url('icons/moon.png')";
            changebgApp.style.backgroundImage = "url('icons/appwhite.png')";
            changebtnArticles.forEach((img) => {
                img.src = "icons/left-chevron-night.png"; // Cambia el src de la imagen
            });
        }

        // Alternar el estado
        isNight = !isNight;
    });
});




