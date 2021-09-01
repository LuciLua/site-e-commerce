const menu = ()=>{
    var menu = document.querySelectorAll('.li-l')
    for (let i = 0; i < menu.length; i++){
        menu[i].classList.toggle('li-l-x')
    }
    var menul = document.querySelector('.ul-l')
    menul.classList.toggle('ul-l-x')
}

function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }