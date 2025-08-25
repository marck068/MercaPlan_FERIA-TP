const loginBtn = document.getElementById('btnLogin');
        const logoutBtn = document.getElementById('btnLogout');

        // Verificar si el usuario ya inició sesión
        const loggedIn = localStorage.getItem('loggedIn') === 'true';

        if (loggedIn) {
            loginBtn.classList.add('d-none');       // Ocultar botón de login
            logoutBtn.classList.remove('d-none');   // Mostrar botón de logout
        } else {
            loginBtn.classList.remove('d-none');
            logoutBtn.classList.add('d-none');
        }

        // Redirigir a login.html si el usuario hace clic en Login
        loginBtn.addEventListener('click', () => {
            window.location.href = 'login.html';
        });

        // Cerrar sesión
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('loggedIn');
            location.reload();
        });