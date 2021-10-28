let btn = document.querySelector('.test-js-button');
try {
  btn.addEventListener('click', function(){
    let ask = prompt("Enter a number");
  
     if (isNaN(ask) || ask == "") {
      alert('This is not number. Enter number please.');
    } else {
      let res = `the mathematical operations will be presented below:
      ${++ask}, ${ask*2}, ${ask/2}, ${ask**2} - simple mathematical operations`
      console.log(res);
    }
    
  });

  // if (ask == null) {
  //   throw new SyntaxError("NULL")
  // }

} catch(e) {
  alert(e.name);
  alert(e.message);
  alert("Try click btn");
}

let p = document.querySelector('.test-js');

let title = document.querySelector('.header-tittle')

let input = document.querySelectorAll('input')

let colorfun = function () {
  p.setAttribute('style','background-color: green')
}

let colorfun1 = function () {
  p.setAttribute('style', 'background-color: red')
}


p.addEventListener('mouseover', colorfun)
p.addEventListener('mouseout', colorfun1)

title.addEventListener('click', () => {
  title.textContent = "new title header"
  p.removeEventListener('mouseout', colorfun1)
})


for (let i=0; i < input.length; i++) {
  input[i].addEventListener("focusin", () => input[i].classList.add('focus'));
}


for (let i=0; i < input.length; i++) {
  input[i].addEventListener("focusout", () => input[i].classList.remove('focus'));
}

class User {
  constructor(...arg){
      this.firstName = arg[0];
      this.lastName = arg[1];
      this.email = arg[2];
      this.tel = arg[3];
  }

  [Symbol.iterator] = function* () {
    for (let i in this) {
      yield this[i];
    }
  }

  sayHello() {
    return `${this.firstName} ${this.lastName}`
  }
}

class UserList {
  constructor(){
    this.users = [];
    this.addUser = function (user) {
      this.users.push(user);
    }
    this.getAllinfo = function() {return `${this.firstName}, ${this.lastName}, ${this.email}, ${this.tel}`};
  }
}

let btnReg = document.querySelector('#btn');
let userList = new UserList();

class AnotherUser extends User {
  constructor(...arg){
    super(...arg)
  }
  hello(){
    console.log(`Greetings ${super.sayHello()}`)
  }
}

btnReg.addEventListener('click', function(e) {
  e.preventDefault();
  let firstName = document.querySelector('#firstname').value;
  let lastName = document.querySelector('#lastname').value;
  let email = document.querySelector('#email').value;
  let tel = document.querySelector('#tel').value;
  debugger;

  let arrayUser = [firstName, lastName, email, tel]

  let user = new AnotherUser(...arrayUser);

  window.user = user;

  userList.addUser(user);
  user.hello();
  getAllUsers();

  
  let d = new Date();
  d.setTime(d.getTime() + (60 * 1000));
  let expires = d.toUTCString();
  document.cookie = `email=${email}; expires=${expires}; path=/`;
})

let i;

function getAllUsers(i=0) {
  for (; i < userList.users.length; i++) {
    console.log(userList.getAllinfo.call(userList.users[i]));
  }
};

let timer = setInterval(() => {
  let {firstName} = user;
  if (firstName) {
    console.log(`Hello, ${firstName}`);
    clearInterval(timer);
  }
}, 1000)

// timer();


let reset = document.querySelector('#reset');

reset.addEventListener('click',function(e){
  e.preventDefault();
  let d = new Date();
  d.setTime(d.getTime() - (60 * 1000));
  let expires = d.toUTCString();
  document.cookie = `email=${email}; expires=${expires}; path=/`;
})

if(localStorage.getItem('background') == 'red') {
  document.querySelector('.header').setAttribute('style','background: red');
} else if(localStorage.getItem('background') == 'yellow'){
  document.querySelector('.header').setAttribute('style','background: yellow');
} else if (localStorage.getItem('background') == 'green'){
  document.querySelector('.header').setAttribute('style','background: green');
} else if (localStorage.getItem('background') == null) {
  document.querySelector('.header').setAttribute('style','background: #fff');
}

let b_red = document.querySelector('#background-red');
let b_yellow = document.querySelector('#background-yellow');
let b_green = document.querySelector('#background-green');
let b_clear = document.querySelector('#clear-background');

b_red.addEventListener('click', (e) => {
  e.preventDefault();
  if(localStorage.getItem('bacground')!== "red") {
    localStorage.clear();
    localStorage.setItem('background', 'red');
    sessionStorage.setItem('background', 'red');
    document.querySelector('.header').setAttribute('style','background: red')
  }

});

b_yellow.addEventListener('click', (e) => {
  e.preventDefault();
  if(localStorage.getItem('bacground')!== "yellow") {
    localStorage.clear();
    localStorage.setItem('background', 'yellow');
    sessionStorage.setItem('background', 'yellow');
    document.querySelector('.header').setAttribute('style','background: yellow')
  }

});

b_green.addEventListener('click', (e) => {
  e.preventDefault();
  if(localStorage.getItem('bacground')!== "green") {
    localStorage.clear();
    localStorage.setItem('background', 'green');
    sessionStorage.setItem('background', 'geen');
    document.querySelector('.header').setAttribute('style','background: green')
  }

});

b_clear.addEventListener('click', (e) => {
  e.preventDefault();
  if(localStorage.getItem('background')) {
    localStorage.clear();
    sessionStorage.clear();
    document.querySelector('.header').setAttribute('style','background: #fff')
  }
});

// seventh iteratiom 

let wrap = document.querySelector('.wrap');
const searchBtn1 = document.querySelector('#search1');
const searchBtn2 = document.querySelector('#search2');

searchBtn1.addEventListener('click', GetUser)
searchBtn2.addEventListener('click', getFetch)

async function GetUser() {
  try{
    let getRepVal = document.querySelector('#input-rep').value;
    let url = `https://api.github.com/users/${getRepVal}/repos`;

    let response = await fetch(url);
    let us = await response.json();
    
    let allRepos = document.createElement('p');
      allRepos.textContent = `number of rep ${us.length}`;
      wrap.append(allRepos);

    let repName = document.createElement('p');
      repName.textContent = `Rep name: ${us[0].name}`
      wrap.append(repName);

    let authorName = document.createElement('p');
      authorName.textContent = `Fullname: ${us[0].full_name}`;
      wrap.append(authorName)
  } catch(err) {
    alert(`Input error: ${err.message}`)
  }
}

function abc(data){
  let allRepos = document.createElement('p');
  allRepos.textContent = `number of rep ${data.length}`;
  wrap.append(allRepos);

  let repName = document.createElement('p');
  repName.textContent = `Rep name: ${data[0].name}`
  wrap.append(repName);

  let authorName = document.createElement('p');
  authorName.textContent = `Fullname: ${data[0].full_name}`;
  wrap.append(authorName)
}
function getFetch() {
  let getRepVal = document.querySelector('#input-rep').value;
  let url = `https://api.github.com/users/${getRepVal}/repos`;

  fetch(url)
    .then(data => data.json())
    .then(data => abc(data))
    .catch(e => alert(e.message))
}

