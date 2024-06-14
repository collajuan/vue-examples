<script>
export default {
  data() {
    return {
      dogs: ['Maia', 'Paco', 'Toby'],
      cats: {
        John: 'Fermin',
        Jane: 'Manuela'
      }
    }
  }
}
</script>

<template>
  <ul>
    <li v-for="(dog, index) in dogs" :key="dog">{{ index + 1 }}. {{ dog }}</li>
  </ul>

  ---

  <ul>
    <li v-for="(cat, key, index) in cats" :key="cat">{{ index + 1 }}. {{ key }}: {{ cat }}</li>
  </ul>
</template>
