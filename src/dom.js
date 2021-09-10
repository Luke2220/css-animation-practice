import {dropdown} from './drop-down/drop-down';
import {mobileMenu} from './mobile-menu/mobile-menu';
import {imageFrame} from './image-slider/image-slider';


const leftBtn = document.getElementsByClassName('left')[0];
const rightBtn = document.getElementsByClassName('right')[0];

leftBtn.addEventListener('click', () => {
   
    imageFrame.changeImage('left');
});

rightBtn.addEventListener('click', () => {
    imageFrame.changeImage('right');
});
