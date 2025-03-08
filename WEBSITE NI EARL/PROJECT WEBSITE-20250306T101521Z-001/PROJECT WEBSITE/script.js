polo = document.querySelector('.polo');
polo.onclick = function() {
    navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
}


// Set the date we're counting down to (replace with your desired new year's date)
const newYearDate = new Date("January 1, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time remaining
    const distance = newYearDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');


    // Update the HTML with the new values
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "EXPIRED";
    }
}, 1000);

function buyProduct(productName, price) {
    alert('You bought ' + productName + ' for ' + '₱' + price);
    // You can customize this function to add the item to a shopping cart or perform other actions.
}
