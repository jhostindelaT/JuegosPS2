



document.addEventListener('DOMContentLoaded', () => {
    

    fetch('pages/Menu/Menu.html')
    .then(response => response.text())
    .then(data => {
        
        document.getElementById("menu").innerHTML = data;
       
    })
    .catch(error => console.error('Error al cargar el menú:', error));
});

    