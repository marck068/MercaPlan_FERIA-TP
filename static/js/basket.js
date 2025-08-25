// Si prefieres CERO storage, reemplaza localStorage por una variable global.
const KEY = 'mercaplan.basket';

function getBasket() { try { return JSON.parse(localStorage.getItem(KEY)) || [] } catch { return [] } }
function setBasket(arr) { localStorage.setItem(KEY, JSON.stringify(arr)); }

// En tu función addToBasket()
function addToBasket(productId) {
    // ... tu lógica para agregar el producto a la canasta ...

    // Crea el mensaje de confirmación
    const message = document.createElement('div');
    message.className = 'added-to-basket';
    message.textContent = 'Agregado a tu canasta';
    
    // Opcional: añade un ícono para hacerlo más atractivo
    // message.innerHTML = `<i class="bi bi-check-circle-fill"></i> Agregado a tu canasta`;

    document.body.appendChild(message);

    // Oculta el mensaje después de unos segundos
    setTimeout(() => {
        message.remove();
    }, 2000); // 2 segundos
}

function removeFromBasket(id, reload = false) {
    const b = new Set(getBasket()); b.delete(id); setBasket([...b]);
    if (reload) location.reload();
}

function clearBasket() {
    setBasket([]);
    location.reload();
}

// Toast muy simple sin librerías
function toast(msg) {
    const el = document.createElement('div');
    el.className = 'toast-mini';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.classList.add('show'), 10);
    setTimeout(() => {
        el.classList.remove('show');
        setTimeout(() => el.remove(), 200);
    }, 1600);
}
