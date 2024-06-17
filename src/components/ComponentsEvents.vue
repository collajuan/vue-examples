<script>
export default {
  props: {
    name: String,
    favourite: Boolean,
  },
  emits: ['favorited']
}
</script>

<template>
  <h1>{{ name }}</h1>
  <p>{{ favourite ? "Favorito" : "No favorito" }}</p>
  <button class="p-4 rounded-xl bg-blue-100 my-4 hover:bg-blue-400" @click="$emit('favorited')">Haz click para marcar como favorito</button>
</template>

<style scoped>
p {
  font-weight: bold;
  color: red;
}
</style>
