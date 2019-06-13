'use strict';
const buy = [...document.getElementsByClassName('butone')];
const counter = document.querySelector('.counter');
const photos = [...document.getElementsByClassName('photo')];

if (localStorage.getItem("basket") === null) {
    localStorage.setItem("basket", JSON.stringify([]));
  }
  
const bought = JSON.parse(localStorage.getItem("basket"));
counter.innerText = bought.length;
buy.forEach(bought=> {
let i = buy.indexOf(bought);
bought.onclick = function(e){
e.preventDefault();
const basket = JSON.parse(localStorage.getItem("basket")) ;
const procode = bought.getAttribute('procode');
const proprice = bought.getAttribute('proprice');
const proname = bought.getAttribute('proname');
const product = {
id: procode,
name: proname,
price: proprice + " AZN",
src: photos[i].getAttribute('src')
}
basket.push(product);
counter.innerText = basket.length;  
localStorage.setItem("basket", JSON.stringify(basket));

}
}); 
