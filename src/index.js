import './styles.css';
import services from './components/services';

// let ammount = 1;

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button.closest("[data-carousel]").querySelector('[data-slides]')

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if(newIndex < 0) newIndex = slides.children.length - 1 
    if(newIndex >= slides.children.length) newIndex = 0 

    slides.children[newIndex].dataset.active = true 
    delete activeSlide.dataset.active
  })
})


const message = e => {
  e.preventDefault();
  Swal.fire({
    icon: 'success',
    title: 'Added to your cart!',
    showConfirmButton: false,
    timer: 1500,
  });
}

services.refs.cardAbilitiesBTN.addEventListener('click', message)
// services.refs.favs.addEventListener('click', showFavs)
