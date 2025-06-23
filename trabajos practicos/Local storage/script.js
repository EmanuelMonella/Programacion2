// EJ 1
function guardarNombre() {
  const nombre = document.getElementById("nombre").value;
  localStorage.setItem("nombre", nombre);
  document.getElementById("saludo").innerText = "Hola, " + nombre;
}
document.getElementById("saludo").innerText = "Hola, " + (localStorage.getItem("nombre") || "");

// EJ 2
let visitas = localStorage.getItem("visitas") || 0;
visitas++;
localStorage.setItem("visitas", visitas);
document.getElementById("contador").innerText = "Visitas: " + visitas;

// EJ 3
const colorGuardado = localStorage.getItem("colorFondo");
if (colorGuardado) document.body.style.backgroundColor = colorGuardado;
function guardarColor() {
  const color = document.getElementById("colorPicker").value;
  localStorage.setItem("colorFondo", color);
  document.body.style.backgroundColor = color;
}

// EJ 4
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
function mostrarTareas() {
  document.getElementById("lista").innerHTML = "";
  tareas.forEach(t => {
    document.getElementById("lista").innerHTML += `<li>${t}</li>`;
  });
}
function agregarTarea() {
  const tarea = document.getElementById("tarea").value;
  tareas.push(tarea);
  localStorage.setItem("tareas", JSON.stringify(tareas));
  mostrarTareas();
}
mostrarTareas();

// EJ 5
let segundos = Number(sessionStorage.getItem("tiempo")) || 0;
setInterval(() => {
  segundos++;
  sessionStorage.setItem("tiempo", segundos);
  document.getElementById("tiempo").innerText = segundos;
}, 1000);

// EJ 6
document.getElementById("nota").value = localStorage.getItem("nota") || "";
document.getElementById("mostrarNota").innerText = localStorage.getItem("nota") || "";
function guardarNota() {
  const nota = document.getElementById("nota").value;
  localStorage.setItem("nota", nota);
  document.getElementById("mostrarNota").innerText = nota;
}

// EJ 7
const check = document.getElementById("interruptor");
check.checked = localStorage.getItem("estado") === "true";
check.addEventListener("change", () => {
  localStorage.setItem("estado", check.checked);
});

// EJ 8
document.getElementById("bienvenida").innerText = localStorage.getItem("mensajeBienvenida") || "";
function guardarMensaje() {
  const mensaje = document.getElementById("mensaje").value;
  localStorage.setItem("mensajeBienvenida", mensaje);
  document.getElementById("bienvenida").innerText = mensaje;
}

// EJ 9
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

// EJ 10
const ahora = new Date().toLocaleString();
const ultima = localStorage.getItem("ultimaVisita");
document.getElementById("ultimaVisita").innerText = ultima ? `Última visita: ${ultima}` : "¡Bienvenido!";
localStorage.setItem("ultimaVisita", ahora);

// EJ 11
const barra = document.getElementById("progreso");
barra.value = localStorage.getItem("progreso") || 0;
document.getElementById("mostrarProgreso").innerText = barra.value + "%";
barra.oninput = function () {
  localStorage.setItem("progreso", this.value);
  document.getElementById("mostrarProgreso").innerText = this.value + "%";
}

// EJ 12
document.getElementById("nombreForm").value = localStorage.getItem("nombreForm") || "";
document.getElementById("emailForm").value = localStorage.getItem("emailForm") || "";
function guardarFormulario() {
  localStorage.setItem("nombreForm", document.getElementById("nombreForm").value);
  localStorage.setItem("emailForm", document.getElementById("emailForm").value);
}

// EJ 13
let puntaje = Number(localStorage.getItem("puntaje")) || 0;
document.getElementById("puntaje").innerText = puntaje;
function sumarPuntaje() {
  puntaje++;
  localStorage.setItem("puntaje", puntaje);
  document.getElementById("puntaje").innerText = puntaje;
}

// EJ 14
let historial = JSON.parse(localStorage.getItem("historial")) || [];
historial.push(location.href);
localStorage.setItem("historial", JSON.stringify(historial));
historial.forEach(pagina => {
  document.getElementById("historial").innerHTML += `<li>${pagina}</li>`;
});

// EJ 15
const temaGuardado = localStorage.getItem("tema") || "claro";
document.body.classList.add(temaGuardado);
function cambiarTema() {
  let actual = document.body.classList.contains("claro") ? "oscuro" : "claro";
  document.body.classList.remove("claro", "oscuro");
  document.body.classList.add(actual);
  localStorage.setItem("tema", actual);
}
