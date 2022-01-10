<template>
  <div
    :messages="messagesOverride"
  >
    
    <div>
      <span>Nombre:</span>
      <input
        v-model="nombre"
        type="text"
      >
      <div>
        <span v-if="v$.nombre.$error">
          {{ v$.nombre.$errors[0].$message }}
        </span>
      </div>
    </div>
    <div>
      <span>Humano del michi:</span>
      <select
        v-model="humano"
      >
        <option class="disabled" disabled value="">Humano</option>
        <option 
          v-for="humano in listahumanos"
          :key="humano.value"
          :value="humano.value">
            {{ humano.value }}
          </option>
      </select>
      <div>
        <span v-if="v$.humano.$error">
          {{ v$.humano.$errors[0].$message }}
        </span>
      </div>
    </div>
    <div>
      <span>Edad:</span>
      <input
        v-model="edad"
        type="number"
      >
      <div>
        <span v-if="v$.edad.$error">
          {{ v$.edad.$errors[0].$message }}
        </span>
      </div>      
    </div>
    <div>
      <span>Color:</span>
      <input
        v-model="color"
        type="text"
      >
      <div>
        <span v-if="v$.color.$error">
          {{ v$.color.$errors[0].$message }}
        </span>
      </div>      
    </div>
    <div>
      <div>
        <p>Se deja rascar la panza?</p>
        <input
          type="radio"
          id="panzasi"
          value="true"
          v-model="panza"
        >
        <label for="si">Sí</label>
      </div>
      <div>
        <input
          type="radio"
          id="panzano"
          value="false"
          v-model="panza"
        >
        <label for="no">No</label>
      </div>
      <div>
        <span v-if="v$.nombre.$error">
          {{ v$.nombre.$errors[0].$message }}
        </span>
      </div>      
    </div>

    <div>
      <button
        class="xxxxx"
        @click="submit"
      >
        Agregar michi
      </button>
    </div>

    <div
      v-if="alert"
    >
      <p>Se agregó un michi!</p>
    </div>

  </div>
</template>

<script>

  // import axios from 'axios'

  import useVuelidate from '@vuelidate/core'
  import { required, between, numeric, helpers } from '@vuelidate/validators'


  export default {
    name: 'AgregarGatoForm',

    setup () {
     return { v$: useVuelidate() }
   },

    data: () => ({
      listahumanos: [
        {
          value:'Fespi', 
        },
        {
          value:'Amanda', 
        },
        {
          value:'Leo', 
        },
        {
          value:'Flor', 
        },
        {
          value:'Otro' 
        },
      ],
      
      // valid: true,

      messagesOverride: { 
        required: "Este campo es obligatorio",
        numeric: "Edad sólo puede ser un numero",
        between: "La edad debe ser entre 0 y 30",
      },

      nuevoMichi: {},
      nombre: '',
      humano: '',
      edad: '',
      color: '',
      panza: '',

      alert: false,
    }),

    validations () {
      return {
        nombre: { 
          required: helpers.withMessage("¿Cómo se llama el michi?", required),
        },
        humano: { 
          required: helpers.withMessage("¿Con quién vive el michi?", required),
         },
        edad: { 
          required: helpers.withMessage("¿Cuantos años tiene el michi?", required),
          numeric: helpers.withMessage("La edad tiene que ser un número", numeric),
          betweenValue: helpers.withMessage("El michi tiene que tener entre 0 y 30 años", between(0, 30)),
        },
        color: { 
          required: helpers.withMessage("¿De qué color es el michi?", required),
         },
        panza: { 
          required: helpers.withMessage("¿Se deja rascar la panza el michi?", required),
         },
      }
    },

    methods: {

      submit() {

        this.v$.$validate() // checks all inputs
      
        /*
        if (!this.v$.$error) { // if ANY fail validation
          alert('Form successfully submitted.')
        } else {
          alert('Form failed validation')
        }
        */

        if (!this.v$.$error) {
          // agrega la data del form a nuevoMichi
          this.nuevoMichi.nombre = this.nombre
          this.nuevoMichi.humano = this.humano
          this.nuevoMichi.edad = this.edad
          this.nuevoMichi.color = this.color
          this.nuevoMichi.panza = this.panza


          // agrega el nuevo michi
          this.agregarMichiNuevo()

          // muestra la alerta
          this.showAlert()

          // vacía formulario
          this.vaciarForm()
          
          // resettea la validacion
          this.resetForm()

        } else {
          console.log("no valida")
        }
      },

      agregarMichiNuevo() {

        fetch("https://61b145c33c954f001722a877.mockapi.io/michis", {
          method: "POST",
          headers: {'Content-Type': 'application/json'}, 
          body: JSON.stringify(this.nuevoMichi)
        }).then(res => {
          console.log("Request complete! response:", res);
        });

      },

      showAlert() {
        this.alert = true
        setTimeout(() => {
          this.alert=false
        },5000)
      },

      vaciarForm() {
        this.nombre = ''
        this.humano = ''
        this.edad = ''
        this.color = ''
        this.panza = ''
      },

      resetForm() {
        // this.$nextTick(() => { this.$v.$reset() })
        this.v$.$reset();
      }

    }
  }
</script>
