class Producto {
    constructor(id, nombre, precio, cantidad) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }
};

const productos = [
    { id: 1, nombre: 'Pizza Muzzarella', precio: 6000, cantidad: 0 },
    { id: 2, nombre: 'Pizza Especial', precio: 8500, cantidad: 0 },
    { id: 3, nombre: 'Pizza Napolitana', precio: 10000, cantidad: 0 },
    { id: 4, nombre: 'Pizza Palmitos', precio: 12500, cantidad: 0 },
    { id: 5, nombre: 'Pizza Cuatro Quesos', precio: 9500, cantidad: 0 },
    { id: 6, nombre: 'Pizza Americana', precio: 13500, cantidad: 0 },
    { id: 7, nombre: 'Lomo Simple', precio: 4000, cantidad: 0 },
    { id: 8, nombre: 'Lomo Completo', precio: 5500, cantidad: 0 },
    { id: 9, nombre: 'Lomo Vegetariano', precio: 6000, cantidad: 0 },
    { id: 10, nombre: 'Lomo de Pollo', precio: 5000, cantidad: 0 },
    { id: 11, nombre: 'Lomo De Cerdo', precio: 5000, cantidad: 0 },
    { id: 12, nombre: 'Empanada Criollas', precio: 1500, cantidad: 0 },
    { id: 13, nombre: 'Empanada Arabes', precio: 2000, cantidad: 0 },
    { id: 14, nombre: 'Empanada Jamon y Queso', precio: 1500, cantidad: 0 },
    { id: 15, nombre: 'Empanada De Pollo', precio: 1500, cantidad: 0 },
    { id: 16, nombre: 'Empanada De Choclo', precio: 1500, cantidad: 0 },
    { id: 17, nombre: 'Coca Cola 1.5Lt', precio: 2500, cantidad: 0 },
    { id: 18, nombre: 'Sprite 1.5Lt', precio: 2500, cantidad: 0 },
    { id: 19, nombre: 'Fanta 1.5Lt', precio: 2500, cantidad: 0 },
    { id: 20, nombre: 'Cerveza Quilmes Lata', precio: 1700, cantidad: 0 },
    { id: 21, nombre: 'Cerveza Los Andes ', precio: 2000, cantidad: 0 },
];

class ProductoConImg extends Producto {
    constructor(id, nombre, precio, imagen) {
        super(id, nombre, precio);
        this.imagen = imagen
    }
};
obtenerProductos()
// Crear productos y manejos posibles errores
const crearProducto = () => {
    if (!productos || !productos.length) { // validar que no este vacio
        throw new Error("Error cargar productos");
    }
    return productos.map((producto) => {
        if (typeof producto.id != "number") { // Valida que sea un número
            throw new Error("Error, el id debe ser un número");
        }
        if (typeof producto.nombre != "string") { // Valida que sea un string
            throw new Error("Error, el nombre no es valido");
        }
        if (producto.precio <= 0) { // Valida que sea número positivo
            throw new Error("El precio debe ser número positivo");
        }
        return new ProductoConImg(producto.id, producto.nombre, producto.precio, producto.imagen);
    });
};

// Funcion que calcula el importe total
function calcularImporteTotal(array) {
    return array.reduce((total, array) => total + (array.precio * array.cantidad), 0);
};

// Funcion que muestra la cantidad de producto en el carrito
function notificacionCarrito(cantidad) {
    const cantidadProducto = document.querySelector('.inicio_nav_carrito_notificacion');
    if (cantidad > 0) {
        cantidadProducto.textContent = cantidad;
        cantidadProducto.style.display = 'block';
    } else {
        cantidadProducto.style.display = 'none';
    }
}

// Funcion de sweetalert
function msjAlert(msj) {
    Swal.fire({
        position: "top-end",
        title: msj,
        showConfirmButton: false,
        timer: 1000,
        customClass: {
            title: 'title',
            popup: 'popup'
        }
    });
};

// Funcion que crea el menu hamburguesa
function menuHamburguesa() {
    const selectorMenu = document.querySelector('.inicio_nav_menu-hamburguesa');
    const navMenu = document.querySelector('.inicio_nav_contenido');
    selectorMenu.addEventListener('click', () => {
        navMenu.classList.toggle('activo');
    });
};

export { crearProducto, calcularImporteTotal, notificacionCarrito, msjAlert, menuHamburguesa };