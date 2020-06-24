<template>
  <div>Loggin in...</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AuthHandler",
  methods: mapActions(["finalizeLogin"]),
  created() {
    this.finalizeLogin(window.location.hash);
  }
};

console.log(window.location.hash);
</script>

<style>
</style>