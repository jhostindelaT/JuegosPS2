// URLs de las páginas
const pages = {
    home: 'pages/cuerpo/home.html',
    games: 'pages/cuerpo/games.html',
    contact: 'pages/cuerpo/contact.html'
};

// Función para cargar la vista condicionalmente
const loadView = (page) => {
    const container = document.getElementById("elementos");
    fetch(pages[page])
        .then(response => response.text())
        .then(data => {
            container.innerHTML = data;
            setActiveButton(page);

            // Verifica que el contenido se haya cargado
            console.log(`Contenido de ${page} cargado`);

            // Cargar el script específico de la página si existe
            if (page === 'home') {
                const script = document.createElement('script');
                script.src = 'pages/cuerpo/home/home.js';
                script.onload = () => {
                    console.log('Script home.js cargado y ejecutado.');
                    // Aquí puedes añadir cualquier lógica adicional que necesites ejecutar después de cargar el script
                };
                document.body.appendChild(script);
            }
        })
        .catch(error => console.error(`Error al cargar ${page}:`, error));
};

// Función para establecer el botón activo
const setActiveButton = (page) => {
    const buttons = document.querySelectorAll('.button-navbar');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.${page.toUpperCase()} .button-navbar`).classList.add('active');
};

// Se muestra el menú
fetch('pages/Menu/Menu.html')
    .then(response => response.text())
    .then(data => {
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
        loadView('home'); 
    })
    .catch(error => console.error('Error al cargar el menú:', error));
    
    document.addEventListener('DOMContentLoaded', function() {

        })