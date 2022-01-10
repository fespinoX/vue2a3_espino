<template>
  <div>
    <h2
      class="xxx"
    >
      Estos son todos los michis (por ahora...)
    </h2>
    <Suspense>
      <template #default>
        <TableGatos/>
      </template>
    </Suspense>

  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

import TableGatos from "../components/TableGatos";

export default {
  name: 'ViewGatos',
  components: {
    TableGatos
  }
}
</script>
