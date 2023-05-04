// Define el objeto del carrito
const cart = {
    items: [],
    total: 0,
    addItem: function (service) {
        this.items.push(service);
        this.total += service.price;
    },
    removeItem: function (index) {
        this.total -= this.items[index].price;
        this.items.splice(index, 1);
    },
    displayCart: function () {
        console.log("Carrito de compras:");
        console.log("---------------");
        for (let i = 0; i < this.items.length; i++) {
            console.log(`${i + 1}. ${this.items[i].name} - $${this.items[i].price.toFixed(2)}`);
        }
        console.log("---------------");
        console.log(`Total: $${this.total.toFixed(2)}`);
    }
};

// Define la lista de servicios
const serviceList = [
    { name: "Desarrollo web", price: 5000 },
    { name: "Diseño gráfico", price: 3500 },
    { name: "Optimización SEO", price: 2500 },
    { name: "Gestión de redes sociales", price: 2000 },
    { name: "Redacción de contenidos", price: 1500 },
    { name: "Publicidad en línea", price: 4000 },
    { name: "Fotografía y video", price: 3000 },
    { name: "Marketing de influencers", price: 4500 },
    { name: "Email marketing", price: 3000 },
    { name: "Gestión de reputación en línea", price: 4000 }
];

// Solicita al usuario que agregue servicios al carrito
let seguirComprando = true;
while (seguirComprando) {
    // Muestra la lista de servicios al usuario
    console.log("Lista de servicios:");
    console.log("-------------");
    for (let i = 0; i < serviceList.length; i++) {
        console.log(`${i + 1}. ${serviceList[i].name} - $${serviceList[i].price}`);
    }

    // Solicita al usuario que seleccione un servicio
    let indiceServicio = parseInt(prompt("Ingrese el número del servicio que desea agregar al carrito:")) - 1;

    // Agrega el servicio al carrito
    let servicioSeleccionado = serviceList[indiceServicio];
    cart.addItem(servicioSeleccionado);

    // Muestra el carrito al usuario
    console.log("Carrito de compras:");
    console.log("---------------");
    for (let i = 0; i < cart.items.length; i++) {
        console.log(`${i + 1}. ${cart.items[i].name} - $${cart.items[i].price.toFixed(2)}`);
    }
    console.log("---------------");
    console.log(`Total: $${cart.total.toFixed(2)}`);

    // Solicita al usuario que continúe comprando
    let entradaUsuario = prompt("¿Desea continuar comprando? (S/N)").toUpperCase();
    seguirComprando = entradaUsuario === "S" ? true : false;
}

// Muestra el carrito final
cart.displayCart();

// Pregunta al usuario si quiere eliminar elementos del carrito
let seguirEliminando = true;
let entradaUsuario = prompt("¿Desea eliminar elementos del carrito? (S/N)").toUpperCase();
if (entradaUsuario === "S") {
    while (seguirEliminando) {
        let indiceServicio = parseInt(prompt("Ingrese el número del servicio que desea eliminar:"));
        cart.removeItem(indiceServicio);
        cart.displayCart();
        entradaUsuario = prompt("¿Desea seguir eliminando servicios? (S/N)").toUpperCase();
        seguirEliminando = entradaUsuario === "S" ? true : false;
    }
} else {
    alert(`El total de la compra es $${cart.total.toFixed(2)}`);
}
