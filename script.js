function toggleNavbar() {
    var navbar = document.getElementById("myNavbar");
    if (navbar.className === "navbar") {
      navbar.className += " responsive";
    } else {
      navbar.className = "navbar";
    }
  }
  
  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }
  
  