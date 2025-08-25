const btnLogin = document.getElementById("btnLogin");
const btnLogout = document.getElementById("btnLogout");

// Detectar si hay sesión activa
auth.onAuthStateChanged(user => {
    if (user) {
        // Si hay usuario logueado
        btnLogin.classList.add("d-none");
        btnLogout.classList.remove("d-none");

        // Mostrar saludo con el email
        let userLabel = document.getElementById("userLabel");
        if (!userLabel) {
            userLabel = document.createElement("span");
            userLabel.id = "userLabel";
            userLabel.className = "navbar-text me-2";
            document.querySelector(".ms-auto").prepend(userLabel);
        }
        userLabel.textContent = "Hola, " + user.email;
    } else {
        // Si no hay sesión
        btnLogin.classList.remove("d-none");
        btnLogout.classList.add("d-none");

        // Borrar saludo si existe
        const userLabel = document.getElementById("userLabel");
        if (userLabel) {
            userLabel.remove();
        }
    }
});

// Botón de cerrar sesión
btnLogout.addEventListener("click", () => {
    auth.signOut().then(() => {
        alert("👋 Sesión cerrada");
        window.location.href = "login.html";
    });
});
