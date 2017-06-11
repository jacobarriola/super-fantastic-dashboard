(function () {
  "use strict";

  // Define palette of fallback colors
  const COLORS = [
    '#1abc9c', // Turquoise
    '#2ecc71', // Emerald
    '#3498db', // Peter River
    '#9b59b6', // Amethyst
    '#34495e', // Wet Asphalt
    '#16a085', // Green Sea
    '#27ae60', // Nephritis
    '#2980b9', // Belize Hole
    '#8e44ad', // Wisteria
    '#2c3e50', // Midnight Blue
    '#f1c40f', // Sun Flower
    '#e67e22', // Carrot
    '#e74c3c', // Alizarin
    '#95a5a6', // Concrete
    '#f39c12', // Orange
    '#d35400', // Pumpkin
    '#c0392b', // Pomegranate
    '#7f8c8d' // Asbestos
  ];

  // Randomly select fallback color
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];

  // Build request
  const request = new Request('https://api.unsplash.com/photos/random?featured&orientation=landscape&collections=135648', {
    method: 'GET',
    headers: new Headers({
      Authorization: 'Client-ID b325d6aa7cdaacc3b279aa500e0f091c1e3ae2b986270547a005dfe1835b78a9'
    })
  });

  // Make the request with fetch
  fetch(request)
    .then(response => response.json())
    .then((response) => {
      // console.log(response);
      document.body.style.backgroundImage = `url(${response.urls.regular})`;
    })
    .catch((error) => {
      console.log(error);
      // On error, set the background color to randomly selected color
      document.body.style.backgroundColor = color;
    });

}());