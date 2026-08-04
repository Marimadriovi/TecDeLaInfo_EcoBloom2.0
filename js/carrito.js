// 1. Guardar producto desde el Personalizador
function agregarAlCarrito() {
    const aromaSelect = document.getElementById('aroma');
    const pielSelect = document.getElementById('piel');
    const exfolianteRadio = document.querySelector('input[name="exfoliante"]:checked');

    // Obtener los nombres seleccionados
    const aroma = aromaSelect.options[aromaSelect.selectedIndex].text;
    const piel = pielSelect.options[pielSelect.selectedIndex].text;
    const exfoliante = exfolianteRadio ? (exfolianteRadio.value === 'avena' ? 'Con Avena' : 'Sin Exfoliante') : 'Normal';

    // Construir el objeto del producto
    const nuevoProducto = {
        id: Date.now(), // ID único basado en el tiempo
        nombre: `Jabón (${aroma})`,
        detalles: `Piel: ${piel} | ${exfoliante}`,
        precio: 8.50, // Precio base fijo para jabones personalizados
        cantidad: 1,
        imagen: "res/logoEcoOficial.jpg"
    };

    // Obtener carrito previo o inicializar vacío
    let carrito = JSON.parse(localStorage.getItem('carritoEcoBloom')) || [];

    // Añadir el nuevo elemento
    carrito.push(nuevoProducto);

    // Guardar en localStorage
    localStorage.setItem('carritoEcoBloom', JSON.stringify(carrito));

    // Confirmación al usuario
    alert('¡Jabón personalizado añadido al carrito exitosamente!');
}

