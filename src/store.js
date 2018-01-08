import Vue from 'vue';
import Vuex from 'vuex';
import { data } from './sample-data';

Vue.use(Vuex);

const store = new Vuex.Store({
  // strict: true,
  state: {
    todos: []
  },
  actions: {
    getSampleData(context) {
      data.forEach((todo) => {
        context.commit('addTodo', todo);
      });
    },
    addTodo(context, newTodo) {
      context.commit('addTodo', newTodo);
    },
    updateTodo(context, todo) {
      context.commit('updateTodo', todo);
    },
    deleteTodo(context, todo) {
      context.commit('deleteTodo', todo);
    },
  },
  mutations: {
    addTodo(state, newTodo) {
      state.todos.push(newTodo);
    },
    updateTodo(state, modifiedTodo) {
      const index = state.todos.findIndex((todo) => {
        return todo.title === modifiedTodo.title && todo.notes === modifiedTodo.notes;
      });
      state.todos.splice(index, 1, modifiedTodo);
      // https://vuejs.org/v2/guide/list.html#Caveats
      // state.todos[index] = modifiedTodo;
      // state.todos[index] = Object.assign({}, modifiedTodo);
    },
    deleteTodo(state, todo) {
      const index = state.todos.indexOf(todo);
      state.todos.splice(index, 1);
    },
  },
});

export default store;
