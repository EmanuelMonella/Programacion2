let contenedorFormulario = document.getElementById("contenedor")
let contenedorTexto = document.getElementById("contenido")
contenedorTexto.style.display = "none"
function mostrar(){
    contenedorFormulario.style.display = "none"
    contenedorTexto.style.display = "block"
    let textoNombre = document.getElementById("nombre")
    let numeroEdad = document.getElementById("edad")
    let Email = document.getElementById("email")
    let nombre = document.getElementById("name")
    let age = document.getElementById("age")
    let mail = document.getElementById("mail")
    nombre.innerHTML = textoNombre.value
    age.innerHTML = numeroEdad.value
    mail.innerHTML = Email.value
}

function editar(){
    contenedorFormulario.style.display = "block"
    contenedorTexto.style.display = "none"
}