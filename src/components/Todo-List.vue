<template>
  <div class="todo-list">
    <ul>
      <li v-for="todo in todos" class="todo-item">
        <!-- <todo-item :todo="todo"></todo-item> -->
        <input type="checkbox" v-model="todo.completed" class="checkbox">
        <div class="item-content">
          <span class="title">{{ todo.title }}</span>
          <p class="note">{{ todo.notes }}</p>
        </div>
        <div class="item-actions">
          <a href="#" class="item-action">
            <i class="fa fa-check-circle-o"></i>
          </a>
          <a href="#" class="item-action">
            <i class="fa fa-trash-o"></i>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import todoItem from './Todo-Item.vue';
import { data } from '../sample-data.js';

export default {
  name: 'todoList',
  // components: { todoItem },
  data() {
    return {
      todos: data
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

  .checkbox {
    position: relative;
    top: -25px;
  }

  .todo-item {
    margin-bottom: 20px;
  }

  .item-content {
    display: inline-block;
    position: relative;
    left: 10px;

    > .title {
      font-size: 1.2em;
    }

    > .note {
      margin: 0px;
      color: fade-out(#fff, 0.5);
    }
  }

  .item-actions {
    display: inline-block;
    float: right;
  }

  .item-action {
    color: #fff;
    margin-left: 20px;

    &:hover {
      color: #42b983;
    }
  }
</style>