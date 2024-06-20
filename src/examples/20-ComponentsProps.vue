<script>
import ComponentsPropsPerson from '../components/ComponentsPropsPerson.vue'

export default {
  data() {
    return {
      local_name: 'John Scoot'
    }
  },
  components: {
    ComponentsPropsPerson
  },
}
</script>

<template>
  <ComponentsPropsPerson :name=local_name />
  <components-props-person name="Paco" />
</template>

<style scoped>
p {
  font-weight: bold;
  color: red;
}
</style>
