window.addEventListener('load', function()
{
  progressBar = document.getElementById("myProgressBar");

  progressBar.style.width = "100%";


  const nav = document.querySelector('nav');
  const footer = document.querySelector('footer');
  
  setTimeout(function()
  {
    nav.classList.add('show');
  }, 0);
  
  setTimeout(function()
  {
    footer.classList.add('show');
  }, 0);
});