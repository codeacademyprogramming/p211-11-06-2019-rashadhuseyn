'use strict';
const buy = [...document.getElementsByClassName('butone')];
const counter = document.querySelector('.counter');
const body = document.querySelector('#body');
const boughtProducds = JSON.parse(localStorage.getItem('basket'));
const deleting = document.querySelector('.delete');

if (localStorage.getItem("basket") === null) {
  localStorage.setItem("basket", JSON.stringify([]));
}
else {
  counter.innerText = boughtProducds.length;
};
let q = 0;
boughtProducds.forEach(element => {
  const tr = document.createElement('tr')
  tr.style.cursor = 'pointer';
  body.appendChild(tr);
  const th = document.createElement('th');
  th.innerText = `${q + 1}`
  q++
  tr.appendChild(th);
  const td1 = document.createElement('td');
  td1.innerText = element.name;
  tr.appendChild(td1);
  const td2 = document.createElement('td');
  td2.innerText = element.price;
  tr.appendChild(td2);
  const td3 = document.createElement('td');
  td3.innerText = element.id;
  tr.appendChild(td3);
  const img = document.createElement('img');
  img.classList.add('small');
  img.src = element.src;
  tr.appendChild(img);
  tr.addEventListener('click', function () {
    tr.classList.toggle('selected');
  })
});

deleting.addEventListener('click', () => {
  document.querySelectorAll('.selected').forEach((item) => {
    item.remove();
    newLocalStorage();
  });
});

function newLocalStorage() {
  localStorage.setItem("basket", JSON.stringify([]));
  const basket = JSON.parse(localStorage.getItem('basket'));
  const tr = [...document.getElementsByTagName('tr')];
  tr.forEach(function (item) {
    const proname = item.firstElementChild.nextSibling.innerText;
    const proprice = item.firstElementChild.nextSibling.nextSibling.innerText;
    const procode = item.lastElementChild.previousSibling.innerText;
    const src = item.lastElementChild.src;
    const product = {
      id: procode,
      name: proname,
      price: proprice,
      src: src
    }
    basket.push(product);
    const newbasket = basket.slice(1);
    localStorage.setItem("basket", JSON.stringify(newbasket));
  })

}

