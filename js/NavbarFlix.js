(function ()
{
  let navbar = document.querySelector('#navBar');

 
  function onScroll() {
     
    navbar.classList.add('navBar-fixed');

  }
  document.addEventListener('scroll',onScroll);
})()