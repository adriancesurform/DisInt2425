document.addEventListener("DOMContentLoaded", function () {
    const changeBgDiv = document.querySelector('.changebg-img');
    const changebgApp = document.querySelector('.navbar-ellipse-img');
    const body = document.body;
    let isNight = false; // Controla si está en modo noche

    // Añade el evento al contenedor de la imagen
    changeBgDiv.addEventListener('click', function () {
        if (isNight) {
            // Cambiar a modo día
            document.documentElement.style.setProperty('--bg-principal', '');
            document.documentElement.style.setProperty('--text-color-principal', '');
            document.documentElement.style.setProperty('--navbar-color', '');
            document.documentElement.style.setProperty('--button-bg', '');
            document.documentElement.style.setProperty('--button-border', '');
            document.documentElement.style.setProperty('--ellipse-shadow', '');
            document.documentElement.style.setProperty('--ellipse-shadow-light', '');
            document.documentElement.style.setProperty('--changebg-margin', '');
            
            // Cambiar icono a sol
            changeBgDiv.style.backgroundImage = "url('icons/sun.png')";
            changebgApp.style.backgroundImage = "url('icons/app.png')";

        } else {
            // Cambiar a modo noche
            document.documentElement.style.setProperty('--bg-principal', 'var(--bg-principal-night)');
            document.documentElement.style.setProperty('--text-color-principal', 'var(--text-color-principal-night)');
            document.documentElement.style.setProperty('--navbar-color', 'var(--navbar-color-night)');
            document.documentElement.style.setProperty('--button-bg', 'var(--button-bg-night)');
            document.documentElement.style.setProperty('--button-border', 'var(--button-border-night)');
            document.documentElement.style.setProperty('--ellipse-shadow', 'var(--ellipse-shadow-night)');
            document.documentElement.style.setProperty('--ellipse-shadow-light', 'var(--ellipse-shadow-light-night)');
            document.documentElement.style.setProperty('--changebg-margin', 'var(--changebg-margin-night)');
            changebgApp.style.backgroundImage = "url('icons/appwhite.png')";


            // Cambiar icono a luna
            changeBgDiv.style.backgroundImage = "url('icons/moon.png')";
        }

        // Alternar el estado
        isNight = !isNight;
    });
});
