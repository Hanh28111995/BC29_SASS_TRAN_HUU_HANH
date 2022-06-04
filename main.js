var x0 = 0;
var x1 = 0;
var x2 = 0;
window.onload = function () {
  var width_default = window.innerWidth;
  x0 = width_default;
  x1 = x0;
};
window.addEventListener('resize', function () {
  var x = document.getElementById("main").style.transform;
  var y = document.getElementById("openNav").style.display;
  var z = document.getElementById("closeNav").style.display;
  var t = document.getElementById("mySidebar").style.transform;
  x2 = window.innerWidth;
  console.log(x1, x2)
  if (x1 < x2) {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("mySidebar").style.transition = "none";
    if ((x2 > 1200) && (t == "translateX(-320px)")) {
      document.getElementById("mySidebar").style.transform = "translateX(0)";
    }
    if ((x2 > 1200) && (x == "translateX(320px)")) {
      document.getElementById("main").style.transform = "translateX(0)";
    }
  }
  if (x1 > x2) {
    if (x2 <= 1200) {
      console.log(x1, x2);
      document.getElementById("mySidebar").style.display = "none";
      document.getElementById("mySidebar").style.transition = "none";
      if (t == "translateX(0px)") {
        console.log(x1, x2);
        document.getElementById("mySidebar").style.transform = "translateX(-320px)";
        if (z == "inline-block") {
          document.getElementById("openNav").style.display = "inline-block";
          document.getElementById("closeNav").style.display = 'none ';
          document.getElementById("icon_h").style.display = "inline-block";
        }
      }
    }
  }
  document.getElementById("mySidebar").style.display = "block";
  x1 = x2;
});



function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("main").style.transition = "transform 1s cubic-bezier(.230,1,.320,1) ";
  document.getElementById("mySidebar").style.transition = "transform 2s cubic-bezier(.230,1,.320,1) ";
  document.getElementById("main").style.transform = "translateX(320px)";
  document.getElementById("mySidebar").style.transform = "translateX(0px)";
  document.getElementById("openNav").style.display = 'none ';
  document.getElementById("closeNav").style.display = 'inline-block';
  document.getElementById("icon_h").style.display = 'none ';

}
function w3_close() {
  document.getElementById("main").style.transition = "transform 2s cubic-bezier(.230,1,.320,1) ";
  document.getElementById("mySidebar").style.transition = "transform 1s cubic-bezier(.230,1,.320,1) ";
  document.getElementById("main").style.transform = "translateX(0)";
  document.getElementById("openNav").style.display = "inline-block";
  document.getElementById("closeNav").style.display = 'none ';
  document.getElementById("icon_h").style.display = "inline-block";
  document.getElementById("mySidebar").style.transform = "translateX(-320px)";
  document.getElementById("mySidebar").style.display = "block";
}

