<template>
    <div>
        <input type="text" placeholder="Add Title..."  autofocus v-model="newTodo.title" maxlength="24" class="todo-title">
        <input type="text"  placeholder="Add Note..." v-model="newTodo.notes" maxlength="28" @keyup.enter="addTodo(newTodo)" :disabled="!newTodo.title" class="todo-notes">
    </div>
</template>

<script>
  export default {
    name: 'todoAdd',
    data() {
      return {
        newTodo: {
          title: '',
          notes: '',
          completed: false
        }
      }
    },
    methods: {
      addTodo() {
        let todoCopy = JSON.parse(JSON.stringify(this.newTodo));
        this.$emit('todoAdded', todoCopy);
        this.newTodo.title = '';
        this.newTodo.notes = '';
      }
    }
  }
</script>

<style lang="scss" scoped>
    div {
        /*border: 1px solid red;*/
        display: flex;
        justify-content: space-around;
    }
    .todo-title, .todo-notes {
        position: relative;
        left: 2px;
        height: 1.8em;
        padding: 0.3em;
        border-radius: 2px;
        width: 100%;
        margin-right: 0.5em;
    }
</style>