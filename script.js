document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Get form field values
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const companyName = document.getElementById('companyName').value;
        const jobTitle = document.getElementById('firstName').value; // 
        const companySize = document.getElementById('companySize').value;
        const country = document.getElementById('country').value;
        const industry = document.getElementById('industry').value;
        const newsletter = document.getElementById('newsletter').checked;
        const terms = document.getElementById('terms').checked;

   
    });
});
