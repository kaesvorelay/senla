let back = document.querySelector('#back');

back.addEventListener('click', function(e){
  e.preventDefault();
  alert(document.location.href);
  history.back();
})