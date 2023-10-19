const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  const inputValue = input.value;
  const symbolsLength = parseInt(input.getAttribute('data-length'));
  
  if (inputValue.length === symbolsLength) {
    input.style.borderColor = 'green';
  } else {
    input.style.borderColor = 'red';
  }
});

/*

TAREA 6

Escriba un script que, si se pierde el enfoque en un input (evento blur), 
el script comprobará el contenido del instupt para ver si el número de símbolos introducidos es correcto.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

El número de símbolos que debe tener un input se especifica en su atributo data-length.
Si se introduce el número correcto de símbolos, border del intuplet se convierte en verde, si no es correcto se vuelve rojo.
Para añadir estilos, use las clases CSS valid e invalid, que ya tenemos añadido a los archivos de origen del trabajo.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}

EXPLICACIÓN:

Este código valida la longitud del valor ingresado en un campo de entrada y 
cambia el color del borde según si cumple con la longitud especificada o no.

1. Se selecciona el elemento de entrada del formulario utilizando `document.querySelector('#validation-input')` 
y lo asignamos a la variable `input`.

2. Se agrega un evento de escucha al elemento de entrada cuando pierde el foco 
utilizando `input.addEventListener('blur', () => { ... })`.

3. Dentro del manejador de eventos, obtenemos el valor del campo de entrada usando `input.value` y 
lo asignamos a la variable `inputValue`.

4. Se obtiene la longitud especificada para el campo de entrada utilizando `input.getAttribute('data-length')` 
y lo convertimos a un número entero utilizando `parseInt()`. Luego, lo asignamos a la variable `symbolsLength`.

5. Se comprueba la longitud del valor de entrada (`inputValue.length`) con la longitud especificada (`symbolsLength`).

6. Si la longitud es igual, se establece el color del borde del campo de entrada 
en verde usando `input.style.borderColor = 'green'`.

7. Si la longitud no es igual, se establece el color del borde del campo de entrada 
en rojo usando `input.style.borderColor = 'red'`.

8. Se añaden los estilos en el archivo common.css para definir los colores de acuerdo a lo solicitado.

*/