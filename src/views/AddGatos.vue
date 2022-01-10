<template>
  <div>
    <h2
      class="xxx"
    >
      Agreguemos un michi
    </h2>

    <Suspense>
      <template #default>
        <AgregarGatoForm/>
      </template>
    </Suspense>

  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

import AgregarGatoForm from "../components/AgregarGatoForm";

export default {
  name: 'AddGatos',
  components: {
    AgregarGatoForm
  }
}
</script>
