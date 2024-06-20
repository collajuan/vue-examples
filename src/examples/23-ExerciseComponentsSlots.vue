<script>
import FriendContact from "../components/FriendContactSlot.vue";

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
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
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
          subtitle="Texto de Subtitulo"
          subtitle2="Texto de Subtitulo 2"
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