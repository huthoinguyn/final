const cards = document.querySelectorAll(".card");
const cart = document.querySelector(".cart");
let index = 0;
cards.forEach((item) =>
  item.querySelector("button").addEventListener("click", handleaddProduct)
);

// function handleQuantity() {}
// var sl = handleQuantity(quantity);
let toTal = 0;
Number(toTal);
let number = 0;
Number(number);
function handleaddProduct(event) {
  const card = event.target.parentNode.parentNode;
  const imagesrc = card.querySelector("img").src;
  const name = card.querySelector("h1").innerText;
  const price = card.querySelector(".price").innerText;
  let money = parseFloat(price.slice(1));
  index++;
  addCart(index, imagesrc, name, money);
  // const cartItems = document.querySelectorAll(".cart-item");
  // [...cartItems].forEach(item => item.querySelector(".quantity").addEventListener("change",handleQuantity))
  // function handleQuantity(event){
  //   number = parseInt(event.target.value);
  //   console.log("🚀 ~ file: main.js ~ line 21 ~ handleQuantity ~ number", number)
  //   return number;
  // }
  // toTal = money * handleQuantity;
}

const table = document.querySelector("table");

function addCart(index, imagesrc, name, money) {
  const templateCart = `
  <tr class="cart-item">
    <td>${index}</td>
    <td style="width:200px;text-align: center;"><img class="cart-item-img" src="${imagesrc}" alt=""></td>
    <td >${name}</td>
    <td class="product-price">$${money}</td>
    <td>
    <input type="number" value="1" min="1" style="width:40%;" name="" id="">
    </td>
    <td></td>
    </tr>
    `;

  table.insertAdjacentHTML("beforeend", templateCart);
  // var quantity = cartItem.querySelector(".quantity");
  cartTotal();
}

function cartTotal() {
  const cartItems = document.querySelectorAll(".cart-item");
  let total = 0;
  cartItems.forEach((item) => {
    const productQuantity = item.querySelector("input").value;
    const productPrice = parseFloat(
      item.querySelector(".product-price").innerText.slice(1)
    );
    let productTotal = productPrice * productQuantity;
    total += productTotal;
  });
  const intoMoney = document.querySelector(".cart-total");
  intoMoney.querySelector("span").innerHTML = total;
}
