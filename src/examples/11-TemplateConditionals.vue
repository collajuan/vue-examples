<script>
export default {
  data() {
    return {
      active: true,
      type: 'car'
    }
  },
  methods: {
    toggleActive() {
      this.active = !this.active
    }
  }
}
</script>

<template>
  <button
    @click="toggleActive"
    class="w-32 border-2 rounded-lg bg-gray-100 hover:bg-blue-100 border-blue-400"
  >
    Toggle active
  </button>
  <h1 v-if="active">v-if: This will be shown if active is true</h1>
  <h1 v-show="!active">v-show: This will be shown if active is false</h1>
  <br />
  <div v-if="type === 'car'">This is a car</div>
  <div v-else-if="type === 'moto'">This is a moto</div>
  <div v-else>This is a horse</div>
  <br />
</template>
