
import { products, addToCartLogic } from "./utils.js";
const productContainer = document.querySelector('.pro-container');
if (localStorage.getItem("currentUserName") == "NULL" || localStorage.getItem("currentUserName") == undefined ) location.replace("index.html");

var userCart = JSON.parse(localStorage.getItem("carts")) || [];

userCart =  userCart.filter(element=>{
return element.mail == localStorage.getItem("currentUser");
});
userCart = userCart[0];
if(userCart)
document.getElementById("cart-cnt").innerText = userCart.items.length;

console.log(localStorage.clickedItem);

const productCard = document.createElement('div');
productCard.innerHTML = `
<img src="${products[localStorage.clickedItem].img}"> 
<div class="">
<span>${products[localStorage.clickedItem].description}</span>
<h2> ${products[localStorage.clickedItem].title}</h2>    
<h2>Price : ${products[localStorage.clickedItem].price}</h2> 
</div>
`
var Item = false;
if(userCart)
for(var item of userCart.items  ){
  if(item.id == localStorage.clickedItem) {Item = true;}
}
if(!Item)
productCard.innerHTML+= `<button alt="${localStorage.clickedItem}" id="addTocartbtn" class="cart-btn col-1 cart" type="button">Add to cart</button>`;
else
productCard.innerHTML+= `<button disabled alt="${localStorage.clickedItem}" class="cart-btn-added col-1 cart" type="button">Added to cart</button>`;



productContainer.appendChild(productCard);
const btn = document.getElementById("addTocartbtn");
if(btn)
btn.onclick = function () { 
    addToCartLogic(localStorage.currentUser, localStorage.clickedItem);
    btn.classList.remove('cart-btn');
    btn.classList.add('cart-btn-added');
    btn.innerHTML = 'Added to cart';
    btn.disabled = true;
    Swal.fire({
      title: 'Added to Cart!',
      text: 'This item has been added to your cart.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
if(userCart)
document.getElementById("cart-cnt").innerText = userCart.items.length+1;

}
const name = document.getElementById("user-name");
const userName = localStorage.getItem("currentUserName"); 
const logout = document.getElementById("log-out");

name.innerText = userName;
logout.onclick = function () {
  localStorage.setItem("currentUserName", "NULL");
  location.replace("index.html");
}