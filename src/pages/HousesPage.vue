<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="house in houses" :key="house">
        <h1>{{ house }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'

export default ({
  setup() {
    return {
      houses: computed(() => AppState.houses)
    }
  }
})
</script>
