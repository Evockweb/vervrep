// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

function hamburgerToggle(toggledbutton, toggledMenu){
    var getButton = document.querySelector(toggledbutton);
    var getMenu = document.querySelector(toggledMenu);

    getButton.addEventListener("click", toogleHam, false);
    
    getMenu.querySelectorAll('a').forEach(function(element){
        element.addEventListener("click", toogleHam, false);
    });
    
    function toogleHam(){
        getButton.classList.toggle('active');
        getMenu.classList.toggle('active');
    }
}
document.addEventListener("DOMContentLoaded", () => {
    hamburgerToggle('.hamburger', '.header__menu');
});
