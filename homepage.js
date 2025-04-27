const products = [
  // Category: Electronics
  {},
  {
    id: 1,
    title: "Smartphone Pro X",
    price: 15999,
    description: "A high-end smartphone with a crystal-clear display.",
    img: "images/electronics1.jpg",
    category: "Electronics"
  },
  {
    id: 2,
    title: "Noise Cancelling Headphones",
    price: 3499,
    description: "Enjoy immersive sound with active noise cancellation.",
    img: "images/electronics2.jpg",
    category: "Electronics"
  },
  {
    id: 3,
    title: "4K Ultra HD TV",
    price: 21999,
    description: "Smart TV with built-in apps and ultra crisp resolution.",
    img: "images/electronics3.jpg",
    category: "Electronics"
  },
  {
    id: 4,
    title: "Wireless Earbuds",
    price: 1399,
    description: "Compact design with high-quality audio.",
    img: "images/electronics4.jpg",
    category: "Electronics"
  },
  {
    id: 5,
    title: "Gaming Console",
    price: 12499,
    description: "Next-gen console with amazing graphics performance.",
    img: "images/electronics5.jpg",
    category: "Electronics"
  },
  {
    id: 6,
    title: "Bluetooth Speaker",
    price: 899,
    description: "Portable speaker with long battery life.",
    img: "images/electronics6.jpg",
    category: "Electronics"
  },
  {
    id: 7,
    title: "Laptop Pro 14",
    price: 23799,
    description: "Slim, powerful laptop for professionals.",
    img: "images/electronics7.jpg",
    category: "Electronics"
  },
  {
    id: 8,
    title: "Smartwatch GT",
    price: 2899,
    description: "Track your fitness and notifications on the go.",
    img: "images/electronics8.jpg",
    category: "Electronics"
  },

  // Category: Fashion
  {
    id: 9,
    title: "Classic Leather Jacket",
    price: 1899,
    description: "Timeless leather jacket for a stylish look.",
    img: "images/fashion1.jpg",
    category: "Fashion"
  },
  {
    id: 10,
    title: "Men’s Formal Shoes",
    price: 1199,
    description: "Elegant and comfortable leather shoes.",
    img: "images/fashion2.jpg",
    category: "Fashion"
  },
  {
    id: 11,
    title: "Women’s Handbag",
    price: 2299,
    description: "Stylish handbag made from premium material.",
    img: "images/fashion3.jpg",
    category: "Fashion"
  },
  {
    id: 12,
    title: "Denim Jeans",
    price: 999,
    description: "Classic fit denim jeans with great comfort.",
    img: "images/fashion4.jpg",
    category: "Fashion"
  },
  {
    id: 13,
    title: "Designer Watch",
    price: 6999,
    description: "Luxury wristwatch with stainless steel body.",
    img: "images/fashion5.jpg",
    category: "Fashion"
  },
  {
    id: 14,
    title: "Winter Coat",
    price: 2899,
    description: "Warm and cozy coat for cold weather.",
    img: "images/fashion6.jpg",
    category: "Fashion"
  },
  {
    id: 15,
    title: "Sunglasses UV400",
    price: 849,
    description: "Stylish shades with full UV protection.",
    img: "images/fashion7.jpg",
    category: "Fashion"
  },
  {
    id: 16,
    title: "Athletic Sneakers",
    price: 1599,
    description: "Durable and lightweight running shoes.",
    img: "images/fashion8.jpg",
    category: "Fashion"
  },

  // Category: Home Appliances
  {
    id: 17,
    title: "Microwave Oven",
    price: 4399,
    description: "Quick heating with modern features.",
    img: "images/appliances1.jpg",
    category: "Home Appliances"
  },
  {
    id: 18,
    title: "Washing Machine",
    price: 9899,
    description: "Fully automatic with powerful cleaning.",
    img: "images/appliances2.jpg",
    category: "Home Appliances"
  },
  {
    id: 19,
    title: "Refrigerator Double Door",
    price: 15499,
    description: "Spacious and energy-efficient refrigerator.",
    img: "images/appliances3.jpg",
    category: "Home Appliances"
  },
  {
    id: 20,
    title: "Air Conditioner 1.5 Ton",
    price: 22499,
    description: "Silent and powerful cooling.",
    img: "images/appliances4.jpg",
    category: "Home Appliances"
  },
  {
    id: 21,
    title: "Induction Cooktop",
    price: 1599,
    description: "Efficient cooking with temperature control.",
    img: "images/appliances5.jpg",
    category: "Home Appliances"
  },
  {
    id: 22,
    title: "Vacuum Cleaner",
    price: 2199,
    description: "Compact and powerful suction cleaner.",
    img: "images/appliances6.jpg",
    category: "Home Appliances"
  },
  {
    id: 23,
    title: "Water Purifier",
    price: 6499,
    description: "Multi-stage filtration for clean water.",
    img: "images/appliances7.jpg",
    category: "Home Appliances"
  },
  {
    id: 24,
    title: "Ceiling Fan Deluxe",
    price: 1399,
    description: "Silent fan with elegant design.",
    img: "images/appliances8.jpg",
    category: "Home Appliances"
  },

  // Category: Sports
  {
    id: 25,
    title: "Mountain Bike",
    price: 11999,
    description: "Durable bike for all terrains.",
    img: "images/sports1.jpg",
    category: "Sports"
  },
  {
    id: 26,
    title: "Cricket Bat Pro",
    price: 2599,
    description: "Professional-grade wooden bat.",
    img: "images/sports2.jpg",
    category: "Sports"
  },
  {
    id: 27,
    title: "Football",
    price: 799,
    description: "Durable and lightweight football.",
    img: "images/sports3.jpg",
    category: "Sports"
  },
  {
    id: 28,
    title: "Yoga Mat",
    price: 899,
    description: "Non-slip and eco-friendly material.",
    img: "images/sports4.jpg",
    category: "Sports"
  },
  {
    id: 29,
    title: "Treadmill Electric",
    price: 18499,
    description: "Powerful treadmill with multiple modes.",
    img: "images/sports5.jpg",
    category: "Sports"
  },
  {
    id: 30,
    title: "Boxing Gloves",
    price: 1399,
    description: "Comfortable and strong padding.",
    img: "images/sports6.jpg",
    category: "Sports"
  },
  {
    id: 31,
    title: "Dumbbell Set",
    price: 2599,
    description: "Adjustable weight dumbbells.",
    img: "images/sports7.jpg",
    category: "Sports"
  },
  {
    id: 32,
    title: "Skipping Rope Pro",
    price: 499,
    description: "High-speed bearing skipping rope.",
    img: "images/sports8.jpg",
    category: "Sports"
  },

  // Category: Books
  {
    id: 33,
    title: "The Art of Coding",
    price: 999,
    description: "Deep dive into software architecture.",
    img: "images/books1.jpg",
    category: "Books"
  },
  {
    id: 34,
    title: "Mystery in the Night",
    price: 699,
    description: "Thrilling detective novel.",
    img: "images/books2.jpg",
    category: "Books"
  },
  {
    id: 35,
    title: "Mastering JavaScript",
    price: 1199,
    description: "From beginner to advanced JavaScript.",
    img: "images/books3.jpg",
    category: "Books"
  },
  {
    id: 36,
    title: "Mindset: Psychology of Success",
    price: 849,
    description: "Inspiring self-help book.",
    img: "images/books4.jpg",
    category: "Books"
  },
  {
    id: 37,
    title: "The Great History",
    price: 1599,
    description: "A journey through ancient civilizations.",
    img: "images/books5.jpg",
    category: "Books"
  },
  {
    id: 38,
    title: "AI & The Future",
    price: 899,
    description: "Understanding AI in the modern world.",
    img: "images/books6.jpg",
    category: "Books"
  },
  {
    id: 39,
    title: "Cooking Made Easy",
    price: 749,
    description: "Simple and delicious recipes.",
    img: "images/books7.jpg",
    category: "Books"
  },
  {
    id: 40,
    title: "Fantasy Realms",
    price: 1099,
    description: "Epic fantasy fiction with magic and dragons.",
    img: "images/books8.jpg",
    category: "Books"
  }
];

