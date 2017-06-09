(function() {
    let colors = [
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

    let color = colors[Math.floor(Math.random()*colors.length)];

    axios.get('https://api.unsplash.com/photos/random?featured&orientation=landscape', {
        params: {
            client_id: 'b325d6aa7cdaacc3b279aa500e0f091c1e3ae2b986270547a005dfe1835b78a9',
            collections: 135648
        }
    }).then(function (response) {
        // console.log(response);
        document.body.style.backgroundImage = "url(" + response.data.urls.regular + ")";
    }).catch(function (error) {
        console.log(error);
        document.body.style.backgroundColor = color;
    });
}());