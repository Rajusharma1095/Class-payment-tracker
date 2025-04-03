document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let data = {
        name: document.getElementById("name").value,
        class: document.getElementById("class").value,
        amount: document.getElementById("amount").value,
    };

    fetch("https://script.google.com/macros/s/AKfycbwUiUOE5DZQVfyOniO3AKWekqF6WBGXKbWjkKBA49L7o-eKguDnIO_GquUzu4vS8S7E/exec", {  // Replace with your deployment URL
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.text())
    .then(data => alert("Payment Recorded Successfully!"))
    .catch(error => console.error("Error:", error));
});