if (localStorage.getItem("currentUserName") == "NULL" || localStorage.getItem("currentUserName") == undefined) location.replace("index.html");

const productContainer = document.querySelector('.pro-container');
const name = document.getElementById("user-name");
const userName = localStorage.getItem("currentUserName"); 
const logout = document.getElementById("log-out");
const selectCategory = document.getElementById("select-category");
const priceInput = document.getElementById("priceInp");

var userCart = JSON.parse(localStorage.getItem("carts")) || [];

userCart =  userCart.filter(element=>{
return element.mail == localStorage.getItem("currentUser");
});
userCart = userCart[0];
name.innerText = userName;
logout.onclick = function () {
  localStorage.setItem("currentUserName", "NULL");
  location.replace("index.html");
}
if(userCart)
document.getElementById("cart-cnt").innerText = userCart.items.length;

for (var i = 1; i <= 40; i++) {
  const productCard = document.createElement('div');
  // productCard.className = 'pro';
  productCard.className = '  pro';
  productCard.innerHTML = `
       <img src="${products[i].img}"alt="${products[i].id}" class="product-img"  > 
       <div class="des">
                    <span>${products[i].description}</span>
                    <h5> ${products[i].title}</h5>    
                    <h4>Price ${products[i].price}$</h4>  
                   <button id="${products[i].id}" class="view-btn"   title="Quick View">
                    <i class="fas fa-eye fa-2x"></i></button>
      </div>
      `
       Item = false;
       if(userCart)
      for(var item of userCart.items  ){
        if(item.id == products[i].id) {Item = true;}
      }
      if(!Item)
      productCard.innerHTML+= `<button alt="${products[i].id}" class=" cart-btn col-1 cart" type="button">Add to cart</button>`;
    else
    productCard.innerHTML+= `<button disabled alt="${products[i].id}" class=" cart-btn-added col-1 cart" type="button">Added to cart</button>`;

  productContainer.appendChild(productCard);
}
setOnClickForImages();
EyeOnClick();
function EyeOnClick(){
  const eye = document.querySelectorAll('.pro .view-btn');
  eye.forEach(button => {
    button.addEventListener('click', (e) => {
      const clickedbutton = button;
      const itemId = clickedbutton.id;
      console.log(itemId);
      localStorage.setItem("clickedItem", itemId);
      location.href="item.html"
    });
  });

}

