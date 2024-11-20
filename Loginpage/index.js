    // Email Validation
    document.getElementById('email').addEventListener('input', function () {
        const emailField = document.getElementById('email');
        const emailHelp = document.getElementById('emailHelp');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
        if (!emailRegex.test(emailField.value)) {
          emailHelp.textContent = 'Invalid email format. Example: user@example.com';
          emailHelp.style.color = 'red';
          emailField.style.borderColor = 'red';
        } else {
          emailHelp.textContent = 'Email looks good!';
          emailHelp.style.color = 'green';
          emailField.style.borderColor = 'green';
        }
      });
  
      // Phone Number Validation
      document.getElementById('phone').addEventListener('input', function () {
        const phoneField = document.getElementById('phone');
        const phoneHelp = document.getElementById('phoneHelp');
        const phoneRegex = /^\+?[1-9]\d{1,14}$|^\d{3}-\d{3}-\d{4}$/;
  
        if (!phoneRegex.test(phoneField.value)) {
          phoneHelp.textContent = 'Invalid phone number. Use formats like +1234567890 or 123-456-7890.';
          phoneHelp.style.color = 'red';
          phoneField.style.borderColor = 'red';
        } else {
          phoneHelp.textContent = 'Phone number looks good!';
          phoneHelp.style.color = 'green';
          phoneField.style.borderColor = 'green';
        }
      });
  
      // Password Validation and Confirmation
      document.getElementById('signupForm').addEventListener('submit', function (e) {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;
  
        if (!passwordRegex.test(password)) {
          e.preventDefault();
          alert('Password does not meet the security requirements!');
          return;
        }
  
        if (password !== confirmPassword) {
          e.preventDefault();
          alert('Passwords do not match! Please try again.');
          return;
        }
  
        const termsCheckbox = document.getElementById('termsCheckbox');
        const privacyCheckbox = document.getElementById('privacyCheckbox');
  
        if (!termsCheckbox.checked || !privacyCheckbox.checked) {
          e.preventDefault();
          alert('You must agree to the Terms & Conditions and Privacy Policy to proceed.');
        }
      });