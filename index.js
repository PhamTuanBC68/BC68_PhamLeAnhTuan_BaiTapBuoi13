// bài 1
document.querySelector(".btn-primary").onclick = function () {
  let soLuong = document.getElementById("soLuong").value * 1;
  let soNgayLam = document.getElementById("soNgayLam").value * 1;

  let tienLuong = 0;

  tienLuong = soLuong * soNgayLam;

  document.getElementById("ketQua").innerHTML =
    "Số tiền lương bạn làm được tháng này: " +
    tienLuong.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
};
document.querySelector(".btn-dark").onclick = function () {
  let soThuNhat = document.getElementById("soThuNhat").value * 1;
  let soThuHai = document.getElementById("soThuHai").value * 1;
  let soThuBa = document.getElementById("soThuBa").value * 1;
  let soThuBon = document.getElementById("soThuBon").value * 1;
  let soThuNam = document.getElementById("soThuNam").value * 1;
  let giaTriTrungBinh = 0;

  giaTriTrungBinh =
    (soThuNhat + soThuHai + (soThuBa + soThuBon) + soThuNam) / 5;

  document.getElementById("giaTriTrungBinh").innerHTML =
    "Giá trị trung bình là: " + giaTriTrungBinh;
};

document.querySelector(".btn-dark").onclick = function () {
  console.log("Tôi bấm vào nút đổi tiền");
  let hoTen = document.querySelector("#hoTen").value;

  let soLuong = document.getElementById("soLuongDoi").value * 1;

  let TongTienDoiDuoc = soLuong * 23.5;

  document.getElementById(
    "tongTienDoiDuoc"
  ).innerHTML = `Khách hàng ${hoTen} đã mua hàng với tổng giá trị ${TongTienDoiDuoc.toLocaleString(
    "vi",
    {
      style: "currency",
      currency: "VND",
    }
  )}`;
};
