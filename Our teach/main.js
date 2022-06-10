var service = new Services();
function getEle(id) {
  return document.getElementById(id);
}
function getListProduct() {
 var promise = service.getListProductApi();
 promise
  .then(function (result) {
    renderListProducts(result.data);
  })
    .catch(function (error) {
      console.log(error);
    })
}
function renderListProducts(data) {
  var contentHTML = "";
  data.forEach(function (product) {
    if(product.LoaiNguoiDung == "GV")
    {
    contentHTML += `
    <div class="col-xl-3 col-sm-6 col-12 text-center align-items-center px-3 py-3">
              <div class="bg_item">
                <img src="./images/${product.HinhAnh}" alt="" style="width: 100%; border-radius: 15px 15px 0 0">
                <div class="item_thumb">
                  <p>${product.LoaiNgonNgu}</p>
                  <h2>${product.HoTen}</h2>
                  <p>${product.Mota}</p>
                </div>
              </div>
            </div>
    `
  }
  });
  getEle("listProduct").innerHTML = contentHTML;
}
getListProduct();

var x0 = 0;
var x1 = 0;
var x2 = 0;
window.onload = function () {
  var width_default = window.innerWidth;
  x0 = width_default;
  x1 = x0;
};
window.addEventListener('resize', function () {
  var x = getEle("main").style.transform;
  var y = getEle("openNav").style.display;
  var z = getEle("closeNav").style.display;
  var t = getEle("mySidebar").style.transform;
  x2 = window.innerWidth;
  // console.log(x1, x2)
  if (x1 < x2) {
    getEle("mySidebar").style.display = "none";
    getEle("mySidebar").style.transition = "none";
    if ((x2 > 1200) && (t == "translateX(-320px)")) {
      getEle("mySidebar").style.transform = "translateX(0)";
    }
    if ((x2 > 1200) && (x == "translateX(320px)")) {
      getEle("main").style.transform = "translateX(0)";
    }
  }
  if (x1 > x2) {
    if (x2 <= 1200) {
      console.log(x1, x2);
      getEle("mySidebar").style.display = "none";
      getEle("mySidebar").style.transition = "none";
      if (t == "translateX(0px)") {
        console.log(x1, x2);
        getEle("mySidebar").style.transform = "translateX(-320px)";
        if (z == "inline-block") {
          getEle("openNav").style.display = "inline-block";
          getEle("closeNav").style.display = 'none ';
          getEle("icon_h").style.display = "inline-block";
        }
      }
    }
  }
  getEle("mySidebar").style.display = "block";
  x1 = x2;
});



function w3_open() {
  getEle("mySidebar").style.display = "block";
  getEle("main").style.transition = "transform 1s cubic-bezier(.230,1,.320,1) ";
  getEle("mySidebar").style.transition = "transform 2s cubic-bezier(.230,1,.320,1) ";
  getEle("main").style.transform = "translateX(320px)";
  getEle("mySidebar").style.transform = "translateX(0px)";
  getEle("openNav").style.display = 'none ';
  getEle("closeNav").style.display = 'inline-block';
  getEle("icon_h").style.display = 'none ';
  getEle("main").style.height = "100vh";
}
function w3_close() {
  getEle("main").style.transition = "transform 2s cubic-bezier(.230,1,.320,1) ";
  getEle("mySidebar").style.transition = "transform 1s cubic-bezier(.230,1,.320,1) ";
  getEle("main").style.transform = "translateX(0)";
  getEle("openNav").style.display = "inline-block";
  getEle("closeNav").style.display = 'none ';
  getEle("icon_h").style.display = "inline-block";
  getEle("mySidebar").style.transform = "translateX(-320px)";
  getEle("mySidebar").style.display = "block";
  getEle("main").style.height = "100%";

}

$(document).ready(function() {
  $(window).scroll(function(event) {
     var pos_body = $('html,body').scrollTop();
     var check_width = window.innerWidth;
     if((pos_body>=100)&&(check_width>1200)){
      getEle("mySidebar").style.backgroundColor = "white";
      // getEle("mySidebar").style.height = "50px";
      getEle("offImg").style.width = "0px";
      offImg
     }
     else {
      getEle("mySidebar").style.backgroundColor = "transparent";
      // getEle("mySidebar").style.height = "80px";  
      getEle("offImg").style.width = "80px";
     }
  });
});


