// // web.js

// document.addEventListener("DOMContentLoaded", function() {
//     // Function to load page content dynamically
//     function loadPage(pageUrl) {
//         fetch(pageUrl)
//             .then(response => response.text())
//             .then(html => {
//                 document.body.innerHTML = html;
//                 initializePage();
//             })
//             .catch(error => console.error("Error loading page:", error));
//     }

//     // Function to initialize page functionality
//     function initializePage() {
//         const addToCartButtons = document.querySelectorAll(".product button");
//         const cartItemsList = document.getElementById("cart-items");
//         const totalPriceDisplay = document.getElementById("total-price");
//         const checkoutBtn = document.getElementById("checkout-btn");
//         let totalPrice = 0;

//         // Function to update cart
//         function updateCart(productName, productPrice) {
//             totalPrice += productPrice;
//             totalPriceDisplay.textContent = totalPrice.toFixed(2);

//             const cartItem = document.createElement("li");
//             cartItem.textContent = productName;
//             cartItemsList.appendChild(cartItem);
//         }

//         // Add event listeners to "Add to Cart" buttons
//         addToCartButtons.forEach(button => {
//             button.addEventListener("click", function() {
//                 const product = button.closest(".product");
//                 const productName = product.querySelector("h2").textContent;
//                 const productPrice = parseFloat(product.querySelector("span").textContent.slice(1));

//                 updateCart(productName, productPrice);
//             });
//         });

//         // Checkout button functionality
//         if (checkoutBtn) {
//             checkoutBtn.addEventListener("click", function() {
//                 alert("Redirecting to checkout page..."); // Replace this with your checkout logic
//             });
//         }

//         // Navigation functionality
//         const navLinks = document.querySelectorAll("nav ul li a");
//         navLinks.forEach(link => {
//             link.addEventListener("click", function(event) {
//                 event.preventDefault(); // Prevent default link behavior
//                 const targetPage = link.getAttribute("href");
//                 loadPage(targetPage);
//             });
//         });
//     }

//     // Initialize page functionality when the DOM is loaded
//     initializePage();
// });
  

function addToCart(itemName, price, buttonId) {
    
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    
    cartItems.push({ name: itemName, price: price });

    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    let button = document.getElementById(buttonId);
    button.textContent = 'Added to Cart';
    button.disabled = true;

    window.location.href = "cart.html";
}

function updateCartDisplay() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let cartList = document.getElementById('cart-items');
    let totalPrice = 0;

    cartList.innerHTML = '';

    cartItems.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - R${item.price}`;
        cartList.appendChild(li);

        totalPrice += parseFloat(item.price);
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

window.onload = updateCartDisplay;


 function removeFromCart(index) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems.splice(index, 1);

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    updateCartDisplay();
}

function updateCartDisplay() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let cartList = document.getElementById('cart-items');
    let totalPrice = 0;

    cartList.innerHTML = '';

    cartItems.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - R${item.price}`;
        
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            removeFromCart(index);
        };

        li.appendChild(removeButton);
        cartList.appendChild(li);

        totalPrice += parseFloat(item.price);
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

window.onload = updateCartDisplay;



function addToCart(itemName, price, buttonId) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

   
    cartItems.push({ name: itemName, price: price });

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    let button = document.getElementById(buttonId);
    button.textContent = 'Added to Cart';
    button.disabled = true;

    // Redirect to the cart page
    // window.location.href = "cart.html";
}

//caro
document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;

    function showSlides() {
        const slides = document.querySelectorAll('.carousel-inner img');
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        const slideWidth = slides[0].clientWidth;
        document.querySelector('.carousel-inner').style.transform = `translateX(${-slideIndex * slideWidth}px)`;
    }

    function nextSlide() {
        slideIndex++;
        showSlides();
    }

    function prevSlide() {
        slideIndex--;
        showSlides();
    }

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    showSlides();
});


// carddddddd




