<script>
export default {
  props: {
    name: String,
  },
  methods: {
    greet() {
      return `Hola, ${this.name}!`;
    },
  },
}
</script>

<template>
  <h1>{{ name }}</h1>
  <p>{{ greet() }}</p>
  <div class="flex flex-col">
    <slot name="body"/>
    <slot name="action"/>
  </div>
</template>

<style scoped>
p {
  font-weight: bold;
  color: red;
}
</style>
