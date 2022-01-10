<template>
  <div
    class="michiform"
    :messages="messagesOverride"
  >
    
    <div
      class="formgroup"
    >
      <span class="formtitle">Nombre:</span>
      <input
        v-model="nombre"
        type="text"
        class="forminput"
      >
      <div
        class="errormsg"
      >
        <span v-if="v$.nombre.$error">
          {{ v$.nombre.$errors[0].$message }}
        </span>
      </div>
    </div>
    <div
      class="formgroup"
    >
      <span class="formtitle">Humano del michi:</span>
      <select
        v-model="humano"
        class="forminput"
      >
        <option class="disabled" disabled value="">Humano</option>
        <option 
          v-for="humano in listahumanos"
          :key="humano.value"
          :value="humano.value">
            {{ humano.value }}
          </option>
      </select>
      <div
        class="errormsg"
      >
        <span v-if="v$.humano.$error">
          {{ v$.humano.$errors[0].$message }}
        </span>
      </div>
    </div>
    <div
      class="formgroup"
    >
      <span class="formtitle">Edad:</span>
      <input
        v-model="edad"
        type="number"
        class="forminput"
      >
      <div
        class="errormsg"
      >
        <span v-if="v$.edad.$error">
          {{ v$.edad.$errors[0].$message }}
        </span>
      </div>      
    </div>
    <div
      class="formgroup"
    >
      <span class="formtitle">Color:</span>
      <input
        v-model="color"
        type="text"
        class="forminput"
      >
      <div
        class="errormsg"
      >
        <span v-if="v$.color.$error">
          {{ v$.color.$errors[0].$message }}
        </span>
      </div>      
    </div>
    <div
      class="formgroup"
    >
      <div>
        <p class="formtitleb">Se deja rascar la panza?</p>
        <input
          type="radio"
          id="panzasi"
          value="true"
          v-model="panza"
          class="inputradio"
        >
        <label for="si">Sí</label>
      </div>
      <div>
        <input
          type="radio"
          id="panzano"
          value="false"
          v-model="panza"
          class="inputradio"
        >
        <label for="no">No</label>
      </div>
      <div
        class="errormsg"
      >
        <span v-if="v$.nombre.$error">
          {{ v$.nombre.$errors[0].$message }}
        </span>
      </div>      
    </div>

    <div>
      <button
        class="submitbtn"
        @click="submit"
      >
        Agregar michi
      </button>
    </div>

    <div
      v-if="alert"
      class="michialert"
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

<style scoped>

  .michiform {
    width: 60vw;
    margin: 0 auto;
  }

  .formgroup {
    margin: 15px 0;
  }

  .formtitle {
    display: inline-block;
    margin-bottom: 5px;
    text-align: left;

  }

  .formtitleb {
    margin-bottom: 5px;
  }

  .forminput {
    display: block;
    width: 100%;
    height: 1.7rem;
    padding: 0 10px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    line-height: 1.7rem;
  }

  .inputradio {
    height: 20px;
    width: 20px;
  }

  .submitbtn {
    padding: 5px 10px;
    font-size: .8rem;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    border: none;
    background: rgb(250, 197, 23);
    border-radius: 5px;
  }

  .errormsg {
    margin-top: 5px;
    color: rgb(253, 228, 2);
  }

  .michialert {
    margin: 20px 5px;
    padding: 5px 10px;
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
    background-color: rgb(250, 133, 0);
    border-radius: 5px;
    color: white;
  }


</style>
