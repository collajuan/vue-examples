<script>
import ComponentsSlotsPerson from '../components/ComponentsSlotsPerson.vue'

export default {
  data() {
    return {
      parent_info: 'Info que el hijo no puede ver'
    }
  },
  methods: {
    greet() {
      alert(`Hello from the parent component! ${this.parent_info}`)
    },
  },
  components: {
    ComponentsSlotsPerson
  },
}
</script>

<template>
  <ComponentsSlotsPerson name="Paco" >
    <span class="text-blue-200">Otras cosas que le quieras pasa</span>
    <button class="p-4 rounded bg-blue-300" @click="greet">Click me!</button>
  </ComponentsSlotsPerson>
</template>

<style scoped>
p {
  font-weight: bold;
  color: red;
}
</style>
