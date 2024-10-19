<script>
export default {
  data() {
    return {
      nota1: {
        titulo: 'Recoradatorio 1',
        text: 'Esto es primera una nota'
      },
      nota2: {
        titulo: 'Recoradatorio 2',
        text: 'Esto es segunda una nota'
      },
      letras: ['a','b','c']
    }
  }
}
</script>

<template>
  <div>
    <h2 style="font-weight:bold">{{ nota1.titulo }}</h2>
    <p>{{ nota1.text }}</p>
  </div>
  <div>
    <h2 >{{ nota2.titulo }}</h2>
    <p>{{ nota2.text }}</p>
  </div>
  <h2>Array</h2>
  <p>{{ letras.join('-') }}</p>
</template>


<style scoped>
div {
  background-color: antiquewhite; 
  width: 300px; 
  margin: 10px;
  padding: 5px;
}
h2 {
  font-weight:bold
}
p {
  font-weight: bold;
  color: rgba(45, 44, 44, 0.548);
}
</style>  