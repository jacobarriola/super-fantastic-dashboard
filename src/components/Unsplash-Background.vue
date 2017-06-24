<template>
  <div></div>
</template>

<script>
  export default {
    name: 'unsplashBackground',
    data() {
      return {
        colors: ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#16a085', '#27ae60',
        '#2980b9', '#8e44ad', '#2c3e50', '#f1c40f', '#e67e22', '#e74c3c', '#95a5a6', '#f39c12',
        '#d35400', '#c0392b', '#7f8c8d'],
        backgroundImage: ''
      }
    },
    computed: {
      randomColor() {
        return this.colors[Math.floor(Math.random() * this.colors.length)]
      }
    },
    created() {
      const request = new Request('https://api.unsplash.com/photos/random?featured&orientation=landscape&collections=135648', {
          method: 'GET',
          headers: new Headers({
            Authorization: 'Client-ID b325d6aa7cdaacc3b279aa500e0f091c1e3ae2b986270547a005dfe1835b78a9',
          })
      });
      fetch(request)
        .then(response => response.json())
        .then((response) => {
          this.backgroundImage = response.urls.regular;
          document.body.style.backgroundImage = `url(${this.backgroundImage})`;
        })
        .catch(() => {
          document.body.style.backgroundColor = this.randomColor;
        });
    }
  }
</script>

<style>
    body {
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: fixed;
        background-size: cover;
    }
</style>
