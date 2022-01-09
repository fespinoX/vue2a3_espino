<template>
  <div
    class="mt-6"
  >
    <h2
      class="mb-6 text-center"
    >
      Estos son todos los michis (por ahora...)
    </h2>

    <span>tabla michis</span>
    <div>{{ michis }}</div>

  </div>
</template>

<script>

  import { mapState } from "vuex"
  
  // Data
  import tablaheaders from "./../assets/data/tablaheaders.json"

  export default {
    
    async setup() {
      
      const data = await fetch(
        "https://61b145c33c954f001722a877.mockapi.io/michis"
      );
      const michis = await data.json()

      return {
        michis
      }

    },




    name: 'TablaGatos',
    props: {
      content: {
        type: Array
      }
    },
    data: () => ({
      tablaheaders,
    }),

    computed : {
      ...mapState({
        michis: state => state.michis,
        loadingMichis: state => state.loadingMichis,
      }),

    },

    watch : {
      
    }
    
    
  }

</script>