// Ensure the DOM is fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    // Add submit event listener
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior (page reload)
        sendEmail(); // Call the sendEmail function
    });
});

// Your existing sendEmail function
function sendEmail() {
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Construct email body
    const emailBody = `
        <h2>Contact Form Submission</h2>
        <p><strong>Your Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;
    

    // Send email using SMTPJS  
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "csscience20@gmail.com",
        Password: "656BED57B5A30A35D675A07DA221FAAD271C",
        To: "anilanazir7@gmail.com", 
        From: document.getElementById('email').value,
        Subject: "form submission",
        Body: emailBody
       
    }).then(
        message => {
            const form = document.getElementById('contact-form'); 
            if (message == 'OK') {
                swal("Good job!", "email sent!", "success");
                form.reset(); 
            } else {
                swal("Error", "email not sent", "error");
                form.reset(); 
            }
           
        }
    ).catch(
        error => {
            console.error("SMTP connection error:", error);
            swal("Error", "There was a problem connecting to the SMTP server.", "error");
        }
    );
    
}



