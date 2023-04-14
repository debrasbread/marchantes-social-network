export function Login() {
    // Creación de un elemento div y asignación a la variable container
    const container = document.createElement("div");
  
    // Contenedor principal
    const contenedorGeneral = document.createElement("div");
    contenedorGeneral.id = "contenedor-General";
    contenedorGeneral.classList.add("contenedorGeneral");
    container.appendChild(contenedorGeneral);
  
    // Logo
    const logo = document.createElement("img");
    logo.classList.add("logoMarchantes");
    logo.src = "../imagenes/logo-marchantes.png";
    contenedorGeneral.appendChild(logo);
  
    // Texto "Iniciar sesión"
    const iniciarSesion = document.createElement("h1");
    iniciarSesion.classList.add("iniciarSesion");
    iniciarSesion.textContent = "Iniciar sesión";
    contenedorGeneral.appendChild(iniciarSesion);
  
    // Texto "Email o teléfono + input"
    const emailTelLabel = document.createElement("label");
    emailTelLabel.setAttribute("for", "emailTelInput");
    emailTelLabel.textContent = "Email o teléfono";
    contenedorGeneral.appendChild(emailTelLabel);
  
    const emailTelInput = document.createElement("input");
    emailTelInput.setAttribute("id", "emailTelInput");
    emailTelInput.setAttribute("type", "text");
    contenedorGeneral.appendChild(emailTelInput);
  
    // Contraseña
    const contraseñaLabel = document.createElement("label");
    contraseñaLabel.textContent = "Contraseña:";
    contraseñaLabel.setAttribute("for", "contraseña");
    contenedorGeneral.appendChild(contraseñaLabel);
    
    const contraseñaInput = document.createElement("input");
    contraseñaInput.setAttribute("type", "password");
    contraseñaInput.setAttribute("id", "contraseña");
    contraseñaInput.setAttribute("name", "contraseña");
    contenedorGeneral.appendChild(contraseñaInput);
    
  
    // Botón "Continuar"
    const continuarBtnLogin = document.createElement("button");
    continuarBtnLogin.classList.add("continuarBtnLogin");
    continuarBtnLogin.textContent = "Continuar";
    contenedorGeneral.appendChild(continuarBtnLogin);
  
    // Botón "Continuar con Google"
    const GoogleBtnLogin = document.createElement("button");
    GoogleBtnLogin.classList.add("GoogleBtnLogin");
    GoogleBtnLogin.textContent = "Continuar con Google";
    contenedorGeneral.appendChild(GoogleBtnLogin);
  
    // Logo de Google
    const logoGoogle = document.createElement("img");
    logoGoogle.src = "../imagenes/logo-google.png";
    GoogleBtnLogin.appendChild(logoGoogle);
  
    // Retorna el elemento div (con sus elementos hijos dentro)
    return container;
  }
  