function setOnClickForImages() {

  const productImages = document.querySelectorAll('.pro img');

  productImages.forEach(img => {
    img.addEventListener('click', (e) => {
      const clickedImage = e.target;
      const imgAlt = clickedImage.alt;
      location.href="item.html"
      localStorage.setItem("clickedItem", imgAlt);
    });
  });
}
function changeDisplayedProducts(cat,value) {

  productContainer.innerHTML = "";
  for (var i = 1; i <= 40; i++) {
    if ( (products[i].category == cat && products[i].price>=value ) || (cat == "All"&& products[i].price>=value)  ) {
      const productCard = document.createElement('div');
      productCard.className = 'col-12 col-sm-6 col-md-4 col-lg-3 mb-4 pro';
      // productCard.className = 'pro';
      productCard.innerHTML = `
      <img src="${products[i].img}"alt="${products[i].id}" class="product-img"  > 
      <div class="des">
     <span>${products[i].description}</span>
      <h5> ${products[i].title}</h5>    
      <h4>Price ${products[i].price}$</h4>       
      <button class="view-btn" onclick="showQuickView(123)" title="Quick View">
                      <i class="fas fa-eye fa-2x"></i></button>     
      </div>
      `
      Item = false;
       if(userCart)
      for(var item of userCart.items  ){
        if(item.id == products[i].id) {Item = true;}
      }
      if(!Item)
      productCard.innerHTML+= `<button alt="${products[i].id}" class=" cart-btn col-1 cart" type="button">Add to cart</button>`;
    else
    productCard.innerHTML+= `<button disabled alt="${products[i].id}" class=" cart-btn-added col-1 cart" type="button">Added to cart</button>`;

      productContainer.appendChild(productCard);
    }
  }
  setOnClickForImages();
}
function filter (){
  var  selected = selectCategory.value; 
  var price = priceInput.value;
  changeDisplayedProducts(selected,price)
}





document.addEventListener('DOMContentLoaded', function () {


  document.querySelector('.pro-container').addEventListener('click', function (e) {
    if (e.target.classList.contains('cart')) {
      const btn = e.target;
      // btn.disabled = true;
      btn.classList.remove('cart-btn');
      btn.classList.add('cart-btn-added');
      btn.innerHTML = 'Added to cart';
      btn.disabled = true;
      const productCard = e.target.closest('.pro');
      const img = productCard.querySelector('.product-img');
      let itemToCart = img.alt;
      let user = localStorage.currentUser;
      let usersCartsData = JSON.parse(localStorage.getItem("carts")) || [];  
  
      let newItem = {
        id: itemToCart,
        cnt: 1
      };
      let usercart = {
        mail: user,
        items: [newItem]
      }
      var items;
      var found = false;
      for (var i of usersCartsData) {
        if (i.mail == user) {
          found = true;
          i.items.push(newItem);
          items = i.items;
        }
      }
      if (!found)
        {usersCartsData.push(usercart);
          document.getElementById("cart-cnt").innerText = "1";
        }
        else
        document.getElementById("cart-cnt").innerText = items.length;
      console.log();


      localStorage.setItem("carts", JSON.stringify(usersCartsData));

      Swal.fire({
        title: 'Added to Cart!',
        text: 'This item has been added to your cart.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
   
  });



  const productContainer = document.querySelector('.product-container');
  const productCards = document.querySelectorAll('.product-card');
  const nxtBtn = document.querySelector('.nxt-btn');
  const preBtn = document.querySelector('.pre-btn');
  let currentIndex = 0;
  const cardCount = productCards.length;

  updateButtons();

  nxtBtn.addEventListener('click', () => {
    if (currentIndex < cardCount - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  preBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  function updateSlider() {
    const offset = -currentIndex * 100;
    productContainer.style.transform = `translateX(${offset}%)`;
    updateButtons();
  }

  function updateButtons() {
    preBtn.style.display = currentIndex === 0 ? 'none' : 'flex';
    nxtBtn.style.display = currentIndex === cardCount - 1 ? 'none' : 'flex';
  }

  selectCategory.addEventListener("change",()=>{
  
    filter();
    })
    
    priceInput.addEventListener("input",()=>{
      filter();
    })

    priceInput.on

});



