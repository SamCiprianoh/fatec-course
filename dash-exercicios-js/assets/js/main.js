

const elementsDoc = document.querySelectorAll('.nav__dropdown');
const elementsDrop = document.getElementsByClassName('nav__dropdown-content')

elementsDoc.forEach(item =>{
   item.addEventListener('click', function() {
      let j
      for(let i = 0; i <= 5; i++){if(elementsDoc[i] === item){j = i}}
      elementsDrop[j].classList.toggle('nav__dropdown-hide')
  });
});







