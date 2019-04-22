class Carousel {
    constructor(carouselElement) {
        // assign this.carouselElement to the carouselElement DOM reference
        this.carouselElement = carouselElement;

        // select all image elements
        this.carouselImg = document.querySelectorAll('.carousel img');
        
        // select left arrow
        this.carouselLeft = document.querySelector('.carousel .left-button');
        
        // add a click event for the left arrow
        this.carouselLeft.addEventListener('click', () => this.changeImg(-1));
        
        // select right arrow
        this.carouselRight = document.querySelector('.carousel .right-button');

        // add a click event for the right arrow
        this.carouselRight.addEventListener('click', () => this.changeImg(1));

        // display default image
        this.carouselImg[currIdx].style.display = 'flex';
    }

    changeImg(dir) {        
        // select all images
        const images = document.querySelectorAll('.carousel img');

        // iterate through NodeList setting the display style each one to 'none'
        images.forEach(image => image.style.display = 'none');

        // change current index
        if (currIdx === 0 && dir === -1) {
            currIdx = images.length-1;
        } else if (currIdx === images.length-1 && dir === 1) {
            currIdx = 0
        } else {
            currIdx += dir;
        }

        // show newly selected image
        this.carouselImg[currIdx].style.display = 'flex';
    }
}

let carousel = document.querySelector('.carousel');
let currIdx = 0;

carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
