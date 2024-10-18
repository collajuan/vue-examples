<script>
export default {
  data() {
    return {
      name: 'John'
    }
  },
  created() {
    console.log(`Component created by ${this.name}`)
  },
  mounted() {
    console.log(`Component mounted by ${this.name}`)
  },
  unmounted() {
    console.log(`Component unmounted by ${this.name}`);
    
  },
  beforeUnmount() {
    console.log(`Componente antes de ser desmontado`);
  }
}
</script>

<template>
  <p>My name is: {{ name }}.</p>
</template>
