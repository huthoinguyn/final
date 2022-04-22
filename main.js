const cards = document.querySelectorAll(".card");
const cart = document.querySelector(".cart");
let index = 0;
cards.forEach((item) => item.querySelector("button").addEventListener("click", handleaddProduct));

// function handleQuantity() {}
// var sl = handleQuantity(quantity);
let toTal = 0;
Number(toTal)
let number = 0;
Number(number)
function handleaddProduct(event) {
  const card = event.target.parentNode.parentNode;
  const imagesrc = card.querySelector("img").src;
  const name = card.querySelector("h1").innerText;
  const price = card.querySelector(".price").innerText;
  let money = parseFloat(price.slice(1));
  index++;
  addCart(index, imagesrc, name, money, toTal);
  const cartItems = document.querySelectorAll(".cart-item");
  [...cartItems].forEach(item => item.querySelector(".quantity").addEventListener("change",handleQuantity))
  console.log("🚀 ~ file: main.js ~ line 20 ~ handleaddProduct ~ handleQuantity", handleQuantity(event))
  function handleQuantity(event){
    number = parseInt(event.target.value);
    console.log("🚀 ~ file: main.js ~ line 21 ~ handleQuantity ~ number", number)
    return number;
  }
  toTal = money * handleQuantity;
}
//   function handleQuantity(quantity) {

// }

const table = document.querySelector("table");

function addCart(index, imagesrc, name, money, toTal) {
  const templateCart = `
  <tr class="cart-item">
    <td>${index}</td>
    <td style="width:200px;text-align: center;"><img class="cart-item-img" src="${imagesrc}" alt=""></td>
    <td>${name}</td>
    <td>${money}</td>
    <td>
    <select class="quantity">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
  </select>
    </td>
    <td>${toTal}</td>
    </tr>
    `;

  table.insertAdjacentHTML("beforeend", templateCart);
  // var quantity = cartItem.querySelector(".quantity");
}
