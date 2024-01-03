let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');
let cartItemsContainer = document.querySelector(".cart-content"); // Renamed to avoid conflicts

cartIcon.addEventListener('click', () => {
    cart.classList.add("active");
});

closeCart.addEventListener('click', () => {
    cart.classList.remove("active");
});

if (document.readyState == 'loading') {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

let cartItemsArray = []; // Renamed to avoid conflicts

function ready() {
    var removeCartButtons = document.querySelectorAll('.cart-remove');
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    var quantityInputs = document.querySelectorAll('.cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    var addCartButtons = document.querySelectorAll('.add-cart');
    for (var i = 0; i < addCartButtons.length; i++) {
        var button = addCartButtons[i];
        button.addEventListener('click', addCartClicked);
    }

    // Call updateTotal here
    updateTotal();
    loadCartItems();
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    var cartBox = buttonClicked.parentElement; // Get the parent cart-box
    cartBox.remove();
    updateTotal();
    saveCartItems();
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
    saveCartItems();
    updateCartIcon()
}

function addCartClicked(event) {
    var button = event.target;
    var shopProduct = button.parentElement;

    var title = shopProduct.querySelector(".product-title").innerText;
    var price = shopProduct.querySelector(".price").innerText;
    var productImg = shopProduct.querySelector('.product-img').src;

    addProductToCart(title, price, productImg);
    updateTotal();
    saveCartItems();
    updateCartIcon()
}

function addProductToCart(title, price, productImg) {
    var cartItemNames = cartItemsContainer.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert("You have already added this item to the cart");
            return;
        }
    }
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box'); // Add 'cart-box' class to the new div

    var cartBoxContent = `
        <img src="${productImg}" alt="" class="cart-img" />
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" name="" id="" value="1" class="cart-quantity" />
        </div>
        <i class='bx bxs-trash-alt cart-remove'></i>
    `;

    cartShopBox.innerHTML = cartBoxContent;
    cartItemsContainer.appendChild(cartShopBox); // Append the new div to cartItems

    // Attach event listeners to elements inside cartShopBox
    cartShopBox.querySelector('.cart-remove').addEventListener('click', removeCartItem);
    cartShopBox.querySelector('.cart-quantity').addEventListener('change', quantityChanged);
    saveCartItems();
    updateCartIcon();
}

function updateTotal() {
    var cartBoxes = document.querySelectorAll('.cart-box');
    var total = 0;

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.querySelector(".cart-price");
        var quantityElement = cartBox.querySelector(".cart-quantity");

        var priceText = priceElement.innerText;
        // Extract the numerical part of the price and convert it to a float
        var price = parseFloat(priceText.replace(/[^\d.]/g, ""));
        var quantity = parseInt(quantityElement.value);

        total += price * quantity;
    }

    total = Math.round(total * 100) / 100;
    document.querySelector('.total-price').innerText = "$" + total;

    localStorage.setItem("cartTotal", total);
}

function saveCartItems() {
    var cartBoxes = document.getElementsByClassName('cart-box');
    var cartItems = [];

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var titleElement = cartBox.querySelector('.cart-product-title');
        var priceElement = cartBox.querySelector('.cart-price');
        var quantityElement = cartBox.querySelector('.cart-quantity');
        var productImg = cartBox.querySelector('.cart-img').src;

        var item = {
            title: titleElement.innerText,
            price: priceElement.innerText,
            quantity: quantityElement.value,
            productImg: productImg,
        };
        cartItems.push(item);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function loadCartItems() {
    var cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
        cartItems = JSON.parse(cartItems);

        for (var i = 0; i < cartItems.length; i++) {
            var item = cartItems[i];
            addProductToCart(item.title, item.price, item.productImg);
            var cartBoxes = document.getElementsByClassName('cart-box');
            var cartBox = cartBoxes[cartBoxes.length - 1];
            var quantityElement = cartBox.querySelector('.cart-quantity');
            quantityElement.value = item.quantity;
        }
    }
    var cartTotal = localStorage.getItem('cartTotal');
    if (cartTotal) {
        document.querySelector('.total-price').innerText = "$" + cartTotal;
    }
    updateCartIcon();
}

function updateCartIcon() {
    var cartBoxes = document.getElementsByClassName('cart-box');
    var quantity = 0;

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        quantity += parseInt(quantityElement.value);
    }
    var cartIcon = document.querySelector("#cart-icon");
    cartIcon.setAttribute("data-quantity", quantity);
}