// --- Punto 1 ---

/*
function validarFechaVueloForm1() {
    const fechaIngresada = new Date(document.getElementById("Fechavuelo").value);
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);

    if (fechaIngresada < fechaActual) {
        alert("Fecha de Vuelo debe ser Mayor a la Fecha Actual");
        return false;
    }
    return true;
}

window.addEventListener("load", () => {
    const form = document.querySelector("form");
    if (form) {
        form.onsubmit = validarFechaVueloForm1;
    }
});
*/
// --- Punto 2 ---
function Reserva(origen, destino, fecha, hora, nombre, dni, nacimiento, sexo, clase, ubicacion) {
    this.origen = origen;
    this.destino = destino;
    this.fecha = fecha;
    this.hora = hora;
    this.nombre = nombre;
    this.dni = dni;
    this.nacimiento = nacimiento;
    this.sexo = sexo;
    this.clase = clase;
    this.ubicacion = ubicacion;
}

class SistemaReservas {
    constructor() {
        this.reservas = [];
    }
    agregarReserva(reserva) {
        this.reservas.push(reserva);
    }
}


const sistema = new SistemaReservas();
sistema.agregarReserva(new Reserva("Córdoba", "Mendoza", "2025-09-20", "18:00", "Emir Barrionuevo", "44688024", "1990-01-15", "M", "Económica", "Pasillo"));
sistema.agregarReserva(new Reserva("Mendoza", "Tucumán", "2025-10-05", "10:30", "Erik Cirione", "29111222", "1985-05-22", "F", "Ejecutiva", "Ventana"));
sistema.agregarReserva(new Reserva("Tucumán", "Córdoba", "2025-11-01", "22:15", "Alejo Maidana", "31222333", "1992-09-12", "M", "Económica", "Centro"));


window.addEventListener("load", () => {
    const tabla = document.getElementById("tablaReservas");
    if (tabla) {
        const tbody = tabla.querySelector("tbody");
        sistema.reservas.forEach(reserva => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${reserva.nombre}</td>
                <td>${reserva.destino}</td>
                <td>${reserva.clase}</td>
            `;
            tbody.appendChild(fila);
        });
    }
});

// --- Ejercicio 2 parte 2---

function validarFechaVueloForm2() {
    const fechaIngresada = new Date(document.getElementById("Fechavuelo").value);
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);
    if (isNaN(fechaIngresada.getTime())) {
        alert("Debe seleccionar una fecha de vuelo");
        return false;
    }
    if (fechaIngresada < fechaActual) {
        alert("Fecha de Vuelo debe ser Mayor a la Fecha Actual");
        return false;
    }
    return true;
}
function validarOrigenDestino() {
    const origen = document.getElementById("origen").value;
    const destino = document.getElementById("destino").value;

    if (origen === destino) {
        alert("El Origen y el Destino no pueden ser iguales");
        return false;
    }
    return true;
}
function actualizarDestino() {
    const origen = document.getElementById("origen").value;
    const destinoSelect = document.getElementById("destino");
    const opciones = ["Córdoba", "Mendoza", "Tucumán"];

    destinoSelect.innerHTML = "";
    opciones.forEach(op => {
        if (op !== origen) {
            const option = document.createElement("option");
            option.value = op;
            option.textContent = op;
            destinoSelect.appendChild(option);
        }
    });
}
window.addEventListener("load", () => {
    const form2 = document.getElementById("formVuelo");
    if (form2) {
        form2.onsubmit = () => validarFechaVueloForm2() && validarOrigenDestino();
    }

    const origen = document.getElementById("origen");
    if (origen) {
        origen.addEventListener("change", actualizarDestino);
        actualizarDestino(); 
    }
});
