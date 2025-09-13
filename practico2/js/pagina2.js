
function generarPasajeros() {
    const clase = document.getElementById("Clase").value;
    const cantidad = parseInt(document.getElementById("CantidadPasajes").value);
    const contenedor = document.getElementById("contenedorPasajeros");

    contenedor.innerHTML = "";

    if (!clase || isNaN(cantidad) || cantidad <= 0) return;

    for (let i = 1; i <= cantidad; i++) {
        const div = document.createElement("div");
        div.className = "pasajero";
        div.innerHTML = `
            <h3>Pasajero ${i}</h3>

            <label>Ubicación:</label>
            <select name="ubicacion${i}" required>
                ${
                clase === "Ejecutiva"
                    ? '<option value="Ventanilla">Ventanilla</option><option value="Pasillo">Pasillo</option>'
                    : '<option value="Ventanilla">Ventanilla</option><option value="Centro">Centro</option><option value="Pasillo">Pasillo</option>'
                }
            </select>
            <br><br>

            <label>Nro de Silla:</label>
            <input type="number" name="silla${i}" required 
                ${clase === "Ejecutiva" ? 'min="1" max="8"' : 'min="9" max="50"'}>
            <br><br>

            <label>Apellido y Nombre:</label>
            <input type="text" name="nombre${i}" maxlength="100" required>
            <br><br>

            <label>DNI:</label>
            <input type="number" name="dni${i}" required min="10000000" max="99999999">
            <br><br>

            <label>Fecha de nacimiento:</label>
            <input type="date" name="nacimiento${i}">
            <br><br>

            <div class="radio-group">
            <label >sexo:</label> 
            <label>
                <input type="radio" name="sexo" value="M"> M
            </label>
            <label>
                <input type="radio" name="sexo" value="F"> F
            </label>
        </div>
            <br><br>
        `;
        contenedor.appendChild(div);
    }
}

window.addEventListener("load", () => {
    document.getElementById("Clase").addEventListener("change", generarPasajeros);
    document.getElementById("CantidadPasajes").addEventListener("input", generarPasajeros);
});