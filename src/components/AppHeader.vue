<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">image uploader</a>
    <div class="class menu"></div>
    <a href="#" @click="login">Login</a>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AppHeader",
  methods: mapActions(["login"])
};
</script>

<style>
</style>