<template>
    <div>
      <router-link to="/">
          <div>
              <v-icon>mdi-plus-box-multiple</v-icon>
              <span>Agregar michi</span>
          </div>
          </router-link>  
          <router-link to="/michis">
              <div>      
              <v-icon>mdi-format-list-bulleted</v-icon>
              <span>Todos los michis</span>
              </div>
          </router-link>
    </div>
</template>

<script>

export default {
  name: 'NavBar',

  components: {

  },

  props: {
  },

  data: () => ({
  }),

};

</script>

<style lang="sass" scoped>
  
  h1
    font-size: 1.5rem

  a
    display: inline-block
    color: white!important
    text-decoration: none

    span
      margin-left: 5px
    
    &:first-of-type
      margin-right: 20px

</style>
