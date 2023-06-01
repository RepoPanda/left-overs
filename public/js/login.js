const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login-dona').value.trim();
  const password = document.querySelector('#password-login-dona').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/donators/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-signup-dona').value.trim();
  const password = document.querySelector('#password-signup-dona').value.trim();
  const first_name = document.querySelector('#firstname-signup-dona').value.trim();
  const last_name = document.querySelector('#lastname-signup-dona').value.trim();
  const business_name = document.querySelector('#business-signup-dona').value.trim();
  const telephone = document.querySelector('#phone-signup-dona').value.trim();


  if ( email && password && first_name && last_name && business_name && telephone) {
    const response = await fetch('/api/donators', {
      method: 'POST',
      body: JSON.stringify({ email, password , first_name , last_name , business_name, telephone }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-dona-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-dona-form')
  .addEventListener('submit', signupFormHandler);
