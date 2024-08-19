// URLs de las páginas
const Homehtml = 'pages/cuerpo/home.html';
const Gameshtml = 'pages/cuerpo/games.html';
const Contacthtml = 'pages/cuerpo/contact.html';

// Se muestra el menú
fetch('pages/Menu/Menu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("menu").innerHTML = data;

        // Ahora que el menú está en el DOM, podemos obtener los elementos y agregar los event listeners
        const HomePage = document.getElementById("HOME");
        const GamesPage = document.getElementById("GAMES");
        const ContactPage = document.getElementById("CONTACT");

        // Función para cargar la vista condicionalmente
        const Vista = (MostrarPagina) => {
            const DibujarDom = document.getElementById("elementos"); // Asegúrate de que el contenedor existe
            switch (MostrarPagina) {
                case 1:
                    fetch(Homehtml)
                        .then(response => response.text())
                        .then(data => {
                            DibujarDom.innerHTML = data;
                        })
                        .catch(error => console.error('Error al cargar Home:', error));
                    break;
                case 2:
                    fetch(Gameshtml)
                        .then(response => response.text())
                        .then(data => {
                            DibujarDom.innerHTML = data;
                        })
                        .catch(error => console.error('Error al cargar Games:', error));
                    break;
                case 3:
                    fetch(Contacthtml)
                        .then(response => response.text())
                        .then(data => {
                            DibujarDom.innerHTML = data;
                        })
                        .catch(error => console.error('Error al cargar Contact:', error));
                    break;
                default:
                    break;
            }
        }

        // Controladores de los botones
        HomePage.addEventListener('click', () => {
            Vista(1);
        });

        GamesPage.addEventListener('click', () => {
            Vista(2);
        });

        ContactPage.addEventListener('click', () => {
            Vista(3);
        });

        // Cargar la vista inicial
        Vista(1); // Puedes cambiar el número si quieres mostrar una vista específica al cargar la página

    }).catch(error => console.error('Error al cargar el menú:', error));
