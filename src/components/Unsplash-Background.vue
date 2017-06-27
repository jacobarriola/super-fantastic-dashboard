<template>
  <div class="unsplash-info" v-show="backgroundImage.url">
    <a class="unsplash-info__link" target="_blank" href="https://unsplash.com/">Unsplash</a>
    <span>-</span>
    <a class="unsplash-info__link" target="_blank" :href="backgroundImage.creatorUrl + '?utm_source=over&utm_medium=referral&utm_campaign=api-credit'">
      {{ backgroundImage.creatorName }}
    </a>
    <p class="unsplash-info__location">{{ backgroundImage.location }}</p>
  </div>
</template>

<script>
  export default {
    name: 'unsplashBackground',
    data() {
      return {
        colors: ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#16a085', '#27ae60',
          '#2980b9', '#8e44ad', '#2c3e50', '#f1c40f', '#e67e22', '#e74c3c', '#95a5a6', '#f39c12',
          '#d35400', '#c0392b', '#7f8c8d'],
        backgroundImage: {
          creatorName: '',
          creatorUrl: '',
          location: '',
          url: ''
        }
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
          this.backgroundImage.location = '';
          this.backgroundImage.url = response.urls.regular;
          document.body.style.backgroundImage = `url(${this.backgroundImage.url})`;
          this.backgroundImage.creatorName = response.user.name;
          this.backgroundImage.creatorUrl = response.user.links.html;
          this.backgroundImage.location = response.location.title;
        })
        .catch(() => {
          document.body.style.backgroundColor = this.randomColor;
        });
    }
  }
</script>

<style lang="scss">
  body {
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
  }
  .unsplash-info {
    position: fixed;
    top: 0;
    left: 0;
    padding: 1.5em;
    width: 100vw;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
    text-align: left;
    color: #fff;

    > .unsplash-info__location {
      padding: 0;
      margin: 0;
    }

    > .unsplash-info__link {
      color: rgba(255, 255, 255, 0.5);
      text-decoration: none;

      &:hover {
        color: #42b983;
      }
    }
  }
</style>
