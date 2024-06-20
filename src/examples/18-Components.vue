<script>
import ComponentA from '../components/ComponentA.vue'

export default {
  components: {
    ComponentA
  },
}
</script>

<template>
  <ComponentA />
  <component-a />
</template>

<style scoped>
p {
  font-weight: bold;
  color: red;
}
</style>
