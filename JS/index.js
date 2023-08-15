var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}

const menuLinks = document.querySelectorAll('.menu a')

function getDistanceFromTheTop(element){
  const id = element.getAttribute('href')
  return document.querySelector(id).offsetTop
}

function nativeScroll(distanceFromTheTop){
  window.scroll({
    top: distanceFromTheTop,
    behavior: "smooth",
  })
}
function scrollToSection(event){
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target)
  nativeScroll(distanceFromTheTop)
}
menuLinks.forEach((link) =>{
  link.addEventListener('click', scrollToSection)
})