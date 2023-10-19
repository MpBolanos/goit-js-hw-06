const changeColor = document.querySelector('.change-color');

changeColor.addEventListener('click', function() {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  document.querySelector('.color').textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}


/*

TAREA 9

Escriba un script que cambie el color de fondo del elemento <body> mediante el estilo inline 
cuando se hace clic en button.change-color y emite el valor del color en span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Use la función getRandomHexColor para generar un color aleatorio.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

EXPLICACIÓN:

Este código realiza lo siguiente:

1. Se selecciona el botón con la clase "change-color" utilizando `document.querySelector('.change-color')`.

2. Se agraga un evento de escucha al botón utilizando `addEventListener('click', function() { ... })`. 
Esto significa que el código dentro de la función se ejecutará cuando se haga clic en el botón.

3. Dentro de la función del evento de clic, se genera un color aleatorio utilizando la función `getRandomHexColor()`. 
Este color se almacena en la variable `color`.

4. Se establece el color de fondo del elemento `<body>` utilizando `document.body.style.backgroundColor = color`. 
Esto cambiará el color de fondo del documento cuando se haga clic en el botón.

5. Se selecciona el elemento `<span class="color">` utilizando `document.querySelector('.color')` 
y actualizamos su contenido con el valor del color generado utilizando `textContent = color`. 
Esto mostrará el valor del color en el documento.

La función `getRandomHexColor()` genera un número hexadecimal aleatorio utilizando `Math.random()` y `Math.floor()`. 
Luego, convierte este número en una cadena hexadecimal de 6 dígitos y la devuelve en formato `"#RRGGBB"`.

*/