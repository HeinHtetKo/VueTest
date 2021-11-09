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
  },
};
