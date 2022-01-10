<template>
  <div>
    <div>
      <span>Nombre:</span>
      <input
        v-model="nombre"
        type="text"
      >
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
    </div>
    <div>
      <span>Edad:</span>
      <input
        v-model="edad"
        type="number"
      >
    </div>
    <div>
      <span>Color:</span>
      <input
        v-model="color"
        type="text"
      >
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

  export default {
    name: 'AgregarGatoForm',

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
      
      valid: true,

      nuevoMichi: {},
      nombre: '',
      humano: '',
      edad: '',
      color: '',
      panza: false,

      alert: false,
    }),
    methods: {
      submit() {
        if (this.valid) {
          // agrega la data del form a nuevoMichi
          this.nuevoMichi.nombre = this.nombre
          this.nuevoMichi.humano = this.humano
          this.nuevoMichi.edad = this.edad
          this.nuevoMichi.color = this.color
          this.nuevoMichi.panza = this.panza


          // agrega el nuevo michi
          this.agregarMichiNuevo()

          // muestra la alerta
          // this.showAlert()

          // vacía formulario
          this.vaciarForm()
          
          // resettea la validacion
          // this.$refs.form.resetValidation()
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

    }
  }
</script>
