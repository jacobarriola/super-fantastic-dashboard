(function() {
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
        document.body.style.backgroundColor = '#005dab';
    });
}());