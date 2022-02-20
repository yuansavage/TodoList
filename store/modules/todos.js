export const namespaced = true

export const state = {
  todos: []
}

export const mutations = {
  setTodos(state, todos) {
    state.todos = todos
  },
  addTodo(state, todo) {
    state.todos.push(todo);
  },
  removeTodo(state, todo) {
    const index = state.todos.indexOf(todo);
    state.todos.splice(index, 1);
  },
  toggleTodo(state, bool) {
		todo.done = bool;
	}
}

export const actions = {
  async setTodos({ commit }) {
    try {
      const { data } = await this.$axios.get('/todos')
      if (data) commit('setTodos', data)
    } catch (error) {
      console.log(error);
    }
  },
  async addTodo({ commit }, todo) {
    try {
      let todo_data = {"content":todo,"done":false};
      const { data } = await this.$axios.post('/todos', todo_data)
      
      if (data) commit('addTodo', data)
    } catch (error) {
      console.log(error);
    }
  },
  async removeTodo({ commit }, todo) {
    try {
      
      await this.$axios.delete(`/todos/${todo.id}`)
      commit('removeTodo', todo)
    } catch (error) {
      console.log(error);
    }
  },
  async toggleTodo({ commit }, todo) {
    try {
      const obj = {done:!todo.done}
      const { data } = await this.$axios.patch(`/todos/${todo.id}`,obj)
     // if (data) commit('toggleTodo', !todo.done)
    } catch (error) {
      console.log(error);
    }
  },
}

export const getters = {
  todos(state) {
    return state.todos
  }
}