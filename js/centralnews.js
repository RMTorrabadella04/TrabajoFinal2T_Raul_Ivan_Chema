let slideIndex = 1;

window.onload = function() {

 showSlides(slideIndex);

 // Añade la funcionalidad de reproducción automática

 setInterval(function() { plusSlides(1); }, 5000); // Realiza la funcion de pasar una imagen "carrusel" cada 3 segundos
}

function showSlides(n) {

   let i;

   let slides = document.getElementsByClassName("mySlides");

   let dots = document.getElementsByClassName("dot");

   if (n > slides.length) {slideIndex = 1}

   if (n < 1) {slideIndex = slides.length}

   for (i = 0; i < slides.length; i++) {

      slides[i].style.display = "none";

   }
   for (i = 0; i < dots.length; i++) {

      dots[i].className = dots[i].className.replace(" active", "");

   }

   slides[slideIndex-1].style.display = "block";
   
   dots[slideIndex-1].className += " active";
}

// Función para mover las diapositivas hacia adelante/atrás

function plusSlides(n) {

   showSlides(slideIndex += n);

}

// Función para mover a una diapositiva específica

function currentSlide(n) {

   showSlides(slideIndex = n);

}





function openCity(evt, secciones) {

   // Declaracion de las varriables

   var i, tabcontent, tablinks;
 
   // Coge los elementos "tabcontent y los esconde"

   tabcontent = document.getElementsByClassName("tabcontent");

   for (i = 0; i < tabcontent.length; i++) {

      tabcontent[i].style.display = "none";

   }
 
   //  Obtiene todos los elementos con clase="tablinks" y elimina la clase "activa"

   tablinks = document.getElementsByClassName("tablinks");

   for (i = 0; i < tablinks.length; i++) {

      tablinks[i].className = tablinks[i].className.replace(" active", "");

   }

   
   // Muestra la pestaña actual y agregar una clase "activa" al botón que abrió la pestaña

   document.getElementById(secciones).style.display = "block";
   
   evt.currentTarget.className += " active";
 }