// 2. Cargar y mostrar los productos en carrito.html
function cargarCarrito() {
    const contenedorTabla = document.querySelector('.tabla-carrito tbody');
    const elementoTotal = document.querySelector('.precio-total');

    if (!contenedorTabla) return; // Si no estamos en la página del carrito, salir

    let carrito = JSON.parse(localStorage.getItem('carritoEcoBloom')) || [];

    // Si el carrito está vacío
    if (carrito.length === 0) {
        contenedorTabla.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 20px;">
                    Tu carrito está vacío.
                </td>
            </tr>
        `;
        if (elementoTotal) elementoTotal.textContent = "$0.00";
        return;
    }

    // Dibujar las filas
    let html = '';
    let totalGeneral = 0;

    carrito.forEach((prod, index) => {
        const subtotal = prod.precio * prod.cantidad;
        totalGeneral += subtotal;

        html += `
            <tr>
                <td class="prod-info">
                    <img src="${prod.imagen}" alt="${prod.nombre}">
                    <div>
                        <strong>${prod.nombre}</strong><br>
                        <small style="color: #bbb;">${prod.detalles}</small>
                    </div>
                </td>
                <td>${prod.cantidad}</td>
                <td>$${prod.precio.toFixed(2)}</td>
                <td>$${subtotal.toFixed(2)}</td>
                <td>
                    <button class="btn-eliminar" onclick="eliminarDelCarrito(${index})">
                        <i class='bx bx-trash'></i>
                    </button>
                </td>
            </tr>
        `;
    });

    contenedorTabla.innerHTML = html;
    if (elementoTotal) elementoTotal.textContent = `$${totalGeneral.toFixed(2)}`;
}

// 3. Eliminar un elemento individual
function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem('carritoEcoBloom')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carritoEcoBloom', JSON.stringify(carrito));
    cargarCarrito(); // Recargar la tabla
}

// Ejecutar automáticamente al cargar la página del carrito
document.addEventListener('DOMContentLoaded', cargarCarrito);

// Productos predefinidos de la tienda EcoBloom
const productosPredefinidos = [
    {
        id: 1,
        nombre: "Jabón de Limón Orgánico",
        detalles: "Piel Grasa / Acné | Con Avena",
        precio: 8.50,
        cantidad: 1,
        imagen: "res/galeria1.png"
    },
    {
        id: 2,
        nombre: "Jabón de Lavanda y Manzanilla",
        detalles: "Piel Sensible | Suave (Sin Exfoliante)",
        precio: 8.50,
        cantidad: 1,
        imagen: "res/galeria2.png"
    },
    {
        id: 3,
        nombre: "Jabón de Menta y Eucalipto",
        detalles: "Piel Seca / Hidratante | Con Avena",
        precio: 8.50,
        cantidad: 1,
        imagen: "res/galeria3.png"
    }
];

// 1. Guardar producto personalizado desde la página de personalización
function agregarAlCarrito() {
    const aromaSelect = document.getElementById('aroma');
    const pielSelect = document.getElementById('piel');
    const exfolianteRadio = document.querySelector('input[name="exfoliante"]:checked');

    const aroma = aromaSelect ? aromaSelect.options[aromaSelect.selectedIndex].text : "Orgánico";
    const piel = pielSelect ? pielSelect.options[pielSelect.selectedIndex].text : "Todo tipo";
    const exfoliante = exfolianteRadio ? (exfolianteRadio.value === 'avena' ? 'Con Avena' : 'Sin Exfoliante') : 'Normal';

    const nuevoProducto = {
        id: Date.now(),
        nombre: `Jabón (${aroma})`,
        detalles: `Piel: ${piel} | ${exfoliante}`,
        precio: 8.50,
        cantidad: 1,
        imagen: "res/logoEcoOficial.jpg"
    };

    let carrito = JSON.parse(localStorage.getItem('carritoEcoBloom')) || [];
    carrito.push(nuevoProducto);
    localStorage.setItem('carritoEcoBloom', JSON.stringify(carrito));

    alert('¡Jabón personalizado añadido al carrito exitosamente!');
}

// 2. Cargar y renderizar los productos en la tabla del carrito
function cargarCarrito() {
    const contenedorTabla = document.querySelector('.tabla-carrito tbody');
    const elementoTotal = document.querySelector('.precio-total');

    if (!contenedorTabla) return;

    let carrito = JSON.parse(localStorage.getItem('carritoEcoBloom'));
    
    // Si la memoria está vacía, cargar los 3 jabones por defecto
    if (!carrito) {
        carrito = productosPredefinidos;
        localStorage.setItem('carritoEcoBloom', JSON.stringify(carrito));
    }

    if (carrito.length === 0) {
        const lang = localStorage.getItem('idiomaPreferido') || 'es';
        const msgVacio = (typeof traducciones !== 'undefined' && traducciones[lang]) 
            ? traducciones[lang]["carrito-vacio"] 
            : "Tu carrito está vacío.";

        contenedorTabla.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 20px; color: white;">${msgVacio}</td>
            </tr>
        `;
        if (elementoTotal) elementoTotal.textContent = "$0.00";
        return;
    }

    let html = '';
    let totalGeneral = 0;

    carrito.forEach((prod, index) => {
        const subtotal = prod.precio * prod.cantidad;
        totalGeneral += subtotal;

        html += `
            <tr>
                <td class="prod-info">
                    <img src="${prod.imagen}" alt="${prod.nombre}">
                    <div>
                        <strong>${prod.nombre}</strong><br>
                        <small style="color: #bbb;">${prod.detalles}</small>
                    </div>
                </td>
                <td>${prod.cantidad}</td>
                <td>$${prod.precio.toFixed(2)}</td>
                <td>$${subtotal.toFixed(2)}</td>
                <td>
                    <button class="btn-eliminar" onclick="eliminarDelCarrito(${index})">
                        <i class='bx bx-trash'></i>
                    </button>
                </td>
            </tr>
        `;
    });

    contenedorTabla.innerHTML = html;
    if (elementoTotal) elementoTotal.textContent = `$${totalGeneral.toFixed(2)}`;
}

// 3. Eliminar un producto del carrito
function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem('carritoEcoBloom')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carritoEcoBloom', JSON.stringify(carrito));
    cargarCarrito();
}

document.addEventListener('DOMContentLoaded', cargarCarrito);