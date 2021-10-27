import Vuex from "vuex";
import Vue from "vue";
import ToDos from "./modules/ToDos";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { ToDos },
});
