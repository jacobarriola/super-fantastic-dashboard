<template>
  <div>
    <input type="checkbox" v-model="todo.completed" class="checkbox" @change="updateTodo(todo)">
    <div class="item-content" :class="{ completed: todo.completed }">
      <span class="title">{{ todo.title }}</span>
      <p class="note">{{ todo.notes }}</p>
    </div>
    <div class="item-actions">
      <a href="#" class="item-action">
        <i class="fa fa-check-circle-o" :class="{ completed: todo.completed }"></i>
      </a>
      <a @click.prevent="deleteTodo(todo)" href="#" class="item-action">
        <i class="fa fa-trash-o"></i>
      </a>
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
    },
    methods: {
      updateTodo(todo) {
        this.$store.dispatch('updateTodo',
          {
            title: todo.title,
            notes: todo.notes,
            completed: todo.completed
          }
        );
      },
      deleteTodo(todo) {
        if (confirm('Are you sure?')) {
          this.$store.dispatch('deleteTodo', todo);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
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
  i.completed {
    color: #42b983;
  }
  div.completed {
    text-decoration: line-through;
  }
</style>