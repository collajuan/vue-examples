<script>
import ComponentsEvents from '../components/ComponentsEvents.vue'

export default {
  data() {
    return {
      favourite: false
    }
  },
  methods: {
    toggle() {
      this.favourite = !this.favourite
    },
  },
  components: {
    ComponentsEvents
  },
}
</script>

<template>
  <ComponentsEvents name="Paco" :favourite="favourite" @favorited="toggle" />
</template>

<style scoped>
p {
  font-weight: bold;
  color: red;
}
</style>
