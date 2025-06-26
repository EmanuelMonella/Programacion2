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

const colorGuardado = localStorage.getItem("colorFondo");
if (colorGuardado) document.body.style.backgroundColor = colorGuardado;
function guardarColor() {
    const color = document.getElementById("color_fondo").value;
    localStorage.setItem("colorFondo", color);
    document.body.style.backgroundColor = color;
}

function agregarTarea() {
    const input = document.getElementById("tareaInput");

    if (input.value !== "") {
        let tareasTexto = localStorage.getItem("tareas");
        let tareas = [];

        if (tareasTexto) {
            tareas = tareasTexto.split(",");
        }

        tareas.push(input.value);
        localStorage.setItem("tareas", tareas.join(","));
        input.value = "";
        mostrarTareas();
    }
}

function mostrarTareas() {
    const lista = document.getElementById("listaTareas");
    lista.innerHTML = "";

    let tareasTexto = localStorage.getItem("tareas");

    if (tareasTexto) {
        let tareas = tareasTexto.split(",");

        for (let i = 0; i < tareas.length; i++) {
            const li = document.createElement("li");
            li.textContent = tareas[i];
            lista.appendChild(li);
        }
    }
}

let segundos = Number(sessionStorage.getItem("tiempo")) || 0;
setInterval(() => {
    segundos++;
    sessionStorage.setItem("tiempo", segundos);
    document.getElementById("tiempo").innerText = segundos;
}, 1000);

document.getElementById("nota").value = localStorage.getItem("nota") || "";
document.getElementById("mostrarNota").innerText = localStorage.getItem("nota") || "";
function guardarNota() {
    const nota = document.getElementById("nota").value;
    localStorage.setItem("nota", nota);
    document.getElementById("mostrarNota").innerText = nota;
}

const check = document.getElementById("interruptor");
check.checked = localStorage.getItem("estado") === "true";
check.addEventListener("change", () => {
    localStorage.setItem("estado", check.checked);
});

document.getElementById("bienvenida").innerText = localStorage.getItem("mensajeBienvenida") || "";
function guardarMensaje() {
    const mensaje = document.getElementById("mensaje").value;
    localStorage.setItem("mensajeBienvenida", mensaje);
    document.getElementById("bienvenida").innerText = mensaje;
}

let compras = JSON.parse(localStorage.getItem("compras")) || [];
function mostrarCompras() {
    document.getElementById("listaCompras").innerHTML = "";
    compras.forEach(c => {
        document.getElementById("listaCompras").innerHTML += `<li>${c}</li>`;
    });
}
function agregarCompra() {
    const item = document.getElementById("compra").value;
    compras.push(item);
    localStorage.setItem("compras", JSON.stringify(compras));
    mostrarCompras();
}
mostrarCompras();

const ahora = new Date().toLocaleString();
const ultima = localStorage.getItem("ultimaVisita");
if (ultima) {
    document.getElementById("ultimaVisita").innerText = "Última visita: " + ultima;
} else {
    document.getElementById("ultimaVisita").innerText = "¡Bienvenido!";
}
localStorage.setItem("ultimaVisita", ahora);

var barra = document.getElementById("progreso");
var mostrar = document.getElementById("mostrarProgreso");
var valorGuardado = localStorage.getItem("progreso");
if (valorGuardado) {
    barra.value = valorGuardado;
} else {
    barra.value = 0;
}
mostrar.innerText = barra.value;
function guardarProgreso() {
    var valor = barra.value;
    localStorage.setItem("progreso", valor);
    mostrar.innerText = valor;
}

document.getElementById("nombreForm").value = localStorage.getItem("nombreForm") || "";
document.getElementById("emailForm").value = localStorage.getItem("emailForm") || "";
function guardarFormulario() {
    localStorage.setItem("nombreForm", document.getElementById("nombreForm").value);
    localStorage.setItem("emailForm", document.getElementById("emailForm").value);
}

let puntaje = Number(localStorage.getItem("puntaje")) || 0;
document.getElementById("puntaje").innerText = puntaje;
function sumarPuntaje() {
    puntaje++;
    localStorage.setItem("puntaje", puntaje);
    document.getElementById("puntaje").innerText = puntaje;
}

let historial = JSON.parse(localStorage.getItem("historial")) || [];
historial.push(location.href);
localStorage.setItem("historial", JSON.stringify(historial));
historial.forEach(pagina => {
    document.getElementById("historial").innerHTML += `<li>${pagina}</li>`;
});


const temaGuardado = localStorage.getItem("tema");
if (temaGuardado === "oscuro") {
    document.body.classList.add("oscuro");
} else {
    document.body.classList.add("claro");
}

function cambiarTema() {
    if (document.body.classList.contains("claro")) {
        document.body.classList.remove("claro");
        document.body.classList.add("oscuro");
        localStorage.setItem("tema", "oscuro");
    } else {
        document.body.classList.remove("oscuro");
        document.body.classList.add("claro");
        localStorage.setItem("tema", "claro");
    }
}