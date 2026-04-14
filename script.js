function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

function buyNow() {
    alert("Redirecting to purchase...");
}

const countDownDate = new Date().getTime() + 86400000;

const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("timer").innerHTML = hours + "h " + minutes + "m";

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);