document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let data = {
        name: document.getElementById("name").value,
        class: document.getElementById("class").value,
        amount: document.getElementById("amount").value
    };

    fetch("https://script.google.com/macros/s/AKfycbzg8d_ljSi58IkOlYPZfM2ueu47Ba29kcb5r-w2u_wCcHhyRU6nCeuEfBbkWDRBC3de-Q/exec", {  
        method: "POST",
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
