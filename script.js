document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let data = {
        name: document.getElementById("name").value,
        class: document.getElementById("class").value,
        amount: document.getElementById("amount").value
    };

    fetch("https://script.google.com/macros/s/AKfycbz2bWvhnCERTaSjIxebKyu4GPP3Ga0dq4En8deACu2kX4AHQUIRyVyn5WniqUS519kemg/exec", {  
        method: "POST",
        mode: "cors", // Allow CORS
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        console.log("Server Response:", data);
        alert("Payment Recorded Successfully!");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong! Check Console.");
    });
});
