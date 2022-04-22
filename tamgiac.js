var kiemTra = false;
while (true) {
  var a = Number(prompt("Hệ số a"));
  if (a == "" || a == null) {
    alert("Vui lòng nhập cạnh a");
    continue;
  } else if (isNaN(a)) {
    alert("Vui lòng nhập a dạng số");
    continue;
  }

  var b = Number(prompt("Hệ số b"));
  if (b == "" || b == null) {
    alert("Vui lòng nhập cạnh b");
    continue;
  } else if (isNaN(b)) {
    alert("Vui lòng nhập b dạng số");
    continue;
  }

  var c = Number(prompt("Hệ số c"));
  if (c == "" || c == null) {
    alert("Vui lòng nhập cạnh c");
    continue;
  } else if (isNaN(c)) {
    alert("Vui lòng nhập c dạng số");
    continue;
  } else {
    break;
  }
}
if (a + b > c && b + c > a && b + c > a) {
  alert("Đã tạo ra 1 tam giác");
  kiemTra = true;
} else {
  alert("Những cạnh trên không thể tạo thành 1 tam giác");
}

if (kiemTra == true) {
  if (a == b && a == c) {
    alert("Đây là tam giác đều");
  } else if (a == b || a == c || b == c) {
    alert("Đây là tam giác cân");
  } else if (
    a * a == b * b + c * c ||
    b * b == a * a + c * c ||
    c * c == b * b + a * a
  ) {
    if (a == b || a == c || b == c) {
      alert("Đây là tam giác vuông cân");
    } else {
      alert("Đây là tam giác vuông");
    }
  } else if (
    a * a > b * b + c * c ||
    b * b > a * a + c * c ||
    c * c > a * a + b * b
  ) {
    alert("Đây là tam giác tù");
  } else {
    alert("Đây là tam giác nhọn");
  }
}
