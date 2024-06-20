<script>
export default {
  data() {
    return {
      name: 'John'
    }
  }
}
</script>

<template>
  <p>{{ name }}, this is an example of a Vue component</p>
</template>

<style scoped>
p {
  font-weight: bold;
  color: red;
}
</style>
