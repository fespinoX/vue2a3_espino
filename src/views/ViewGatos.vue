<template>
  <div>

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
