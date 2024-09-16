document.getElementById('transaction-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    // Get the form values
    const amount = document.getElementById('amount').value;
    const transactionType = document.getElementById('transaction-type').value;
    const redirectUrl = document.getElementById('redirect-url').value;
    const callbackUrl = document.getElementById('callback-url').value;
    const customerName = document.getElementById('customer-name').value;
    const customerEmail = document.getElementById('customer-email').value;
    const customerPhone = document.getElementById('customer-phone').value;
    
    // Display the right card with form data
    document.getElementById('display-amount').innerText = amount;
    document.getElementById('display-transaction-type').innerText = transactionType;
    document.getElementById('display-redirect-url').innerText = redirectUrl;
    document.getElementById('display-callback-url').innerText = callbackUrl;
    document.getElementById('display-customer-name').innerText = customerName;
    document.getElementById('display-customer-email').innerText = customerEmail;
    document.getElementById('display-customer-phone').innerText = customerPhone;
    
    // Show the right card and adjust the layout
    document.getElementById('details-card').style.display = 'block';
    document.querySelector('.left-card').classList.add('half-width');
});
