// URLs de las páginas
const pages = {
    home: 'pages/cuerpo/home.html',
    games: 'pages/cuerpo/games.html',
    contact: 'pages/cuerpo/contact.html'
};

// Función para cargar la vista condicionalmente
const loadView = (page) => {
    const container = document.getElementById("elementos"); // Asegúrate de que el contenedor existe
    fetch(pages[page])
        .then(response => response.text())
        .then(data => {
            container.innerHTML = data;
        })
        .catch(error => console.error(`Error al cargar ${page}:`, error));
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
