import axios from "axios";
export default {
  state: {
    todos: [],
  },
  getters: {
    myToDos(state) {
      return state.todos;
    },
  },
  mutations: {
    setToDos(state, todos) {
      state.todos = todos;
    },
    setToDo(state, newToDos) {
      state.todos.unshift(newToDos);
    },
    removeToDos(state, removeId) {
      state.todos = state.todos.filter((todo) => {
        return todo.id != removeId;
      });
    },
    updateToDo(state, todo) {
      state.todos.forEach((t) => {
        if (t.id == todo.id) {
          t = todo;
        }
      });
    },
  },
  actions: {
    async getToDos({ commit }) {
      let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      let todos = res.data;
      console.log(todos);
      commit("setToDos", todos);
    },
    async addToDos(context, newToDos) {
      let res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        newToDos
      );
      console.log(res.data);
      context.commit("setToDo", newToDos);
    },
    async deleteToDos(context, removeId) {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${removeId}`,
        removeId
      );
      context.commit("removeToDos", removeId);
    },
    async filterToDos(context, limit) {
      let res = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
      );
      console.log(res);
      context.commit("setToDos", res.data);
    },
    async updateToDos(context, todo) {
      let res = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
        todo
      );
      console.log(res);
      context.commit("updateToDo", todo);
    },
  },
};
