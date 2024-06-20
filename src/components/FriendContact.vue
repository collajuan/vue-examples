<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  props: {
    friend: Object,
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>

<template>
  <li class="card">
    <h2>{{ friend.name }}</h2>
    <div class="flex gap-8 justify-around">
      <button @click="toggleDetails()" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        {{ detailsAreVisible ? "Hide" : "Show" }} Details
      </button>
      <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
        Delete contact
      </button>
    </div>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  max-width: 40rem;
}

h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
</style>