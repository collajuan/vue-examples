<script>
import { ref } from 'vue'
export default {
  setup() {
    const name = ref('Juan')
    const lastName = ref('Collazo')
    const age = ref(55)

    return {
      name,
      lastName,
      age
    }
  },
  mounted() {
    console.log(`name ${this.name}`);
    console.log(`Apellido ${this.lastName}`);
    console.log(`Edad ${this.age}`);    
  }
}
</script>

<template>
  <p>{{ name }} {{ lastName }}, this is an example of a Vue component. Y edad: {{ age }}</p>
</template>

<!-- scoped indica que estos estilos aplican solo para este componente -->
<style scoped> 
p {
  font-weight: bold;
  color: red;
}
</style>
