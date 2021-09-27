const selectedImage = document.getElementsByClassName('selected-img')[0];
const leftImage = document.getElementsByClassName('prev-img')[0];
const rightImage = document.getElementsByClassName('next-img')[0];
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
    setImage(leftImage, shift('left'));
    setImage(rightImage, shift('right'));


    function setImage(img,index){
        img.setAttribute('src', imgs[index]);
    }

    function highlightSlideBtn () {
        const lastBtn = slideBtns.item(lastIndex);
        const btn = slideBtns.item(index);
          
        if (lastBtn.classList.contains('slide-btn-select')){
            lastBtn.classList.toggle('slide-btn-select');
        }
        btn.classList.toggle('slide-btn-select');   
    }


    function activateImageAnimation(direction){

        const duration = 400;
        if (direction == 'right')
        {
            leftImage.classList.add('pictureCloseToLeft');
            setTimeout(() => {
                leftImage.classList.remove('pictureCloseToLeft');
            },duration);

            selectedImage.classList.add('pictureOpenFromRight');
            setTimeout(() => {
                selectedImage.classList.remove('pictureOpenFromRight');
            },duration);
        }
        else
        {
            rightImage.classList.add('pictureCloseToRight');
            setTimeout(() => {
                rightImage.classList.remove('pictureCloseToRight');
            },duration);

            selectedImage.classList.add('pictureOpenFromLeft');
            setTimeout(() => {
                selectedImage.classList.remove('pictureOpenFromLeft');
            },duration);
        }
    }


    function changeImage(direction, num=null){
        lastIndex = index;
        if (num != null){
            index = num;
            if (lastIndex < num){
                direction = 'right';
            } else {
                direction = 'left';
            }
        } else{
            index = shift(direction);
        } 

        highlightSlideBtn();
        setImage(selectedImage,index);
        setImage(leftImage, shift('left'));
        setImage(rightImage, shift('right'));
        activateImageAnimation(direction);
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
