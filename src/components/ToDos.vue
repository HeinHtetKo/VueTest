<template>
  <div>
    <h1 class="text-primary text-center">All ToDos!!!</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-4 my-3" v-for="todo in myToDos.posts" :key="todo.id">
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
  computed: mapGetters(["myToDos"]),
  methods: mapActions(["getToDos"]),
  mounted() {
    this.getToDos();
  },
};
</script>

<style>
</style>