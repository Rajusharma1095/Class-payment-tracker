document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('paymentForm');
    const statusMessage = document.getElementById('statusMessage');
    
    // Replace this URL with your actual Google Apps Script Web App URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyjE_CcJGErETq8uK7TNQHw_aIKpPuhEiAu9h0vlRdHeVlYjT5JatRA9idj4vqp3Ae0lA/exec';
    
    form.addEventListener('submit', e => {
        e.preventDefault();
        submitForm();
    });
    
    function submitForm() {
        // Collect form data
        const formData = {
            studentName: document.getElementById('studentName').value,
            studentId: document.getElementById('studentId').value,
            className: document.getElementById('className').value,
            paymentAmount: document.getElementById('paymentAmount').value,
            paymentDate: document.getElementById('paymentDate').value,
            paymentMethod: document.getElementById('paymentMethod').value,
            notes: document.getElementById('notes').value
        };
        
        // Display loading state
        statusMessage.innerHTML = 'Submitting payment information...';
        statusMessage.className = '';
        statusMessage.classList.add('info');
        statusMessage.classList.remove('hidden');
        
        // Send data to Google Apps Script
        fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            statusMessage.innerHTML = 'Payment information submitted successfully!';
            statusMessage.className = '';
            statusMessage.classList.add('success');
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            statusMessage.innerHTML = 'There was an error submitting your payment. Please try again.';
            statusMessage.className = '';
            statusMessage.classList.add('error');
        });
    }
});
