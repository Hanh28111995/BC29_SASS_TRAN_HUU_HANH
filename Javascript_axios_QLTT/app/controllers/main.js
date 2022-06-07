var service = new Services();

function getEle(id) {
  return document.getElementById(id);
}

function getListProduct() {
  var promise = service.getListProductApi();
  promise
    .then(function (result) {
      console.log(result.data)
      renderListProducts(result.data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

function renderListProducts(data) {
  var contentHTML = "";
  data.forEach(function (product, index) {

    contentHTML += `
    <tr>
      <td>${index + 1}</td>
      <td>${product.TaiKhoan}</td>
      <td>${product.MatKhau}</td>
      <td>${product.HoTen}</td>
      <td>${product.Email}</td>
      <td>${product.LoaiNgonNgu}</td>
      <td>${product.LoaiNguoiDung}</td>
      <td>
        <button class = "btn btn-success" data-toggle="modal" data-target="#myModal" onclick = "editProduct(${product.id})">Sửa</button>
        <button class = "btn btn-danger" onclick = "deleteProduct(${product.id})">Xóa</button>
      </td>
    </tr> ` ;
  });
  getEle("tblDanhSachNguoiDung").innerHTML = contentHTML;
}

getListProduct();

/////////////////xoa sp/////////
function deleteProduct(id) {
  // console.log(id);
  service.deleteProductApi(id)
    .then(function (result) {
      getListProduct();
    })
    .catch(function (error) {
      console.log(error);
    })

}
getEle("btnThemNguoiDung").onclick = function () {
  document.getElementsByClassName("modal-title")[0].innerHTML = "Thêm người dùng";
  var footer = `<button class = "btn btn-success" onclick="addProduct()">Thêm</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;

}
////////////////them sp/////////
function addProduct() {
  var tk = getEle("TaiKhoan").value;
  var hoten = getEle("HoTen").value;
  var mk = getEle("MatKhau").value;
  var email = getEle("Email").value;
  var hinhanh = getEle("HinhAnh").value;
  var loainguoidung = getEle("loaiNguoiDung").value;
  var loaingonngu = getEle("loaiNgonNgu").value;
  var mota = getEle("MoTa").value;

  var product = new Product("", hoten, email, hinhanh, loainguoidung, loaingonngu, mota, mk, tk);
  // console.log(product);
  service.addProductApi(product)
    .then(function () {
      getListProduct();
      document.getElementsByClassName("close")[0].click();
    })
    .catch(function (error) {
      console.log(error);
    })
}


//////////////////sua sp///////////////
function editProduct(id) {
  document.getElementsByClassName("modal-title")[0].innerHTML = "Sửa thông tin";
  var footer = `<button class = "btn btn-success" onclick="updateProduct(${id})">Update</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
  service.getProductApi(id)
    .then(function (result) {
      console.log(result.data);
      getEle("TaiKhoan").value = result.data.TaiKhoan;
      getEle("HoTen").value = result.data.HoTen;
      getEle("MatKhau").value = result.data.MatKhau;
      getEle("Email").value = result.data.Email;
      getEle("HinhAnh").value = result.data.HinhAnh;
      getEle("loaiNguoiDung").value = result.data.LoaiNguoiDung;
      getEle("loaiNgonNgu").value = result.data.LoaiNgonNgu;
      getEle("MoTa").value = result.data.Mota;
    })
    .catch(function (error) {
      console.log(error);
    })
}
function updateProduct(id) {
  var tk = getEle("TaiKhoan").value;
  var hoten = getEle("HoTen").value;
  var mk = getEle("MatKhau").value;
  var email = getEle("Email").value;
  var hinhanh = getEle("HinhAnh").value;
  var loainguoidung = getEle("loaiNguoiDung").value;
  var loaingonngu = getEle("loaiNgonNgu").value;
  var mota = getEle("MoTa").value;

  var product = new Product(id, hoten, email, hinhanh, loainguoidung, loaingonngu, mota, mk, tk);
  service.updateProductApi(product)
    .then(function () {
      getListProduct();
      document.getElementsByClassName("close")[0].click();
    })
    .catch(function (error) {
      console.log(error);
    })
}


