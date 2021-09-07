const menuTrigger = document.getElementsByClassName('menu-trigger')[0];
const floatingButton = document.getElementsByClassName('floating-items')[0];

function toggleVisible(element){
    element.classList.toggle('visible');
}

function toggleBtnClickAni(element){
    element.classList.toggle('toggleOpenAni');
    element.classList.toggle('toggleCloseAni');
}

menuTrigger.addEventListener('click', () =>{
    toggleVisible(floatingButton);
    toggleBtnClickAni(menuTrigger);
})

