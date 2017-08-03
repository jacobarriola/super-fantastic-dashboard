<template>
  <div class="todo-list">
    <todo-add @todoAdded="addTodo"></todo-add>
    <ul>
      <li v-for="todo in todos" class="todo-item">
        <todo-item :todo="todo"></todo-item>
      </li>
    </ul>
  </div>
</template>

<script>
import todoItem from './Todo-Item.vue';
import todoAdd from './Todo-Add.vue';
import { data } from '../sample-data.js';

export default {
  name: 'todoList',
  components: { todoItem, todoAdd },
  data() {
    return {
      todos: data
    }
  },
  methods: {
      addTodo(title, notes) {
        this.todos.push({ title, notes, completed: false});
      }
    }
}
</script>

<style lang="scss" scoped>
  .todo-list {
    position: absolute;
    right: 2em;
    bottom: 2em;
    padding: 1em;
    width: 20em;
    border-radius: 4px;
    background-color: fade-out(#000, 0.2);
    text-align: left;
    color: #fff;
  }
</style>