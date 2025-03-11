// Obtener elementos del DOM
const verDetallesButton = document.getElementById('verDetalles');
const volverButton = document.getElementById('volver');
//const tarjeta = document.querySelector('.tarjeta');
const cara_posterior = document.querySelector('.posterior');
const cara_frontal = document.querySelector('.frontal');

// Función para voltear la tarjeta
verDetallesButton.addEventListener('click', () => {
    //tarjeta.style.transform='rotateY(180deg)'; // Voltear la tarjeta
    cara_frontal.style.transform = 'rotateY(180deg)';
    cara_posterior.style.transform = 'rotateY(0deg)';
});

// Función para volver a la cara frontal
volverButton.addEventListener('click', () => {
    //tarjeta.style.transform='rotateY(0deg)'; // Volver a la cara inicial
    cara_frontal.style.transform = 'rotateY(0deg)';
    cara_posterior.style.transform = 'rotateY(180deg)';
});