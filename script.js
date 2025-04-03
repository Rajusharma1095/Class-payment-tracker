document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let data = {
        name: document.getElementById("name").value,
        class: document.getElementById("class").value,
        amount: document.getElementById("amount").value,
    };

    fetch("https://script.google.com/macros/s/AKfycbzg8d_ljSi58IkOlYPZfM2ueu47Ba29kcb5r-w2u_wCcHhyRU6nCeuEfBbkWDRBC3de-Q/exec", {  // Replace with your deployment URL
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.text())
    .then(data => alert("Payment Recorded Successfully!"))
    .catch(error => console.error("Error:", error));
});
