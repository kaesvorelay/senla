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
  constructor(firstName, lastName, email, tel){
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.tel = tel;
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

btnReg.addEventListener('click', function(e) {
  e.preventDefault();
  let firstName = document.querySelector('#firstname').value;
  let lastName = document.querySelector('#lastname').value;
  let email = document.querySelector('#email').value;
  let tel = document.querySelector('#tel').value;

  let user = new User(firstName, lastName, email, tel);

  userList.addUser(user);

  getAllUsers();
})

function getAllUsers() {
  for (let i = 0; i < userList.users.length; i++) {
    console.log(userList.getAllinfo.call(userList.users[i]));
  }
};

