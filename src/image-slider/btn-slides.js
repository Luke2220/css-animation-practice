import {imageFrame} from './image-slider';
const container = document.getElementsByClassName('carousel-nav')[0];

function createSlides(num){
    for (let i = 0; i < num;i++){
        const slide = document.createElement('div');
        slide.classList.add('slide-btn');
        container.append(slide);
    }
}

