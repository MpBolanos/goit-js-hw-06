const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById("ingredients");

ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add("item");
  ul.appendChild(li);
});


/*

TAREA 2

HTML tiene una lista vacía ul#ingredients.

<ul id="ingredients"></ul>

En JavaScript hay una array de secuencias.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

Escriba un script que para cada elemento del array ingredients:

Cree un elemento separado <li>. Asegúrese de usar el método document.createElement().
Añada el nombre de un ingrediente como contenido de texto.
Añada una clase item al elemento.
Después, inserte todos los <li> en una sola operación en la lista ul#ingredients.

EXPLICACIÓN:

Este código permite contar y mostrar el número total de categorías en una lista, así como el nombre y 
el número de elementos en cada categoría.

1. Se obtiene una referencia al elemento del DOM con el id "categories" utilizando `querySelector()`. 
Esto permite acceder a la lista de categorías.

2. Se utiliza `querySelectorAll()` en el elemento de la lista de categorías para obtener una colección 
de elementos con la clase "item". 
Estos elementos representan cada categoría individual en la lista.

3. Se utiliza `console.log()` para imprimir una línea vacía en la consola 
y mostrar el número total de categorías utilizando la propiedad `length` de la colección `categoriesItem`.

4. Se utiliza un bucle `forEach` para iterar sobre cada elemento de la colección `categoriesItem`. 
Para cada elemento de categoría, se realiza lo siguiente:

   - Se utiliza `querySelector()` en el elemento de categoría para obtener una referencia al elemento `<h2>` 
   dentro de ese elemento. 
   Luego, se accede al contenido de texto del elemento `<h2>` utilizando la propiedad `textContent`. 
   Esto da el nombre de la categoría.
   
   - Se utiliza `querySelectorAll()` en el elemento de categoría para obtener una colección de elementos `<li>` 
   dentro de ese elemento. 
   Luego, se usa la propiedad `length` de esa colección para obtener el número total de elementos en esa categoría.
   
   - Finalmente, se utiliza `console.log()` para imprimir líneas vacías en la consola y mostrar el nombre de la categoría 
   y el número total de elementos en esa categoría.

*/
