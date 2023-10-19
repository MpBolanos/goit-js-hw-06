const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input', () => {
  const fontSize = fontSizeControl.value + 'px';
  text.style.fontSize = fontSize;
});

/*

TAREA 7

Escriba un script que reaccione a un cambio en el valor de input#font-size-control. (evento input) y 
cambie el estilo inline de span#text actualizando el font-size. 
Por lo tanto, al arrastrar el deslizador cambiará el tamaño del texto.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>

EXPLICACIÓN:

Este código permite ajustar dinámicamente el tamaño de fuente del texto al arrastrar el deslizador, 
proporcionando una experiencia interactiva al usuario.

1. Se seleccion el elemento `#font-size-control` utilizando `document.querySelector('#font-size-control')` 
y se le asigna a la variable `fontSizeControl`.

2. Se selecciona el elemento `#text` utilizando `document.querySelector('#text')` y 
se le asigna a la variable `text`.

3. se agrega un evento de escucha al elemento `fontSizeControl` cuando 
cambia su valor utilizando `fontSizeControl.addEventListener('input', () => { ... })`.

4. Dentro del manejador de eventos, se obtene el valor actual del deslizador 
utilizando `fontSizeControl.value`. Este valor representa el tamaño de fuente seleccionado.

5. Se concata el valor con la unidad de medida "px" para obtener una cadena 
completa de tamaño de fuente, y lo asignamos a la variable `fontSize`.

6. Se actualiza el estilo inline del elemento `text` estableciendo la 
propiedad `fontSize` con el valor obtenido (`text.style.fontSize = fontSize`). 
Esto cambia el tamaño de fuente del texto en función del valor seleccionado en el deslizador.

*/