<script>
export default {
  data() {
    return {
      texto: 'hola',
      textos: ['uno','dos', 'tres'],
      };
    },
      methods: {
        handleClick() {
          console.log(Math.floor(Math.random()*this.textos.length));          
          this.texto = this.textos[Math.floor(Math.random()*this.textos.length )]
        }
      }
}
</script>

<template>
  <button @click="handleClick">{{ texto }}</button>
  <p @mouseover="handleClick">{{ texto }}</p>
</template>


<style scoped>
  button {
    background-color: aqua;
  }
  p {
    background-color: bisque
  }

</style>  