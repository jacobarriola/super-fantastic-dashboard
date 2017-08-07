import Vue from 'vue'
import Vuex from 'vuex'
import { data } from './sample-data';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: []
  },
  actions: {
    getSampleData(context) {
      data.forEach( todo => {
          context.commit('addTodo', todo);
        }
      )
    },
    addTodo( context, newTodo ) {
      context.commit('addTodo', newTodo);
    }
  },  
  mutations: {
    addTodo(state, newTodo) {
      state.todos.push(newTodo)
    }
  },
})

export default store;