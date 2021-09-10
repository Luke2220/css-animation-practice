const dropDown = (() => {

    const dropdownTrigger = document.getElementsByClassName('dropdown-trigger')[0];
    const dropdown = document.getElementsByClassName('dropdown')[0];

    function toggleVisible(element){
        element.classList.toggle('visible');
    }

    dropdownTrigger.addEventListener('mouseenter', ( )=> {
        toggleVisible(dropdown);
        
    })

    dropdownTrigger.addEventListener('mouseleave', ( )=> {
        toggleVisible(dropdown);
    
    })
})();

export {dropDown}

