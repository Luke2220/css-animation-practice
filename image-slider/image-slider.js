const selectedImage = document.getElementsByClassName('selected-img')[0];
const lastImage = document.getElementsByClassName('prev-img')[0];
const nextImage = document.getElementsByClassName('next-img')[0];

const leftBtn = document.getElementsByClassName('left')[0];
const rightBtn = document.getElementsByClassName('right')[0];

leftBtn.addEventListener('click', () => {
    imageFrame.changeImage('left');
})

rightBtn.addEventListener('click', () => {
    imageFrame.changeImage('right');
})

const imageFrame = (() => {
    const imgs = ['/home/luke/Desktop/css-animation-images/img1.jpg',
    '/home/luke/Desktop/css-animation-images/img2.jpg',
    '/home/luke/Desktop/css-animation-images/img3.jpg',
    '/home/luke/Desktop/css-animation-images/img4.jpeg'];

    let index = 0;
    setImage(selectedImage,index);
    setImage(lastImage, shift('left'));
    setImage(nextImage, shift('right'));

    function setImage(img,index){
        img.setAttribute('src', imgs[index]);
    }

    function changeImage(direction){
        index = shift(direction);
        setImage(selectedImage,index);
        setImage(lastImage, shift('left'));
        setImage(nextImage, shift('right'));
    }

    function shift(direction){
        let counter = index;
        if (direction == 'right'){
            if (counter >= imgs.length-1){
                counter = 0;
            } else {
                counter += 1;
            }        
        } else {
            if (counter <= 0){
                counter = imgs.length - 1;
            } else {
                counter -= 1;
            }
        }
        return counter;
    }
    return {changeImage}
})();
