let firstimage = document.getElementById("first");
let secondimage = document.getElementById("second");
let thirdimage = document.getElementById("third");
let firstdefault = "img/4DFWD 4 RUNNING SHOES/1.avif";
let firsthover = "img/4DFWD 4 RUNNING SHOES/2.avif";
let seconddefault = "img/Kaptir 3.0 Shoes/1.avif";
let secondhover = "img/Kaptir 3.0 Shoes/2.avif";
let thirddefault = "img/Ultraboost 5X Shoes/1.avif";
let thirdhover = "img/Ultraboost 5X Shoes/2.avif";

[firstimage, secondimage, thirdimage].forEach(container => {
    container.style.transition = "background-image 0.5s ease";
});

firstimage.addEventListener("mouseenter", () => {
    firstimage.style.backgroundImage = `url('${firsthover}')`;
});
firstimage.addEventListener("mouseleave", () => {
    firstimage.style.backgroundImage = `url('${firstdefault}')`;
});

secondimage.addEventListener("mouseenter", () => {
    secondimage.style.backgroundImage = `url('${secondhover}')`;
});
secondimage.addEventListener("mouseleave", () => {
    secondimage.style.backgroundImage = `url('${seconddefault}')`;
});

thirdimage.addEventListener("mouseenter", () => {
    thirdimage.style.backgroundImage = `url('${thirdhover}')`;
});
thirdimage.addEventListener("mouseleave", () => {
    thirdimage.style.backgroundImage = `url('${thirddefault}')`;
});


let image = [
    "img/fashion-5515135_1920.jpg",
    "img/pexels-atomlaborblog-1153838.jpg",
    "img/pexels-pixabay-267301.jpg"
];

let text = [
    "Vintage Combat Boots", 
    "Running Shoes", 
    "Urban Luxe Loafers"
];


let currentindex = 0;

let nextbtn = document.getElementById("next");
let prevbtn = document.getElementById("prev");
let imageslider = document.getElementById("image-slider");
let textval = document.getElementById("textval");

function updateimagetxt(){
    imageslider.src = image[currentindex];
    textval.textContent = text[currentindex];
}

prevbtn.addEventListener("click", () => {
    currentindex = (currentindex > 0) ? currentindex - 1 : image.length - 1;
    updateimagetxt();
});

nextbtn.addEventListener("click", () => {
    currentindex = (currentindex < image.length - 1) ? currentindex + 1 : 0;
    updateimagetxt();
});

updateimagetxt();
    
const addtocart = document.querySelectorAll(".add-to-cart-btn");

addtocart.forEach(button => {
    button.addEventListener("click", () => {
        const productdetails = {
            imageSrc: button.getAttribute("data-image"),
            brand: "Adidas",
            item: button.getAttribute("data-name"),
            price: `$${button.getAttribute("data-price")}`,
            quantity: 1,
            total: `$${button.getAttribute("data-price")}`
        };

        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        let existingproduct = cartItems.find(item => item.item === productdetails.item);

        if (existingproduct) {
            alert(`"${productdetails.item}" is already in the cart. You can change the quantity in the cart page.`);
        } else {
            cartItems.push(productdetails);
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            alert(`"${productdetails.item}" has been added to the cart.`);
        }
    });
});

function menwomenpage() {
    alert("You're getting redirected to the women page");
    const gender = document.getElementById("gender").value;
    if (gender === "Men") {
        window.location.href = "index.html";
    } else if (gender === "Women") {
        window.location.href = "index2.html";
    }
}