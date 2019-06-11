"use strict";

//Change body background color and save in localStorage

//check whether user has previosly changed body color
const previousColor = localStorage.getItem("selectedColor");
if (previousColor !== null) {
  document.body.style.backgroundColor = previousColor;
}

const rotate = document.querySelector(".rotate");
const changeColorBtn = document.querySelector(".change-color");
const colorInput = document.querySelector(".color-input");
const resetColor = document.querySelector(".reset-color");

rotate.onclick = function() {
  this.parentElement.classList.toggle("active");
};

resetColor.onclick = function() {
  localStorage.removeItem("selectedColor");
  document.body.style.backgroundColor = "brown";
};

changeColorBtn.onclick = function() {
  const color = colorInput.value.trim();
  const colorRegex = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3}|[0-9a-fA-F]{8})$/;

  if (colorRegex.test(color)) {
    document.body.style.backgroundColor = color;
    localStorage.setItem("selectedColor", color);
  }
};

//Online shopping demo - add to basket

// when window loads, check user basket exists in localStorage
if (localStorage.getItem("basket") === null) {
  //create basket array in localStorage
  localStorage.setItem("basket", JSON.stringify([]));
}

//when page loads, get basket from localStorage and update navbar cart count
const addToCartBtns = [...document.querySelectorAll(".add-to-cart")];
const basketCart = document.getElementById("basket");
const basket = JSON.parse(localStorage.getItem("basket"));
UpdateCart(basket);

addToCartBtns.forEach(btn => {
  btn.onclick = function(e) {
    e.preventDefault();
    const proid = this.getAttribute("data-proid");
    
    // const proname = this.getAttribute("data-proname");
    // const proprice = this.getAttribute("data-proprice");

    // const product = {
    //   id: proid,
    //   name: proname,
    //   price: proprice 
    // }

    const basketParsed = JSON.parse(localStorage.getItem("basket"));

    basketParsed.push(proid);
    UpdateCart(basketParsed);

    localStorage.setItem("basket", JSON.stringify(basketParsed));
  };
});


function UpdateCart(basket)
{
  basketCart.querySelector("span").innerText = basket.length;
}