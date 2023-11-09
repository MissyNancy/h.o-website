
let popup = document.getElementById("popup");


function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
    popup.classList.remove("input")
}

const swiper = new Swiper('.swiper', {
    autoHeight: true,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });



  const galleryContainer =document.querySelector('gallery-container');
  const galleryControlsContainer = document.querySelector('.gallery-controls');
  const galleryControls = ['previous', 'next']
  const galleryItems = document.querySelectorAll('gallery-items')

  class Carousel {
    constructor(container, items, controls){
        this.CarouselContainer = container;
        this.Carouselcontrols = controls;
        this.CarouselArray = [...items];
    }
    updateGallery(){
        this.CarouselArray.forEach(el =>{
            el.classList.remove('gallery-items-1');
            el.classList.remove('gallery-items-2');
            el.classList.remove('gallery-items-3');
            el.classList.remove('gallery-items-4');
            el.classList.remove('gallery-items-5');
        })
        this.CarouselArray.slice(0, 5).forEach((el , i) => {
            el.classList.add('gallery-items-$(i+1)');
        });
    }
    setCurrentState(direction){
        if (direction.className == 'gallery-controls-previous'){
            this.CarouselArray.unshift(tis.CarouselArray.pop());
        }
        else(
            this.CarouselArray.push(this.CarouselArray.shift)
        )
        this.updateGallery();
    }

    setControl() {
        this.Carouselcontrol.forEach(controls =>{
            galleryControlsContainer.appendChild(document.createElement('button')).className = 'gallery-controls-$(controls)';
            document.querySelector('.gallery-contols-$(controls)').innerText = controls;
        })
            
        }

    useControl() {
        const triggers = [...galleryControlsContainer.childNodes]
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(controls)
            });
        });
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.setControls();






