document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita que se recargue la página al enviar el formulario

    const formData = new FormData(this);  // Recoge los datos del formulario

    fetch('https://script.google.com/macros/s/AKfycbyPNvKmaNyBzKXKScH8nfEHWwcqFMF2xMJ6MsjfsrtCVsasc4FEPZU_euciAs_8PkOQ/exec', {
        method: 'POST',
        body: formData  // Enviar los datos como FormData
    })
    .then(response => response.text())
    .then(result => {
        console.log("Respuesta del servidor: ", result);
        document.getElementById('responseMessage').textContent = result;  // Mostrar la respuesta
    })
    .catch(error => {
        console.error("Error en el envío: ", error);
        document.getElementById('responseMessage').textContent =
            'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.';
    });
});
