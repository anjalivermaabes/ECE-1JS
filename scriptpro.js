// =======================
// CART FUNCTIONALITY
// =======================

let cartCount = localStorage.getItem("cartCount") || 0;

document.getElementById("cartCount").innerText = cartCount;

function addToCart(productName) {

    cartCount++;

    localStorage.setItem("cartCount", cartCount);

    document.getElementById("cartCount").innerText = cartCount;

    alert(productName + " added to cart successfully!");
}


// =======================
// SEARCH FUNCTIONALITY
// =======================

function searchProducts() {

    let input =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    let products =
        document.querySelectorAll(".product");

    products.forEach(product => {

        let title =
            product.querySelector("h3")
            .innerText
            .toLowerCase();

        if (title.includes(input)) {
            product.style.display = "block";
        }
        else {
            product.style.display = "none";
        }
    });
}


// =======================
// ACCOUNT BUTTON
// =======================

document.getElementById("accountBtn")
.addEventListener("click", () => {

    let userName =
        prompt("Enter your name:");

    if (userName && userName.trim() !== "") {

        localStorage.setItem("userName", userName);

        alert("Welcome, " + userName + "!");
    }
});


// =======================
// ORDERS BUTTON
// =======================

document.getElementById("ordersBtn")
.addEventListener("click", () => {

    let orders =
        localStorage.getItem("cartCount") || 0;

    alert(
        "You currently have " +
        orders +
        " item(s) in your cart/orders."
    );
});


// =======================
// HERO IMAGE SLIDER
// =======================

const banners = [
    "images/banner1.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg"
];

let currentBanner = 0;

const heroImage =
    document.getElementById("heroImage");

function showBanner(index) {

    heroImage.src = banners[index];
}

function nextBanner() {

    currentBanner++;

    if (currentBanner >= banners.length) {
        currentBanner = 0;
    }

    showBanner(currentBanner);
}

function prevBanner() {

    currentBanner--;

    if (currentBanner < 0) {
        currentBanner = banners.length - 1;
    }

    showBanner(currentBanner);
}


// Auto slide every 4 seconds

setInterval(nextBanner, 4000);


// =======================
// PREVIOUS/NEXT BUTTONS
// =======================

document.querySelector(".right")
.addEventListener("click", nextBanner);

document.querySelector(".left")
.addEventListener("click", prevBanner);


// =======================
// WELCOME MESSAGE
// =======================

window.onload = () => {

    let userName =
        localStorage.getItem("userName");

    if (userName) {

        console.log(
            "Welcome back, " + userName
        );
    }
};