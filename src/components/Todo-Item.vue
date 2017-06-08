<template>
  <div class="container">
    <input type="checkbox" v-model="todo.completed">
    <div>
      <h2>{{ todo.title }}</h2>
      <p>{{ todo.notes }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todoItem',
    props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  h2 {
    font-size: 1.5em;
    line-height: 1;
    margin-bottom: .25em;
    margin-top: 0;
  }

  p {
    margin-top: 0;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input[type="checkbox"] {
    font-size: 3em;
  }
</style>