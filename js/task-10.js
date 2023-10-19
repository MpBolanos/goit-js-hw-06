// Obtener referencias a los elementos del DOM
const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

// Escuchar el evento click del botón Crear
createButton.addEventListener('click', createBoxes);

// Escuchar el evento click del botón Borrar
destroyButton.addEventListener('click', destroyBoxes);

// Función para crear las cajas
function createBoxes() {
  // Obtener el número de elementos del input
  const amount = parseInt(input.value);

  // Limpiar el contenido de div#boxes
  boxesContainer.innerHTML = '';

  // Crear las cajas y añadirlas a div#boxes
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}

// Función para borrar las cajas
function destroyBoxes() {
  // Limpiar el contenido de div#boxes
  boxesContainer.innerHTML = '';
}

// Función para generar un color aleatorio en formato HEX
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

/*

TAREA 10

Escriba un script para crear y borrar una colección de elementos. 
El usuario introduce el número de elementos en input y pulsa el botón Create, 
tras lo cual la colección se ha renderizado. 
Cuando el usuario hace clic en el botón Borrar, la colección de artículos ya se ha despejado.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Cree una función createBoxes(amount) que tome un parámetro, un número. 
La función crea tantos <div> como se especifique en amount y los añade a div#boxes.

El tamaño del primer <div> es de 30px por 30px.
Cada elemento después del primero, debe ser 10px más ancho y alto que el anterior.
Todos los elementos deben tener un color de fondo aleatorio en formato HEX. 
Use la función getRandomHexColor lista para obtener el color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Cree una función destroyBoxes() que borre el contenido de div#boxes, eliminando así todos los elementos creados.

EXPLICACIÓN:

Este código permite que al hacer clic en el botón Crear, se crea una colección de elementos (cajas) con tamaños 
y colores aleatorios, y al hacer clic en el botón Borrar, se elimina toda la colección de elementos.

1. Se obtienen las referencias a los elementos del DOM necesarios: el input, los botones de Crear y Borrar, y el contenedor de las cajas.

2. Se añaden event listeners a los botones para escuchar el evento click y llamar a las funciones correspondientes.

3. La función `createBoxes()` se ejecuta cuando se hace clic en el botón Crear. 

   - Primero, se obtiene el número de elementos ingresado en el input.
   - Luego, se limpia el contenido del contenedor de las cajas.
   - Después, se crea un bucle que itera la cantidad de veces especificada por el usuario.
   - En cada iteración, se crea un nuevo elemento div (caja) y se le asignan propiedades como el tamaño y el color de fondo generado aleatoriamente.
   - Finalmente, se añade la caja al contenedor.

4. La función `destroyBoxes()` se ejecuta cuando se hace clic en el botón Borrar.
   - Simplemente limpia el contenido del contenedor de las cajas.

5. La función `getRandomHexColor()` genera un color aleatorio en formato hexadecimal.

*/
