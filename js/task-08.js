const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event){
    event.preventDefault(); //Evita que se recargue la páginaal enviar el formulario

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    if (emailInput.value.trim() ==='' || passwordInput.value.trim() === '') {
        alert('Todos los espacios deben ser rellenados o completados')        
    }

    const formData = {
        email: emailInput.value,
        password: passwordInput.value
    }

    console.log(formData); //Muestra los datos en la consola

    loginForm.reset(); // Borra los valores de los campos del formulario
})

/*

TAREA 8

Escriba un script para controlar el formulario de acceso.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>

El procesamiento de form.login-form debe ser por el evento submit.
La página no debe recargarse cuando se envía el formulario.
Si hay espacios en blanco en el formulario, aparecerá alert con una advertencia diciendo
que todos los espacios deben ser rellenados.
Si el usuario ha rellenado todos los espacios y ha enviado el formulario, 
reúne los valores de los espacios en donde el nombre del espacio es el 
nombre de la propiedad y el valor del espacio es la propiedad. Use la 
propiedad elements para acceder a los elementos del formulario.
Muestre el objeto con los datos introducidos en la consola y borre los 
valores de los camposespacio del formulario usando el método reset.

EXPLICACIÓN:

Este código realiza lo siguiente:

1. `const loginForm = document.querySelector('.login-form');`: Esta línea de código selecciona el formulario de acceso utilizando 
el método `querySelector` y la clase CSS `.login-form`. El formulario se guarda en la variable `loginForm`.

2. `loginForm.addEventListener('submit', function(event) { ... });`: Se agrega un evento de escucha al formulario 
para el evento "submit". Cuando se envía el formulario, se ejecuta la función anónima proporcionada.

3. `event.preventDefault();`: Esta línea de código evita que el formulario se envíe y la página se recargue automáticamente. 
Al llamar al método `preventDefault()` en el objeto `event`, se cancela el comportamiento predeterminado del navegador.

4. `const emailInput = loginForm.elements.email;` y `const passwordInput = loginForm.elements.password;`: Estas líneas de código 
obtienen las referencias a los elementos de entrada (input) del formulario utilizando la propiedad `elements` del formulario 
y los nombres de los campos (`email` y `password`). Las referencias se guardan en las variables `emailInput` y `passwordInput`, respectivamente.

5. `if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') { ... }`: Esta línea de código verifica si 
los campos de correo electrónico y contraseña están vacíos. 
Utiliza el método `trim()` para eliminar cualquier espacio en blanco al principio o al final de los valores ingresados. 
Si alguno de los campos está vacío, se muestra una alerta con el mensaje "Todos los campos deben ser completados" 
y se finaliza la ejecución de la función usando `return`.

6. `const formData = { email: emailInput.value, password: passwordInput.value };`: Esta línea de código crea un objeto `formData` 
que contiene los valores de los campos de correo electrónico y contraseña. Los valores se obtienen a través de 
las propiedades `value` de los elementos de entrada (`emailInput` y `passwordInput`).

7. `console.log(formData);`: Esta línea de código muestra el objeto `formData` en la consola del navegador. 
Puedes ver los datos ingresados por el usuario, como el correo electrónico y la contraseña, en la consola.

8. `loginForm.reset();`: Esta línea de código restablece los valores de los campos del formulario a sus valores predeterminados. 
Al llamar al método `reset()` en el formulario, se eliminan los datos ingresados por el usuario.

*/
