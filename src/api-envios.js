export async function obtenerEnvios() {
    const respuesta = await fetch("/api/envios.json");
    if (!respuesta.ok){
        throw new Error (`Fallo en la petición (${respuesta.status})`);
    }
    return respuesta.json();
}

