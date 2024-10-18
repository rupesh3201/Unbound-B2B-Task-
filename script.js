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

   
        if (
            !firstName || !lastName || !email || !phone || !companyName || 
            !jobTitle || !companySize || !country || !industry || !terms
        ) {
            alert("Please fill in all required fields and agree to the terms.");
            return;
        }

     
        if (!terms) {
            alert("You must agree to receive information.");
            return;
        }

        // Create an object to store the form data
        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            companyName: companyName,
            jobTitle: jobTitle,
            companySize: companySize,
            country: country,
            industry: industry,
            newsletter: newsletter,
            terms: terms
        };

    
        localStorage.setItem('formData', JSON.stringify(formData));

        alert('Data Sent Sucessfully We Will Connect U Soon!');

        form.reset();
    });
});
