// optimalizace pro mobily
let menu = document.querySelector('#menu');
document.querySelector('.minimenu').onclick = function(){
this.classList.toggle('active');
menu.classList.toggle('active');
}
