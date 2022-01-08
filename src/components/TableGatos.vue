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

  </div>
</template>

<script>

  import { mapState } from "vuex"
  
  // Data
  import tablaheaders from "./../assets/data/tablaheaders.json"

  export default {
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