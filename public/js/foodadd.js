const foodaddFormHandler = async (event) => {
  event.preventDefault();
  
  const address = document.querySelector('.address').value.trim();
  const food_types = document.querySelector('.food_types').value.trim();
  const allergens = document.querySelector('.allergens').value.trim();
  const start_time = document.querySelector('.start_time').value.trim();
  const end_time = document.querySelector('.end_time').value.trim();  
  const comment = document.querySelector('.comment').value.trim();

  if ( address && food_types && allergens && start_time && end_time && comment ) {
    const response = await fetch('/api/foodpostings', {
      method: 'POST',
      body: JSON.stringify({ address, food_types , allergens , start_time , end_time, comment }),
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
  .querySelector('.foodadd')
  .addEventListener('submit', foodaddFormHandler);

  