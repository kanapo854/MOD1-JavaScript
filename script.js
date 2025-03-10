// Obtener elementos del DOM
constverDetallesButton=document.getElementById('verDetalles');
constvolverButton=document.getElementById('volver');
consttarjeta=document.querySelector('.tarjeta');
// Función para voltear la tarjeta
verDetallesButton.addEventListener('click', () => {
tarjeta.style.transform='rotateY(180deg)'; // Voltear la tarjeta
});
// Función para volver a la cara frontal
volverButton.addEventListener('click', () => {
tarjeta.style.transform='rotateY(0deg)'; // Volver a la cara inicial
});