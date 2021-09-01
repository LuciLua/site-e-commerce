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
  
  function test(event){
    let qt = 0
    qt = qt + (Math.random() * 10).toFixed()
    // qt += ++qt
    this.style.border='solid 1px #ff0000'
    var carrinhoQt = document.getElementById('carrinho')
    carrinhoQt.setAttribute('data-before', qt)
    // carrinhoQt.before.content= qt
  }
  
  let itens = document.querySelectorAll('.carrinho')
  itens.forEach(item => 
  item.addEventListener("click", test))
