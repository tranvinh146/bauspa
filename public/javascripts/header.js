function navbarDisplay(screen) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
   document.body.style.backgroundColor = "pink";
  }
}

var screen = window.matchMedia("(max-width: 700px)")
myFunction(screen) // Call listener function at run time
screen.addListener(myFunction)