<template>
  <div>


    <table>
      <thead>
        <th class="xxx"
          v-for="header in tablaheaders"
          :key="header.text"
        >
          {{ header.text }}
        </th>
      </thead>
      <tbody>
        <tr
          v-for="michi in michis"
          :key="michi.id"
        >  
          <td class="xxx">{{ michi.nombre }}</td>
          <td class="xxx">{{ michi.humano }}</td>
          <td class="xxx">{{ michi.edad }}</td>
          <td class="xxx">{{ michi.color }}</td>
          <td class="xxx">{{ michi.panza }}</td>

        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>

  // import { mapState } from "vuex"
  
  // Data
  import tablaheaders from "./../assets/data/tablaheaders.json"

  export default {
    
    async setup() {
      
      const data = await fetch(
        "https://61b145c33c954f001722a877.mockapi.io/michis"
      );
      const michis = await data.json()
      const tableheaders = tablaheaders

      return {
        michis,
        tableheaders
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
      /*
      ...mapState({
        michis: state => state.michis,
        loadingMichis: state => state.loadingMichis,
      }),
      */
    },

    watch : {
      
    }
    
    
  }

</script>