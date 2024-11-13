document.addEventListener("DOMContentLoaded", () => {
    let firstimage = document.getElementById("first");
    let secondimage = document.getElementById("second");
    let thirdimage = document.getElementById("third");

    let firstdefault = "img/falcon shoes/1.webp";
    let firsthover = "img/falcon shoes/2.webp";
    let seconddefault = "img/4DFWD 4 RUNNING SHOES - women/1.avif";
    let secondhover = "img/4DFWD 4 RUNNING SHOES - women/2.avif";
    let thirddefault = "img/harden shoes/1.avif";
    let thirdhover = "img/harden shoes/2.avif";

    [firstimage, secondimage, thirdimage].forEach(container => {
        if (container) {
            container.style.transition = "background-image 1s ease";
        }
    });

    firstimage?.addEventListener("mouseenter", () => {
        firstimage.style.backgroundImage = `url('${firsthover}')`;
    });
    firstimage?.addEventListener("mouseleave", () => {
        firstimage.style.backgroundImage = `url('${firstdefault}')`;
    });

    secondimage?.addEventListener("mouseenter", () => {
        secondimage.style.backgroundImage = `url('${secondhover}')`;
    });
    secondimage?.addEventListener("mouseleave", () => {
        secondimage.style.backgroundImage = `url('${seconddefault}')`;
    });

    thirdimage?.addEventListener("mouseenter", () => {
        thirdimage.style.backgroundImage = `url('${thirdhover}')`;
    });
    thirdimage?.addEventListener("mouseleave", () => {
        thirdimage.style.backgroundImage = `url('${thirddefault}')`;
    });
});

function menwomenpage(){
    alert("You're getting redirected to the men page");
    const gender = document.getElementById("gender").value;
    if(gender === "Men"){
        window.location.href = "index.html";
    }
    else if(gender === "Women"){
        window.location.href = "index2.html";
    }
}

const addtocart = document.querySelectorAll(".add-to-cart-btn");

addtocart.forEach(button => {
    button.addEventListener("click", () => {
        const productdetails = {
            imageSrc: button.getAttribute("data-image"),
            brand: "Adidas",
            itemName: button.getAttribute("data-name"), // Renamed from "item" to "itemName"
            price: `$${button.getAttribute("data-price")}`,
            quantity: 1,
            total: `$${button.getAttribute("data-price")}`
        };

        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        let existingproduct = cartItems.find(item => item.itemName === productdetails.itemName); // Updated property name

        if (existingproduct) {
            alert(`"${productdetails.itemName}" is already in the cart. You can change the quantity in the cart page.`);
        } else {
            cartItems.push(productdetails);
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            alert(`"${productdetails.itemName}" has been added to the cart.`);
        }
    });
});