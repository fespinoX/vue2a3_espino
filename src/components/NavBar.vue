<template>
    <div class="navbar">
      <router-link to="/">
        <div>
            <span>Todos los michis</span>
        </div>
        </router-link>
        <router-link to="/nuevo">
          <div>      
            <span>Agregar michi</span>
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

<style scoped>
  
  .navbar {
    text-align: right;
    background-color: rgb(248, 224, 3);
  }

  .navbar a {
    display: inline-block;
    margin: 10px 5px;
    padding: 5px 10px;
    font-size: .8rem;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    background-color: rgb(250, 133, 0);
    border-radius: 5px;
    color: white;
  }



</style>
