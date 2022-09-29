class Pizzas {
    constructor(id, nombre, ingredientes, precio, imagen) {
            this.id = id;
            this.nombre = nombre;
            this.ingredientes = ingredientes;
            this.precio = precio;
            this.imagen = imagen;
    }
}

let mozzarella = new Pizzas(1, 'Mozzarella', ['masa', ' salsa de la casa', ' queso mozzarella'], 900, 'imagenes/Pizza Muzzarella.jpg');
let doblemozzarella = new Pizzas (2, 'Doble Mozzarella', [' masa', ' salsa de la casa', ' doble capa de queso mozzarssella'], 1100, 'imagenes/DobleMozzarella.jpg');
let fugazzetta = new Pizzas (3,'Fugazzetta', ['masa', ' salsa de la casa', ' queso', ' cebollas caramelizadas'], 450, 'imagenes/pizza-fugazzeta.jpg');
let rucula = new Pizzas (4, 'Rucula', ['masa', ' salsa de la casa', ' queso', ' rucula', ' jamon crudo', ' aceitunas negras'], 1250, 'imagenes/rucula-1200x675.jpg');
let especial = new Pizzas (5, 'Especial', ['masa', ' salsa de la casa', ' queso mozzarella', ' jamon cocido', ' aceitunas negras'], 1350, 'imagenes/comida-especial.jpg');
let margarita = new Pizzas (6, 'Margarita', ['masa', ' salsa', ' queso', ' tomates cherries', ' albaca', ' aceite de oliva'], 1400, 'imagenes/pizza-margarita-3684.jpg');

let todasLasPizzas = [mozzarella, doblemozzarella, fugazzetta, rucula, especial, margarita];

const pizzasIdImpar = todasLasPizzas.filter(filtrar);
function filtrar (x){
    if(x.id % 2 !=0){console.log(x)}
}

const pizzasMenosDe600 = todasLasPizzas.filter(distinguir);
function distinguir (y){
    if(y.precio < 600){console.log(y)}
}

function nombreYPrecios() {
    todasLasPizzas.forEach(
        function (e) {console.log('la pizza ' + e.nombre, 'sale ' + e.precio + ' pesos')}
    )
}

nombreYPrecios()

function nombreEIngredientes() {
    todasLasPizzas.forEach(
        function (e) {console.log( 'la pizza ' + e.nombre, 'contiene: ' + e.ingredientes)}
    )
}

nombreEIngredientes()

// ENTREGA JS2
let infoBoton = document.getElementById('btn');

infoBoton.addEventListener('click', function () {
    let $valor = document.getElementById('input').value;
})

infoBoton.addEventListener('click', function () {
    let $valor = document.getElementById('input').value;
    if ($valor >= todasLasPizzas.length + 1){
        alert('¡Por ahora sólo podes elegir entre una de nuestras seis variedades!: 1.mozzarella, 2.doblemozzarella, 3.fugazzetta, 4.rucula, 5.especial, 6.margarita ');
    }
    else if ($valor <= 0){
    alert('¡Por ahora sólo podes elegir entre una de nuestras seis variedades!: 1.mozzarella, 2.doblemozzarella, 3.fugazzetta, 4.rucula, 5.especial, 6.margarita ')
}

    let valorParseado = parseInt($valor)

    let resultado = todasLasPizzas.filter((e) => e.id === valorParseado)

    console.log(valorParseado)
    console.log(resultado)

    let nombrePizza = document.getElementById('h2');
    let h2Content = resultado.find(result => result.id == $valor)
    nombrePizza.textContent = `La pizza elegida es: ${h2Content.nombre}`;
   
    let precioPizza = document.getElementById('h4');
    let h4Content = resultado.find(result => result.id == $valor)
    precioPizza.textContent = `El precio de tu pizza es: $ ${h4Content.precio}`;

// ENTREGA JS3
    let ingredientesPizza = document.getElementById('h5');
    let h5Content = resultado.find(result => result.id == $valor)
    ingredientesPizza.textContent = `ingredientes: ${h5Content.ingredientes}`;

    let imagenPizza = document.getElementById('imgPizza');
    let imgPizzaContent = resultado.find(result => result.id == $valor)
    let pImagen = imgPizzaContent.imagen
    imagenPizza.setAttribute('src', pImagen);

    
})

