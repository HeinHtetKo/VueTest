<template>
  <div class="input-group mb-3">
    <input type="text" class="form-control" v-model="newToDos.title" />
    <button class="btn btn-primary" @click="addToDos(newToDos)">
      add to do
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      newToDos: {
        title: "",
      },
    };
  },
  methods: mapActions(["addToDos"]),
};
</script>

<style>
</style>