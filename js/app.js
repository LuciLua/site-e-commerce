const menu = ()=>{
    var menu = document.querySelectorAll('.li-l')
    for (let i = 0; i < menu.length; i++){
        menu[i].classList.toggle('li-l-x')
    }
    var menul = document.querySelector('.ul-l')
    menul.classList.toggle('menul-x')
}