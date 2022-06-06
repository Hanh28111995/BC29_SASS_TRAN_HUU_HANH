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
      <td>${index +1}</td>
      <td>${product.TaiKhoan}</td>
      <td>${product.MatKhau}</td>
      <td>${product.HoTen}</td>
      <td>${product.Email}</td>
      <td>${product.LoaiNgonNgu}</td>
      <td>${product.LoaiNguoiDung}</td>
      <td>
        <button class = "btn btn-infor">Sua</button>
        <button class = "btn btn-danger">Xoa</button>
      </td>
    </tr> ` ;
});
getEle("tblDanhSachNguoiDung").innerHTML = contentHTML;
}
getListProduct();