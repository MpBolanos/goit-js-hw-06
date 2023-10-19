const counter = document.getElementById('value');
const buttonIncrement= document.getElementById('btn-increment');
const buttonDecrement = document.getElementById('btn-decrement');

let valueCounter = 0;

buttonIncrement.addEventListener('click', () => {
    valueCounter++;
    counter.textContent = valueCounter;
});

buttonDecrement.addEventListener('click', () => {
    valueCounter--;
    counter.textContent = valueCounter;
 
});


/*

TAREA 4

El contador consta de un span y de botones que, al ser pulsados, deben aumentar y disminuir su valor en uno.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

Cree una variable counterValue para almacenar el valor actual e inicializarlo con el valor 0.
Añada escuchas de clic a los botones, dentro de los cuales aumenta o disminuye el valor del contador.
Actualice la interfaz con el nuevo valor de la variable counterValue.

EXPLICACIÓN:

Este código crea un contador interactivo. Al hacer clic en el botón de incremento, 
el valor del contador aumenta en 1 y se muestra en la página. Del mismo modo, al hacer clic en el botón de decremento, 
el valor del contador disminuye en 1 y se actualiza en la pantalla.

1. Se declaran tres variables utilizando la palabra clave `const`. 
La variable `counter` se asigna al elemento del DOM que tiene el id "value". 
Las variables `buttonIncrement` y `buttonDecrement` se asignan a los elementos del DOM 
que tienen los ids "btn-increment" y "btn-decrement", respectivamente.

2. Se declara una variable llamada `valueCounter` e inicializa con el valor 0. 
Esta variable almacenará el valor actual del contador.

3. Se añaden dos event listeners utilizando el método `addEventListener()`. 
El primer event listener está asociado al evento de clic en el botón de incremento (`buttonIncrement`). 
Cuando se hace clic en este botón, se ejecuta una función de flecha (arrow function) 
que incrementa el valor de `valueCounter` en 1 y actualiza el contenido del elemento `counter` con el nuevo valor.

4. El segundo event listener está asociado al evento de clic en el botón de decremento (`buttonDecrement`). 
Cuando se hace clic en este botón, se ejecuta otra función de flecha que decrementa el valor de `valueCounter` en 1 
y actualiza el contenido del elemento `counter`.

*/