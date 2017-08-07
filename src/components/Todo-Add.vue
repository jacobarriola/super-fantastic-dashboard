<template>
    <div>
      <input type="text" placeholder="Add Title..." v-model="title" maxlength="22" autofocus class="todo-title">
      <input type="text"  placeholder="Add Note..." v-model="notes" maxlength="28" @keyup.enter="addTodo" :disabled="!title" class="todo-notes">
    </div>
</template>

<script>
  export default {
    name: 'todoAdd',
    data() {
      return {
          title: '',
          notes: ''
      }
    },
    methods: {
      addTodo() {
        this.$store.dispatch('addTodo', 
            { 
              title: this.title, 
              notes: this.notes,
              complete: false 
            } 
        )
        this.title = '';
        this.notes = '';
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