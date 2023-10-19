const inputTexto = document.querySelector(`#name-input`);
const outputTexto = document.querySelector(`#name-output`);
inputTexto.addEventListener(`input`, writeSpan);

function writeSpan(){
if (inputTexto.value ==``) {
    outputTexto.textContent = `anonimo`;
} 
else {
outputTexto.textContent = inputTexto.value;
}
}

/*

TAREA 5

Escriba un script que, cuando se escriba el texto en el input de input#nombre-input (evento input), 
sustituya su valor actual en span#name-output. Si el input está vacío, el span debería mostrar la secuencia "Anónimo".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>

EXPLICACIÓN:

Este código captura lo que se escribe en un input y muestra ese texto en otro elemento. 

1. Se utiliza `document.querySelector(`#name-input`)` para seleccionar el elemento HTML con el id "name-input" 
y se guarda en la variable `inputTexto`. 
Esto permitirá acceder al input más adelante.

2. Se utiliza `document.querySelector(`#name-output`)` para seleccionar el elemento HTML con el id "name-output" 
y se guarda en la variable `outputTexto`. 
Esto te permitirá acceder al elemento donde mostrarás el texto.

3. Se utiliza `inputTexto.addEventListener('input', writeSpan)` para agregar un event listener al input. 
De esta manera cada vez que se escriba algo en el input, se ejecutará la función `writeSpan`.

4. En la función `writeSpan` se comprueba si el valor del input (`inputTexto.value`) está vacío (`== ''`). 
Si es así, se establece el texto del elemento de salida (`outputTexto.textContent`) como "anónimo".

5. Si el valor del input no está vacío, se establece el texto del elemento de salida como 
el valor actual del input (`inputTexto.value`).

*/