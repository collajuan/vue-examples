<script>
import FriendContact from "../components/FriendContactEvents.vue";

export default {
  components: {
    FriendContact,
  },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
          favourite: false,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
          favourite: true,
        },
      ],
    };
  },
  methods: {
    // TODO: Metodo para cambiar la propiedad favourite del amigo
    // TODO: Donde usamos este metodo?
  },
};
</script>

<template>
  <div>
    <section id="app">
      <ul>
        <friend-contact
          v-for="friend in friends"
          :key="friend.id"
          :friend="friend"
        />
      </ul>
    </section>
  </div>
</template>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>