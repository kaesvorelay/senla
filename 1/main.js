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
