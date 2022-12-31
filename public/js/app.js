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
  
  function paraCarrinho(){ // bug
    this.classList.toggle('carrinhoX')
    let itemCarrinho = document.querySelectorAll('.carrinhoX')
    if(itemCarrinho.length > 0){
      itemCarrinho.forEach(e => e.textContent='No carrinho')
      qt++
    } else {
      this.textContent='adicionar no carrinho'
      qt--
    }

    
    var carrinhoQt = document.getElementById('carrinho')
    carrinhoQt.setAttribute('data-before', qt)
  }
  
  let itens = document.querySelectorAll('.carrinhoNow')
  
  var qt = 0
  itens.forEach(item => 
  item.addEventListener("click", paraCarrinho))