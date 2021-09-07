const selectedImage = document.getElementsByClassName('selected-img')[0];
const leftBtn = document.getElementsByClassName('left')[0];
const rightBtn = document.getElementsByClassName('right')[0];

leftBtn.addEventListener('click', () => {
    imageFrame.shift('left');
})

rightBtn.addEventListener('click', () => {
    imageFrame.shift('right');
})

const imageFrame = (() => {
    const imgs = ['/home/luke/Desktop/css-animation-images/img1.jpg',
    '/home/luke/Desktop/css-animation-images/img2.jpg',
    '/home/luke/Desktop/css-animation-images/img3.jpg',
    '/home/luke/Desktop/css-animation-images/img4.jpeg'];

    let index = 0;
    setImage();

    function setImage(){
        selectedImage.setAttribute('src', imgs[index]);
    }

    function shift(direction){
        if (direction == 'right'){
            if (index >= imgs.length-1){
                index = 0;
            } else {
                index += 1;
            }        
        } else {
            if (index <= 0){
                index = imgs.length - 1;
            } else {
                index -= 1;
            }
        }
        setImage();
    }
    return {shift}
})();
