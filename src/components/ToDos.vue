<template>
  <div>
    <h1 class="text-primary text-center">All ToDos!!!</h1>
    <div class="container">
      <div class="row">
        <AddToDos />
      </div>
      <div class="row">
        <div class="col-md-4 my-3" v-for="todo in myToDos" :key="todo.id">
          <b-card bg-variant="primary" class="text-center">
            <b-card-text>{{ todo.title }}</b-card-text>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AddToDos from "./AddToDos.vue";
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
  components: { AddToDos },
  computed: mapGetters(["myToDos"]),
  methods: mapActions(["getToDos"]),
  mounted() {
    this.getToDos();
  },
};
</script>

<style>
</style>