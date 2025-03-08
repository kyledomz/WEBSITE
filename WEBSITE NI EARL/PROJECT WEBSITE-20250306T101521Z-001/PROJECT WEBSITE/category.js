polo = document.querySelector('.polo');
polo.onclick = function() {
    navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
}

function buyProduct(productName, price) {
    alert('You bought ' + productName + ' for ' + '₱' + price); 
}