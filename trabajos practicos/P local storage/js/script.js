function guardarNombre() {
    const primernombre = document.getElementById("nombre").value
    localStorage.setItem("nombre", primernombre)
}

function mostrarNombre() {
    const nombreGuardado = localStorage.getItem("nombre")
    const parrafo = document.getElementById("resultado")
    parrafo.innerText = ("Hola" + " " + nombreGuardado)
}

function visitas() {
    let visitas = localStorage.getItem("visitas");
    if (visitas === null) {
        visitas = 1;
    } else {
        visitas = parseInt(visitas) + 1;
    }
    localStorage.setItem("visitas", visitas);
    const texto = document.getElementById("visitas");
    texto.innerText = "Visitas: " + visitas;
}


