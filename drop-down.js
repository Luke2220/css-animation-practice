const dropdownBox = document.getElementsByClassName('dropdown-box')[0];
const dropdown = document.getElementsByClassName('dropdown')[0];

function toggleVisible(element){
    element.classList.toggle('visible');
    element.classList.toggle('transition-slide');
}

dropdownBox.addEventListener('click', ( )=> {
    toggleVisible(dropdown);
})


