var contactMethod = document.getElementById('contactMethod');
var contactNotice = document.getElementById('contactNotice');
var contactInput = document.getElementById('contactInput');

contactMethod.addEventListener('change', function() {
    if (this.value === "email") {
        contactNotice.textContent = "Enter Your Email";
        contactNotice.style.display = "block";
        contactInput.style.display = "block";
    } else if (this.value === "phone") {
        contactNotice.textContent = "Enter Your Phone";
        contactNotice.style.display = "block";
        contactInput.style.display = "block";
    } else {
        contactNotice.style.display = "none";
        contactInput.style.display = "none";
    }
});