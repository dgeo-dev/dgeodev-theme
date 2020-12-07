
function openMenu() {
  const navbar = document.querySelector('.navbar');
  const navbarBtn = document.querySelector('.navbar-toggler');

  if(navbar.classList.contains('open')) {
    navbar.classList.remove('open');
    navbarBtn.innerHTML = '<i class="fas fa-bars"></i>';
  }
  else {
    navbar.classList.add('open');
    navbarBtn.innerHTML = '<i class="fas fa-times"></i>';
  }
}

function searchBox() {
  document.getElementById('searchbox').classList.toggle('show');
}
