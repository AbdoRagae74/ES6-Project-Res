import { products } from "./utils.js";
const name = document.getElementById("user-name");
const userName = localStorage.getItem("currentUserName"); 
const logout = document.getElementById("log-out");
if (localStorage.getItem("currentUserName") == "NULL" || localStorage.getItem("currentUserName") == undefined) location.replace("index.html");

name.innerText = userName;
logout.onclick = function () {
  localStorage.setItem("currentUserName", "NULL");
  location.replace("index.html");
}

let cart = JSON.parse(localStorage.getItem("carts")) || [];
let pay = document.getElementById("pay");

let userCart; 
for(var i of cart){
  if(i.mail == localStorage.currentUser)        
    {userCart = i;
      break;
    }
}
if(userCart)
document.getElementById("cart-cnt").innerText = userCart.items.length;




const userIndex = cart.findIndex(item => item.mail === localStorage.currentUser);

  function renderCart() {
    console.log(userCart);
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';
    let total = 0;
    if(userCart.items)
    for (var i of userCart.items ){
        const itemTotal = products[i.id].price * i.cnt;
        total += itemTotal;
    const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
      <img src="${products[i.id].img}"  class="item-image">
        <div class="item-details">
          <div class="item-title">${products[i.id].title}</div>
          <div class="item-price">$${products[i.id].price.toFixed(2)}</div>
          <div class="quantity-controls">
            <button class="quantity-btn minus" data-id="${products[i.id].id}">-</button>
            <input  type="number" class="quantity-input" value="${i.cnt}" min="1" data-id="${products[i.id].id}" readonly>
            <button class="quantity-btn plus" data-id="${products[i.id].id}">+</button>
          </div>
        </div>
        <div class="item-total">$${itemTotal.toFixed(2)}</div>
        <button class="remove-item" data-id="${products[i.id].id}">×</button>
      `;
      
      cartItemsContainer.appendChild(cartItem);
    }      
    document.querySelector('.total-amount').textContent = `$${total.toFixed(2)}`;
  }
  

  document.querySelector('.cart-items').addEventListener('click', function(e) {
    
   
    const id = parseInt(e.target.dataset.id);
    const item = userCart.items.find(  item => item.id == id);
    
    if (!item) return;
    
    if (e.target.classList.contains('minus')) {
      if (item.cnt > 1) {
        item.cnt--;
        renderCart();
      }
      cart[userIndex] = userCart; 
      localStorage.setItem('carts', JSON.stringify(cart));
    } else if (e.target.classList.contains('plus')) {
      item.cnt++;
      cart[userIndex] = userCart; 
      localStorage.setItem('carts', JSON.stringify(cart));
      renderCart();
    } 

    else if (e.target.classList.contains('remove-item')) {
      // console.log(id);
      userCart.items = userCart.items.filter(item => { return item.id != id;});
      cart[userIndex] = userCart; 
      document.getElementById("cart-cnt").innerText = cart[userIndex].items.length;
      localStorage.setItem('carts', JSON.stringify(cart));
      Swal.fire({
        title: 'Removed!',
        text: 'Item has been removed from your cart.',
        icon: 'warning',
        confirmButtonText: 'OK',
        confirmButtonColor: '#d33'
      });
      renderCart();
    }

  });
  
  pay.addEventListener("click",function(){
    cart.splice(userIndex, 1);
    localStorage.setItem('carts', JSON.stringify(cart));
    alert('Thank you for your purchase!');
    location.reload();
  })
  renderCart();

  // document.querySelector('.cart-items').addEventListener('change', function(e) {
  //   if (e.target.classList.contains('quantity-input')) {
  //     const id = parseInt(e.target.dataset.id);
  //     const item = cart.find(item => item.id === id);
  //     const newQuantity = parseInt(e.target.value) || 1;
      
  //     if (item && newQuantity >= 1) {
  //       item.quantity = newQuantity;
  //       renderCart();
  //     }
  //   }
  // });
  // if(userCart)
