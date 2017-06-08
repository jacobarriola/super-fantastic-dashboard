<template>
  <div>
    <p>I'm the todos component</p>
    <ul>
      <li v-for="todo in todos">
        <todo-item :todo="todo"></todo-item>            
      </li>
    </ul>
  </div>
</template>

<script>
import todoItem from './Todo-Item.vue';
import { data } from '../sample-data.js';

export default {
  name: 'todoList',
  components: { todoItem },
  data() {
    return {
      todos: data
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  margin-top: 2.5em;
}

li {
  margin-bottom: .75em;
}
</style>