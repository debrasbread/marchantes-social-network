import { signInWithEmailAndPassword } from "firebase/auth";
import { onNavigate } from "../lib/router";
import { auth } from "/lib/firebase/firebase.js"
import {signInWithEmail } from '../lib/auth'
//como importar este archivo?
// import { firebaseConfig } from "/lib/firebase/firebase.js"

export function createHome() {
  // Creación de un elemento div y asignación a la variable container

  const contenedorGeneral = document.createElement("section");
  contenedorGeneral.classList.add("contenedorGeneral");


  // Background
  // const backgroundImg = document.createElement("img");
  // backgroundImg.classList.add("backgroundImg");
  // backgroundImg.src = "../imagenes/background-mercado.jpg";
  // contenedorGeneral.appendChild(backgroundImg);

  // Contenedor principal
  // const contenedorGeneral = document.createElement("section");
  contenedorGeneral.id = "contenedor-General";
  contenedorGeneral.classList.add("contenedorGeneral");
  // contenedorGeneral.appendChild(contenedorGeneral);

  // Logo
  const logo = document.createElement("img");
  logo.classList.add("logoMarchantes");
  logo.src = "../imagenes/logo-marchantes.png";
  contenedorGeneral.appendChild(logo);


  contenedorGeneral.appendChild(logo);

  //formulario de login
  // const loginForm = document.createElement("form")
  // loginForm.classList = "loginForm"
  // container.appendChild(loginForm)


  //input del Email
  //como hacer un contenedor paara estos 2 input juntos?
  const mailInput = document.createElement("input");
  mailInput.classList = "mailInput";
  contenedorGeneral.appendChild(mailInput);
  mailInput.placeholder = "Email";
  mailInput.type = "email";
  mailInput.id = "emailUsuario";

  //label para nombrar el input en el home 
  const mailLabel = document.createElement("label");
  mailLabel.textContent = "Ingresa tu email";
  mailLabel.classList =  "mailLabel";
  contenedorGeneral.appendChild(mailLabel);

  //input de la clave
  const claveInput = document.createElement("input");
  claveInput.classList = "claveInput";
  contenedorGeneral.appendChild(claveInput);
  claveInput.placeholder = "Contraseña";
  claveInput.type = "password";
  claveInput.id = "passwordUsuario";

  // Texto e hipervínculo "Regístrate"
  const botonRegistro = document.createElement("section");
  botonRegistro.classList.add("botonRegistro");
  botonRegistro.innerHTML = '¿No tienes una cuenta? <a href="#">Regístrate</a>.';
  contenedorGeneral.appendChild(botonRegistro);


  // Creación de un elemento button y asignación a la variable button
  const iniciarSesionBtn = document.createElement("button");
  //quitandole el add, me funciono
  iniciarSesionBtn.classList = "iniciarSesionBtn";
  contenedorGeneral.appendChild(iniciarSesionBtn);
  // Asignación del texto "Iniciar sesión" al elemento button
  iniciarSesionBtn.textContent = "Iniciar sesión";

  //obtener el valor mediante el event listener
  iniciarSesionBtn.addEventListener("click", () => {
    const email = document.getElementById("emailUsuario").value;
    const password = document.getElementById("passwordUsuario").value;

    signInWithEmail(email, password).then((rep)=>{
      onNavigate('/muro')
    }).catch((err)=>{
      alert('Verifica los datos, fue imposible registrarte')
    })
  })

//podria retornar en el orden, pero no me funciona
// section.append(mailInput, claveInput, iniciarSesionBtn, botonRegistro);
  // Retorna el contenedor (con sus elementos hijos dentro)
  // return section;

return contenedorGeneral;

 
}
