function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
      let context = this, args = arguments;
      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

const images = document.querySelectorAll('.slide-in');

function checkSlide(e){
    console.log(window.scrollY)
    images.forEach(img => { 
        //half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2;
        console.log(slideInAt);
        //Bottom of the image
        const imageBottom = img.offsetTop + img.height;
        const isHalfShow = slideInAt > img.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShow && isNotScrolledPast){
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }

    });
}

//adding a debounce to not spaming events
window.addEventListener('scroll', debounce(checkSlide));