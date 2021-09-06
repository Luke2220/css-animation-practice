const menuTrigger = document.getElementsByClassName('menu-trigger')[0];
const floatingButton = document.getElementsByClassName('floating-items')[0];

function toggleVisible(element){
    element.classList.toggle('visible');
}

menuTrigger.addEventListener('click', () =>{
    toggleVisible(floatingButton);
    menuTrigger.classList.toggle('toggleClickAni');
})

