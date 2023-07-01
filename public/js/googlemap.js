async function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: { lat: 38, lng: -98 },
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.

  const response = await fetch('/api/foodpostings');
  const foodPostings = await response.json();
  if (response.ok) {
    console.log(foodPostings);
  }

  const mappedDonations = [];

  for (let i = 0; i < foodPostings.length; i++) {
    mappedDonations.push([
      {
        lat: parseFloat(foodPostings[i].latitude),
        lng: parseFloat(foodPostings[i].longitude),
      },
      `${foodPostings[i].address}`,
    ]);
  }
  console.log(mappedDonations);

  // Create an info window to share between markers.
  // var bounds = new google.maps.LatLngBounds();
  const infoWindow = new google.maps.InfoWindow();
  const bounds = new google.maps.LatLngBounds();

  // Create the markers.
  mappedDonations.forEach(([position, title], i) => {
    console.log(position);
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(position.lat,position.lng),
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });

    bounds.extend (marker.position); 
   
    // Add a click listener for each marker, and set up the info window.
    marker.addListener('click', () => {
      infoWindow.close();
      // infoWindow.setContent(marker.getTitle());
      infoWindow.setContent(createInfoWindowContent(foodPostings));
      infoWindow.open(marker.getMap(), marker);
    });

   

    function createInfoWindowContent(foodPostings) {
      const content = `
        <h3> ${foodPostings[i].food_types}</h3>
        <p>address: ${foodPostings[i].address}</p>
        <p>allergens: ${foodPostings[i].allergens}</p>
        `;
      return content;
    }
  });
  map.fitBounds(bounds);
}

window.initMap = initMap;
