<script>
export default {
  data() {
    return {
      imgs: ["https://picsum.photos/id/230/200/300","https://picsum.photos/id/237/200/300","https://picsum.photos/id/200/200/300"]
    }
  },
  methods: {
    deleteImage(e) {
      this.imgs.splice(e.target.id, e.target.id + 1)
      console.log(this.imgs);      
    }
  }
}
</script>

<template>
  <p>This is a sandbox, start creating your exercise!</p>
  <ul>
    <img v-for="(img, index) in imgs" :key="index" :src="img" :id="index" :alt="index" @click="deleteImage">
  </ul>
</template>

<style>
img {
  display: inline-block;
  margin: 5px;
}
</style>