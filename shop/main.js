const buy = [...document.getElementsByClassName('butone')];
const counter = document.querySelector('.counter');

if (localStorage.getItem("basket") === null) {
    localStorage.setItem("basket", JSON.stringify([]));
  }


buy.forEach(bought=> {
bought.onclick = function(e){
e.preventDefault();
const basket = JSON.parse(localStorage.getItem("basket")) ;
const procode = bought.getAttribute('procode');
const proprice = bought.getAttribute('proprice');
const proname = bought.getAttribute('proname');
const product = {
id: procode,
name: proname,
price: proprice    
}
basket.push(product);
counter.innerText = basket.length;  
localStorage.setItem("basket", JSON.stringify(basket));
}
}); 
