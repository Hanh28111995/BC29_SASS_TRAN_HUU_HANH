
var service = new Services();
var validation = new Validation();
var tk;
var hoten;
var mk;
var email;
var hinhanh;
var loainguoidung;
var loaingonngu;
var mota;

function getEle(id) {
  return document.getElementById(id);
}

function getListProduct() {
  var promise = service.getListProductApi();
  promise
    .then(function (result) {
      // console.log(result.data)
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

function blank_default() {
  getEle("TaiKhoan").value = "";
  getEle("HoTen").value = "";
  getEle("MatKhau").value = "";
  getEle("Email").value = "";
  getEle("HinhAnh").value = "";
  getEle("loaiNguoiDung").value = "";
  getEle("loaiNgonNgu").value = "";
  getEle("MoTa").value = "";
  getEle("tbTK").style.display = "none";
  getEle("tbHT").style.display = "none";
  getEle("tbMK").style.display = "none";
  getEle("tbEmail").style.display = "none";
  getEle("tbHA").style.display = "none";
  getEle("tbLND").style.display = "none";
  getEle("tbLNN").style.display = "none";
  getEle("tbMT").style.display = "none";
}

function check_validation(isAdd) {
  tk = getEle("TaiKhoan").value;
  hoten = getEle("HoTen").value;
  mk = getEle("MatKhau").value;
  email = getEle("Email").value;
  hinhanh = getEle("HinhAnh").value;
  loainguoidung = getEle("loaiNguoiDung").value;
  loaingonngu = getEle("loaiNgonNgu").value;
  mota = getEle("MoTa").value;
  isEmpty = true;
  if (isAdd) {
    var promise = service.getListProductApi();
    promise
      .then(function (result) {
        console.log(result.data);
        isEmpty &= validation.kiemtraRong(tk, "tbTK", "Vui lòng nhập Tài Khoản")
          && validation.kiemtraTK(tk, "tbTK", "Tài khoản chứa kí tự khôg hợp lệ")
          && validation.kiemtraTKTontai(tk, "tbTK", "Tài khoản này đã tồn tại", result.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  isEmpty &= validation.kiemtraRong(hoten, "tbHT", "Vui lòng nhập Họ Tên")
    && validation.kiemtraTen(hoten, "tbHT", "Họ tên chứa kí tự khôg hợp lệ");

  isEmpty &= validation.kiemtraRong(mk, "tbMK", "Vui lòng nhập Mật khẩu")
    && validation.kiemtraMatKhau(mk, "tbMK", "Mật khẩu khôg hợp lệ (từ 6-8 ký tự, chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)");

  isEmpty &= validation.kiemtraRong(email, "tbEmail", "Vui lòng nhập Email")
    && validation.kỉemtraEmail(email, "tbEmail", "Email khôg hợp lệ");

  isEmpty &= validation.kiemtraRong(hinhanh, "tbHA", "Vui lòng nhập đường dẫn");

  isEmpty &= validation.kiemtraLuachon("loaiNguoiDung", "tbLND", "Vui lòng chọn người dùng");

  isEmpty &= validation.kiemtraLuachon("loaiNgonNgu", "tbLNN", "Vui lòng chọn ngôn ngữ");

  isEmpty &= validation.kiemtraRong(mota, "tbMT", "Vui lòng nhập Mô tả")
    && validation.kiemtraSokitu(mota, "tbMT", "Tối đa 60 Kí tự");
  return isEmpty
}

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
  blank_default();
  getEle("TaiKhoan").disabled = false;
}
////////////////them sp/////////
function addProduct() {
  var check = check_validation(true);
  if (!check) return;
  else {
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
}


//////////////////sua sp///////////////
function editProduct(id) {
  document.getElementsByClassName("modal-title")[0].innerHTML = "Sửa thông tin";
  var footer = `<button class = "btn btn-success" onclick="updateProduct(${id})">Update</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
  blank_default();
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
      getEle("TaiKhoan").disabled = true;
    })
    .catch(function (error) {
      console.log(error);
    })
}
function updateProduct(id) {
  var check = check_validation(false);
  if (!check) return;
  else {
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
}

