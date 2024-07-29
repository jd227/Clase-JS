

// Crear el título
var titulo = document.createElement('h1');
titulo.textContent = 'Intento';
document.body.appendChild(titulo);

// Crear un contenedor para las imágenes
var contenedorImagenes = document.createElement('div');
contenedorImagenes.style.display = 'flex';
document.body.appendChild(contenedorImagenes);

// Crear las dos imágenes
var imagen1 = document.createElement('img');
imagen1.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo2XpFulMPE-C6v3eShwOve2VF5Sheh0BP7Q&s';
imagen1.style.width = '20%';
contenedorImagenes.appendChild(imagen1);

var imagen2 = document.createElement('img');
imagen2.src = 'https://d.furaffinity.net/art/cloptrap/1446394106/1446394030.cloptrap_d7d0f012dd957d6b34e0d32bda011d54.png';
imagen2.style.width = '20%';
contenedorImagenes.appendChild(imagen2);

// Crear el texto debajo de las imágenes
var texto = document.createElement('p');
texto.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, laudantium adipisci. Accusantium, minima explicabo quaerat, quidem distinctio natus animi iusto quisquam excepturi ea quae, necessitatibus ab. Itaque suscipit quibusdam a!';
document.body.appendChild(texto);

// Crear el botón
var boton = document.createElement('button');
boton.textContent = 'Haz clic aquí';
document.body.appendChild(boton);

boton.addEventListener('click', function() {
    alert('Funciona');
});
