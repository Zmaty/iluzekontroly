// optimalizace pro mobily
let menu = document.querySelector('#menu');
let miniMenu = document.querySelector('.minimenu');

miniMenu.onclick = function () {
this.classList.toggle('active');
menu.classList.toggle('active');
};

// zavření po kliknutí na položku menu
document.querySelectorAll('#menu a').forEach(link => {
    link.onclick = () => {
        miniMenu.classList.remove('active');
        menu.classList.remove('active');
    };
});
