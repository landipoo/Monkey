
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");
});

document.querySelectorAll('.close').forEach(button => {
    button.addEventListener('click', function () {
       
        window.location.href = 'gallery.html';
    });
});


document.getElementById('contact-form').addEventListener('submit', function (event) {
    const emailField = document.getElementById('email');
    if (!emailField.value.includes('@')) {
        alert('Please enter a valid email address.');
        event.preventDefault(); 
    }
});
