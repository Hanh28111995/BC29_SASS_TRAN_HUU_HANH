$(window).resize(function () {
  if ($(this).width() > 1200) {
    document.getElementById("main").style.transform = "translateX(0)";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block ";
    document.getElementById("closeNav").style.display = 'none ';
    console.log($(this).width());
  }

});


function w3_open() {
  document.getElementById("main").style.transform = "translateX(320px)";
  document.getElementById("mySidebar").style.width = "320px";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none ';
  document.getElementById("closeNav").style.display = 'inline-block ';
  document.getElementById("icon_h").style.display = 'none ';
}
function w3_close() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("main").style.transform = "translateX(0)";
  document.getElementById("openNav").style.display = "inline-block";
  document.getElementById("closeNav").style.display = 'none ';
  document.getElementById("icon_h").style.display = "inline-block";
}

