<script>
import ComponentsNamedSlotsPerson from '../components/ComponentsNamedSlotsPerson.vue'

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
    ComponentsNamedSlotsPerson
  },
}
</script>

<template>
  <ComponentsNamedSlotsPerson name="Paco" >
    <template #body>
      <span class="text-blue-200">Otras cosas que le quieras pasar</span>
    </template>
    <template #action>
      <button class="p-4 rounded bg-blue-300" @click="greet">Click me!</button>
    </template>
  </ComponentsNamedSlotsPerson>
</template>

<style scoped>
p {
  font-weight: bold;
  color: red;
}
</style>
