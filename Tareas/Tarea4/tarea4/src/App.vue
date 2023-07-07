<template>
  <div id="app">
    <my-component></my-component>
  </div>
</template>

<script>
import MyComponent from "./components/MySpa.vue";

export default {
  name: "App",
  components: {
    MyComponent
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100vh;
  width: 100%;
  position: relative;
}
</style>
