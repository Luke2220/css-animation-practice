const selectedImage = document.getElementsByClassName('selected-img')[0];
const lastImage = document.getElementsByClassName('prev-img')[0];
const nextImage = document.getElementsByClassName('next-img')[0];
const slideBtns = document.getElementsByClassName('slide-btn');


for (let i = 0;i < slideBtns.length;i++){
    slideBtns.item(i).addEventListener('click', () => {
        imageFrame.changeImage('',i);
    });
}


const imageFrame = (() => {
    const imgs = ['/home/luke/Desktop/css-animation-images/img1.jpg',
    '/home/luke/Desktop/css-animation-images/img2.jpg',
    '/home/luke/Desktop/css-animation-images/img3.jpg',
    '/home/luke/Desktop/css-animation-images/img4.jpeg'];

    let index = 0;
    let lastIndex = null;
    setImage(selectedImage,index);
    setImage(lastImage, shift('left'));
    setImage(nextImage, shift('right'));

    function setImage(img,index){
        img.setAttribute('src', imgs[index]);
    }

    function highlight () {
        const lastBtn = slideBtns.item(lastIndex);
        const btn = slideBtns.item(index);
     
        if (lastBtn.classList.contains('slide-btn-select')){
            lastBtn.classList.toggle('slide-btn-select');
        }
        btn.classList.toggle('slide-btn-select');    
    }

    function changeImage(direction, num=null){
        lastIndex = index;
        if (num != null){
            index = num;
        } else{
            index = shift(direction);
        } 

        highlight();
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


    const getIndex = () => {index}

    return {changeImage, getIndex}
})();

export {imageFrame}
