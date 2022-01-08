<template>
  <div>
    <h2
      class="mb-4 text-center"
    >
      Agreguemos un michi
    </h2>

    <span>Acá va el form</span>

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
          this.agregarMichiNuevo(this.nuevoMichi)

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

      agregarMichiNuevo(michinuevo) {

        this.$store.dispatch("agregarMichi", michinuevo)

        console.log("michi nuevo aca es:", michinuevo)

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
