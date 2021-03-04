//============== SHOW DROPDOW MENU ================
var menuDoc = document.getElementsByClassName('nav__icon-dropdown')[0]
var navDropdown = document.querySelector('.nav__dropdown-hide')
var iconRotate = document.querySelector('.nav__icon-rotate')

menuDoc.addEventListener('click', function(){
    navDropdown.classList.toggle('nav__dropdown-hide')
    iconRotate.classList.toggle('nav__icon-rotate')
})


//============== SHOW MENU ================
var menuToggle = document.querySelector('.header__toggle')
var menuNav = document.querySelector('.nav')
var main = document.querySelector('.main')
var mainCenter = document.querySelector('.main__container')

menuToggle.addEventListener('click', function(){
   menuNav.classList.toggle('nav__show')
   main.classList.toggle('main__move')
   mainCenter.classList.toggle('main__container-move')
})
