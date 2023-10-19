const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');

const html = images.map(image => `
  <li>
    <img src="${image.url}" alt="${image.alt}">
  </li>
`).join('');

gallery.insertAdjacentHTML('beforeend', html);

/*

TAREA 3

Escriba un script para crear una galería de imágenes a partir de un array de datos. El HTML tiene una lista ul.gallery.

<ul class="gallery"></ul>

Use un array de objetos images para crear elementos <img> anidados dentro de <li>. 
Use las secuencias de plantillas y el método insertAdjacentHTML() para crear el marcado.

Todos los elementos de la galería deben añadirse al DOM en una sola operación de inserción.
Añada un diseño mínimo a la galería con flexboxes o Computación en malla mediante las clases CSS.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

EXPLICACIÓN:

Este código genera una lista de imágenes dentro del elemento HTML con la clase "gallery". 

1. Se define un array llamado `images` que contiene objetos con dos propiedades: `url` y `alt`. 
Cada objeto representa una imagen y contiene la URL de la imagen y una descripción alternativa.

2. Se selecciona el elemento HTML con la clase "gallery" utilizando `document.querySelector('.gallery')` 
y lo guardas en la variable `gallery`. 
Esto permitirá acceder a ese elemento más adelante.

3. Se utiliza el método `map` para recorrer el array `images` y crear una nueva array con elementos `<li>` 
que contienen imágenes. En cada iteración, se crea una cadena HTML utilizando template literals o secuencias de plantillas (`${}`) 
donde se inserta la URL y la descripción alternativa de cada imagen.

4. Se utiliza el método `join('')` para convertir el array de cadenas HTML en una sola cadena concatenada.

5. Se utiliza `insertAdjacentHTML('beforeend', html)` para insertar esa cadena de HTML dentro del elemento con la clase "gallery".

6. Se crean estilos en el archivo common.css, utilizando los selectores `.gallery`,  `.gallery li` y `.gallery img`, 
con sus respectivas propiedades, para añadir un diseño a la galeria y se puedan organizar y 
presentar las imágenes de manera atractiva.

*/
