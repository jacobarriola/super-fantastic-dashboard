<template>
  <div class="todo-list">
    <todo-add></todo-add>
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
// import { mapState } from 'vuex';

export default {
  name: 'todoList',
  components: { todoItem, todoAdd },
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  },
  // Get state using alternative mapState helper https://vuex.vuejs.org/en/state.html
  // computed: mapState(['todos']),
  created() {
    // load our sample data
    this.$store.dispatch('getSampleData');
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