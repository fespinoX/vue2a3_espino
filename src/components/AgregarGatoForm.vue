<template>
  <div>
    <span>Acá va el form</span>

    <input
      v-model="nombre"
      type="text"
    >

    <button
      class="xxxxx"
      @click="submit"
    >
      Agregar michi
    </button>

    <span>Poner alerta</span>

  </div>
</template>

<script>

  export default {
    name: 'AgregarGatoForm',

    data: () => ({
      listahumanos: [
        'Fespi',
        'Amanda',
        'Leo',
        'Flor',
        'Otro'
      ],
      
      valid: false,

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
        if (this.$refs.form.validate()) {
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
          this.$refs.form.resetValidation()
        } else {
          console.log("no valida")
        }
      },

      agregarMichiNuevo() {

        

      },

      showAlert() {
        this.alert = false
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
