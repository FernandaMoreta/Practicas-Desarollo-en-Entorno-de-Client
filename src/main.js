import {obtenerEnvios} from "./api-envios.js";

const boton = document.querySelector("#cargarRuta");
const lista = document.querySelector("#listaEnvios");
const estado = document.querySelector("#estado");

boton.addEventListener("click", async() => {
    estado.textContent = "Cargando entregas...";
    try {
        const envios = await obtenerEnvios();
        mostrarEnvios (envios);
    } catch (error) {
        estado.textContent = "Error al conectar con el servidor";
        console.log(error);
    }
});

function mostrarEnvios(envios) {
  lista.innerHTML = envios.map(envio => `<li>${envio.direccion} - ${envio.cliente}</li>`).join("");
}