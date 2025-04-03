document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let data = {
        name: document.getElementById("name").value,
        class: document.getElementById("class").value,
        amount: document.getElementById("amount").value
    };

    fetch("https://script.google.com/macros/s/AKfycbzp-TvyoAkt3ZOAD6RZkp9vfNDxpGbj-NKJ21OpTCvKKCuB773N6FNcZ2dzlxOVWETpAw/exec", {  
        method: "POST",
        mode: "cors",
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
