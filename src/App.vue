<template>
  <NavBar />
  <router-view/>
</template>

<script>

import NavBar from "./components/NavBar.vue";

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>



<style>

body {
  margin: 0;
  background-color: #fc0075;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
}

h2 {
  text-align: center;
}

</style>
