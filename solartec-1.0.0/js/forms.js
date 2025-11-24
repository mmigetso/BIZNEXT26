
const scriptURL = 'https://script.google.com/macros/s/AKfycbwRSoRVxgZK93cHOna7nVix-1e2iPBRy_lk5ZW5-kYbbYURDOZZNSvxBS94TL8W3uo7/exec';

// --- LOGIC FOR CONTACT FORM ---
const contactForm = document.forms['biznext-contact-form'];

// Only run this code if the Contact Form exists on this page
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submit-btn');
        const alertBox = document.getElementById('form-alert');

        submitBtn.disabled = true;
        submitBtn.innerHTML = "Sending...";

        fetch(scriptURL, { method: 'POST', body: new FormData(contactForm)})
        .then(response => {
            alertBox.style.display = 'block';
            alertBox.className = 'mt-3 text-center text-success';
            alertBox.innerHTML = "Thank you! Your message has been sent.";
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = "Send Message";
            setTimeout(() => { alertBox.style.display = 'none'; }, 5000);
        })
        .catch(error => {
            alertBox.style.display = 'block';
            alertBox.className = 'mt-3 text-center text-danger';
            alertBox.innerHTML = "Error! Something went wrong.";
            submitBtn.disabled = false;
            submitBtn.innerHTML = "Send Message";
            console.error('Error!', error.message);
        });
    });
}

// --- LOGIC FOR QUOTE FORM ---
const quoteForm = document.forms['biznext-quote-form'];

// Only run this code if the Quote Form exists on this page
if (quoteForm) {
    quoteForm.addEventListener('submit', e => {
        e.preventDefault();

        const quoteBtn = document.getElementById('quote-submit-btn');
        const quoteAlert = document.getElementById('quote-alert');
        
        quoteBtn.disabled = true;
        quoteBtn.innerHTML = "Submitting...";

        fetch(scriptURL, { method: 'POST', body: new FormData(quoteForm)})
        .then(response => {
            quoteAlert.style.display = 'block';
            quoteAlert.className = 'mt-3 text-center text-success';
            quoteAlert.innerHTML = "Quote Request Sent Successfully!";
            quoteForm.reset();
            quoteBtn.disabled = false;
            quoteBtn.innerHTML = "Submit";
            setTimeout(() => { quoteAlert.style.display = 'none'; }, 5000);
        })
        .catch(error => {
            quoteAlert.style.display = 'block';
            quoteAlert.className = 'mt-3 text-center text-danger';
            quoteAlert.innerHTML = "Error! Please try again.";
            quoteBtn.disabled = false;
            quoteBtn.innerHTML = "Submit";
            console.error('Error!', error.message);
        });
    });
}