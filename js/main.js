let elMenuBtn = document.getElementById('menuBtn');
let elHeaderMenu = document.getElementById('headerMenu');

elMenuBtn.addEventListener('click', function(){
  elHeaderMenu.classList.toggle('show');
})