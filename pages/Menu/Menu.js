// URLs de las páginas
const pages = {
    home: 'pages/cuerpo/home.html',
    games: 'pages/cuerpo/games.html',
    contact: 'pages/cuerpo/contact.html'
};

// Función para cargar la vista condicionalmente
const loadView = async (page) => {
    const container = document.getElementById("elementos");
    try {
        const response = await fetch(pages[page]);
        const data = await response.text();
        container.innerHTML = data;
        setActiveButton(page);

        // Verifica que el contenido se haya cargado
        console.log(`Contenido de ${page} cargado`);

        // Cargar el script específico de la página si existe
        if (page === 'home') {
            const script = document.createElement('script');
            script.src = 'pages/cuerpo/home/home.js';
            script.async = true; // Permite que el script se cargue de manera asíncrona
            document.body.appendChild(script);
        }
        
    } catch (error) {
        console.error(`Error al cargar ${page}:`, error);
    }
};

// Función para establecer el botón activo
const setActiveButton = async (page) => {
    const buttons = document.querySelectorAll('.button-navbar');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.${page.toUpperCase()} .button-navbar`).classList.add('active');
};

// Se muestra el menú
const loadMenu = async () => {
    try {
        const response = await fetch('pages/Menu/Menu.html');
        const data = await response.text();
        document.getElementById("menu").innerHTML = data;

        // Ahora que el menú está en el DOM, podemos obtener los elementos y agregar los event listeners
        const menuItems = {
            HOME: 'home',
            GAMES: 'games',
            CONTACT: 'contact'
        };

        Object.keys(menuItems).forEach(id => {
            document.getElementById(id).addEventListener('click', () => {
                loadView(menuItems[id]);
            });
        });

        // Cargar la vista inicial
        await loadView('home');
    } catch (error) {
        console.error('Error al cargar el menú:', error);
    }
};

document.addEventListener('DOMContentLoaded', loadMenu);
