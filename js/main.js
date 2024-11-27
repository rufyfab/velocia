// Seleccionamos el icono del menú y el contenedor del menú
const menuToggle = document.querySelector('#ico-menu'); // Cambié la clase por el id que has utilizado
const navLinks = document.querySelector('.nav-links');

// Comprobamos si el icono del menú y el contenedor del menú existen
if (menuToggle && navLinks) {
    // Agregamos un evento de clic para alternar la clase 'active' en el menú
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Seleccionamos todos los enlaces dentro del menú
const menuItems = document.querySelectorAll('.nav-links a');

// Comprobamos si los enlaces existen
if (menuItems.length > 0) {
    // Agregamos un evento de clic a cada enlace para cerrar el menú cuando se haga clic
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', (event) => {
    if (navLinks && menuToggle && !navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});

// Esperar a que todo el contenido esté cargado
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos todas las preguntas (faq-question)
    const faqQuestions = document.querySelectorAll('.faq-question');

    // Comprobamos si existen preguntas FAQ
    if (faqQuestions.length > 0) {
        // Agregamos un event listener a cada pregunta
        faqQuestions.forEach(question => {
            question.addEventListener('click', function(event) {
                // Prevenir que el clic se propague al documento (cierre de FAQ)
                event.stopPropagation();

                // Seleccionamos el contenedor del ítem FAQ
                const faqItem = question.parentElement; // Esto es el div que contiene la pregunta y la respuesta
                
                // Alternamos la clase 'active' en el contenedor
                faqItem.classList.toggle('active');

                // Seleccionamos la respuesta de la pregunta (faq-answer)
                const faqAnswer = faqItem.querySelector('.faq-answer');
                
                // Utilizamos max-height para un efecto de deslizamiento
                if (faqItem.classList.contains('active')) {
                    faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px"; // Mostrar la respuesta con deslizamiento
                } else {
                    faqAnswer.style.maxHeight = 0; // Ocultar la respuesta
                }
            });
        });
    }

    // Cerrar todas las respuestas cuando se hace clic fuera de un ítem FAQ
    document.addEventListener('click', (event) => {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(faqItem => {
            if (!faqItem.contains(event.target)) {
                faqItem.classList.remove('active'); // Cerrar la respuesta si se hace clic fuera
                const faqAnswer = faqItem.querySelector('.faq-answer');
                faqAnswer.style.maxHeight = 0; // Restablecer el maxHeight
            }
        });
    });
});

// Manejo del envío del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el recargado de la página

    const formData = new FormData(this); // Captura los datos del formulario

    fetch('https://script.google.com/macros/s/AKfycbyPNvKmaNyBzKXKScH8nfEHWwcqFMF2xMJ6MsjfsrtCVsasc4FEPZU_euciAs_8PkOQ/exec', {
        method: 'POST', // Método POST
        body: formData, // Enviar datos como FormData
    })
    .then(response => response.text())
    .then(result => {
        console.log("Respuesta del servidor: ", result);
        document.getElementById('responseMessage').textContent = result; // Mostrar la respuesta

        // Limpia los campos del formulario
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        console.error("Error en el envío: ", error);
        document.getElementById('responseMessage').textContent =
            'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.';
    });
});
