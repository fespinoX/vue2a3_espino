<template>
  <v-app>
    <p> hala </p>
    <router-view />
  </v-app>
</template>

<script>
  export default {
    
    mounted() {
      this.$store.dispatch("levantarMichis")
    }

  }
</script>

