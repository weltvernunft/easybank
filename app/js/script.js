const hamburger = document.getElementById('btnHamb');
const header = document.querySelector('.header');
const header__menu = document.querySelector('.header__menu');
const overlay = document.querySelector('.overlay');
const appearItems = document.querySelectorAll('.item');
let delay = 1;

//Toggleing Hamburger Menu
hamburger.addEventListener('click', () => {
  //header overlay animation
  header.classList.toggle('open');
  overlay.classList.toggle('fade-in');
  overlay.classList.toggle('fade-out');
  overlay.classList.remove('turned-off');

  //header menu animation
  header__menu.classList.remove('turned-off');
  header__menu.classList.toggle('fade-in');
  header__menu.classList.toggle('fade-out');
    appearItems.forEach(item=>item.classList.toggle('item-appear'))
    appearItems.forEach(item=>item.classList.toggle('has-fade'))
});
