const buy = [...document.getElementsByClassName('butone')];
const counter = document.querySelector('.counter');
const body = document.querySelector('#body');
const boughtProducds = JSON.parse(localStorage.getItem('basket'));
if (localStorage.getItem("basket") === null) {
    localStorage.setItem("basket", JSON.stringify([]));
}
  else{
    counter.innerText = boughtProducds.length;
  };
  
  boughtProducds.forEach(element => {
    const tr = document.createElement('tr')
    body.appendChild(tr);
    const td1 = document.createElement('td');
    td1.innerText = element.name;
    tr.appendChild(td1);
    const td2 =document.createElement('td');
    td2.innerText = element.price;
    tr.appendChild(td2);
    const td3 =document.createElement('td');
    td3.innerText = element.id;
    tr.appendChild(td3);
  });
