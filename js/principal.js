// Funcion que agranda la imagen principal

function agrandarImagen() {
    var img = document.getElementById("titulo");
    // Aumenta el tamaño de la imagen al 1.5 veces su tamaño original
    img.style.transform = "scale(1.5)";
    // Agrega una transición suave al cambio de tamaño
    img.style.transition = "transform 0.5s ease";
}

// Funcion que restablece la imagen principal

function restablecerImagen() {
    var img = document.getElementById("titulo");
    // Restablece el tamaño de la imagen a su tamaño original
    img.style.transform = "scale(1)";
    // Agrega una transición suave al cambio de tamaño
    img.style.transition = "transform 0.5s ease";
}


 	/*Cargador de eventos al iniciar la página*/
     window.addEventListener('load',iniciar,false);

     /*Contador inicializado en cero*/
     var contador=0;

     var audio = document.getElementById('miMusica');

     // Reproducir la música
     audio.play();
     
     // Pausar la música
     audio.pause();
     
     // Reiniciar la música
     audio.currentTime = 0;
     audio.play();

     function reproducirMusica() {
        document.getElementById('miMusica').play();
    }
    
    function pausarMusica() {
        document.getElementById('miMusica').pause();
    }
    
    function reiniciarMusica() {
        var audio = document.getElementById('miMusica');
        audio.currentTime = 0;
        audio.play();
    }
    