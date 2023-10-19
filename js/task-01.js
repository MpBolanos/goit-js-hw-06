const categoriesList = document.querySelector('#categories');
const categoriesItem = categoriesList.querySelectorAll('.item');

console.log('');
console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach(category => {
    const categoryName = category.querySelector(`h2`).textContent;
    const categoryElement = category.querySelectorAll(`li`).length; 
    console.log('')
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElement}`);
});


/*

TAREA 1

Existe una lista de categorías en el HTML ul#categories.

<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>

Escriba un script que:

Cuente y muestre en la consola el número de categorías en ul#categories, es decir. los artículos li.item.
Para cada elemento li.item en la lista ul#categories, encuentre y envíe a la consola el texto del título 
del artículo (tag <h2>) y el número de artículos en la categoría (todo anidado <li>).
Como resultado, se mostrarán los siguientes mensajes en la consola.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5

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
