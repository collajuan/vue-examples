<script>
import HeartIcon from "../icons/HeartIcon.vue";
import EmptyHeartIcon from "../icons/EmptyHeartIcon.vue";

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
    getName() {
      return this.friend.name;
    },
  },
  components: {
    HeartIcon,
    EmptyHeartIcon,
  },
  // TODO: Emits
};
</script>

<template>
  <li class="card">
    <div class="flex flex-row justify-around p-4 items-center gap-4">
      <h2>{{ getName() }}</h2>
      <!-- TODO Emitimos el evento cuando hacemos click en el corazon -->
      <div> 
        <HeartIcon v-if="friend.favourite"/>
        <EmptyHeartIcon v-else/>
      </div>
    </div>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
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
  display: flex;
  width: fit-content;
  flex-direction: column;
}

h2 {
  font-size: 2rem;
  color: #58004d;
}

button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

button:hover,
button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>