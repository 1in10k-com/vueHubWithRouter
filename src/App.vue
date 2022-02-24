<template>
  <div id="app">
    <router-link to="/" replace="">跳转到a</router-link>
    <router-link to="/b" replace="">跳转到b</router-link>
    <router-link to="/c" replace="">跳转到c</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {},
  data() {
    return {};
  },
};
</script>

<style></style>
