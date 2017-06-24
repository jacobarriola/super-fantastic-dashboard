<template>
  <div id="app">
    <unsplash-background></unsplash-background>
    <h1>{{ title }}</h1>
    <todo-list></todo-list>
  </div>
</template>

<script>
import todoList from './components/Todo-List.vue';
import unsplashBackground from './components/Unsplash-Background.vue';

export default {
  name: 'app',
  components: { todoList, unsplashBackground },
  data() {
    return {
      title: 'Super Fantastic Dashboard'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
