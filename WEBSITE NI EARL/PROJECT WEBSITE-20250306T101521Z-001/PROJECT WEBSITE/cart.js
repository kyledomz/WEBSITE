const product = [
    {
        id: 0,
        image: 'popular-1.png',
        title: 'Uniqlo DDF Sweatshirt',
        price: 450,
    },
    {
        id: 1,
        image: 'popular-4.png',
        title: 'Nike Cap',
        price: 500,
    },
    {
        id: 2,
        image: 'popular-3.png',
        title: 'Stussy Hoodie',
        price: 450,
    },
    {
        id: 3,
        image: 'jacket1.png',
        title: 'CARHARTT DETROIT MOSS GREEN',
        price: 500,
    },
    {
        id: 4,
        image: 'hoodie1.png',
        title: 'Hoodie 1',
        price: 500,
    },
    {
        id: 5,
        image: 'product-1.png',
        title: 'Abercrombie and Fitch Yellowish Polo',
        price: 299,
    },
    {
        id: 6,
        image: 'product-3.png',
        title: 'Uniqlo Dry Pique Stripe Polo',
        price: 499,
    },
    {
        id: 7,
        image: 'shorts-1.png',
        title: 'Cartoon and Letter Print Tie Dye Shorts',
        price: 450,
    },
];

const categories = [...new Set(product.map((item) => { return item }))];

let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>&#8369; ${price}.00</h2>` + // Use &#8369; for ₱
                "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
            `</div>
        </div>`
    );
}).join('');

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    const cartItemElement = document.getElementById("cartItem");
    const totalElement = document.getElementById("total");
    
    document.getElementById("count").innerHTML = cart.length;

    if (cart.length === 0) {
        cartItemElement.innerHTML = "Your cart is empty";
        totalElement.innerHTML = "&#8369; " + 0 + ".00"; // Use &#8369; for ₱
    } else {
        cartItemElement.innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total += price;

            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>&#8369; ${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${j++})'></i>
                </div>`
            );
        }).join('');

        totalElement.innerHTML = "&#8369; " + total + ".00";

        // Add a single "Buy" button for the entire cart
        cartItemElement.innerHTML += `<button onclick='buyItems()'>Buy Now</button>`;
    }
}

function buyItems() {
    const confirmation = confirm("Are you sure you want to buy the items in your cart?");
    if (confirmation) {
        let totalPrice = 0;

        // Accumulate total price
        cart.forEach((item) => {
            totalPrice += item.price;
        });

        // Display all prices in an alert
        alert(`Thank you for your purchase!\nTotal Price: ₱${totalPrice}.00`);

        // Add logic for the purchase (e.g., redirect to a payment page, update inventory, etc.)
        cart = []; // Clear the cart after purchase
        displaycart(); // Update the cart display
    }
}