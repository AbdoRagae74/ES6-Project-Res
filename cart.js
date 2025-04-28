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

let userCart; 
userCart = cart.find(item=> item.mail == localStorage.currentUser );


if(userCart)
document.getElementById("cart-cnt").innerText = userCart.items.length;

const userIndex = cart.findIndex(item => item.mail === localStorage.currentUser);

  function renderCart() {
    console.log(userCart);
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';
    let total = 0;
    if(userCart && userCart.items)
      userCart.items.forEach(element => {
        const itemTotal = products[element.id].price * element.cnt;
        total += itemTotal;
    const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
      <img src="${products[element.id].img}"  class="item-image">
        <div class="item-details">
          <div class="item-title">${products[element.id].title}</div>
          <div class="item-price">$${products[element.id].price.toFixed(2)}</div>
          <div class="quantity-controls">
            <button class="quantity-btn minus" data-id="${products[element.id].id}">-</button>
            <input  type="number" class="quantity-input" value="${element.cnt}" min="1" data-id="${products[element.id].id}" readonly>
            <button class="quantity-btn plus" data-id="${products[element.id].id}">+</button>
          </div>
        </div>
        <div class="item-total">$${itemTotal.toFixed(2)}</div>
        <button class="remove-item" data-id="${products[element.id].id}">×</button>
      `;      
      cartItemsContainer.appendChild(cartItem);
      });
   
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
    
    if(userCart==undefined){
      Swal.fire({
        title: 'Your cart is empty!',
        text: 'Please add items to cart first.',
        icon: 'warning',
        confirmButtonText: 'OK',
        confirmButtonColor: '#d33'
      });
    }
    else{
      
      cart.splice(userIndex, 1);
      localStorage.setItem('carts', JSON.stringify(cart));    
      Swal.fire({
        title: 'Purchase is done!',
        text: 'Thanks for your purchase.your order will be shipped soon.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then((res)=>{
        if(res.isConfirmed){
          location.replace("homepage.html");}
        });
      }

  })
  renderCart();

