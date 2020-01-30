let menuItems = document.querySelectorAll('.menu-item');
let menu = document.querySelector('.menu');
let li = document.createElement('li');
li.innerHTML = 'Пятый пункт';
li.classList.add('menu-item');
menu.insertBefore(menuItems[2],menuItems[1]);
menu.appendChild(li);                                           // change the position of menu items, create the new menu item

document.body.style.background = "url('./img/apple_true.jpg')"; // replace background image

let adw = document.querySelector('.adv').style.display = 'none'; // remove ads

let text = document.querySelector('.title').innerHTML='Мы продаем только <b>подлинную</b> технику Apple'; // text

function func(){                                               //create prompt question
let q1 = document.querySelector('#prompt');
let question = prompt('What do you think about Apple?');
q1.innerHTML = question;
}
setTimeout(func, 1000);