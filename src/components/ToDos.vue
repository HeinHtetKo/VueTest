<template>
  <div>
    <h1 class="text-primary text-center">All ToDos!!!</h1>
    <div class="container">
      <div class="row">
        <AddToDos />
        <FilterToDos />
      </div>
      <div class="row">
        <div class="col-md-4 my-3" v-for="todo in myToDos" :key="todo.id">
          <b-card bg-variant="primary" class="text-center">
            <b-card-text class="d-flex justify-content-between">
              <span>{{ todo.title }}</span>
              <span @click="deleteToDos(todo.id)"
                ><b-icon icon="trash-fill" variant="danger"></b-icon
              ></span>
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AddToDos from "./AddToDos.vue";
import FilterToDos from "./FilterToDos.vue";
export default {
  //   computed: {
  //     // myToDos() {
  //     //   return this.$store.getters.myToDos;
  //     // },
  //     myLocalProperty() {
  //       return "smth";
  //     },
  //     ...mapGetters(["myToDos"]),
  //   },
  components: { AddToDos, FilterToDos },
  computed: mapGetters(["myToDos"]),
  methods: mapActions(["getToDos", "deleteToDos"]),
  mounted() {
    this.getToDos();
  },
};
</script>

<style>
</style>