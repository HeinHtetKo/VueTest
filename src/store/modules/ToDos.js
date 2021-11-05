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
  },
  actions: {
    async getToDos({ commit }) {
      let res = await axios.get(
        "https://my-json-server.typicode.com/typicode/demo/db"
      );
      let todos = res.data;
      console.log(todos);
      commit("setToDos", todos);
    },
  },
};
