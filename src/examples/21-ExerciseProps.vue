<script>
import FriendContact from "../components/FriendContact.vue";

export default {
  data() {
    return {
      friends: [
      {
          id: "manuel",
          name: "Manuel Lorenzo",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
          detailsAreVisible: false,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
          detailsAreVisible: true,
        },
      ],
    };
  },
  components: {
    FriendContact,
  },
};
</script>

<template>
  <div>
    <header>
      <h1>Friend List</h1>
    </header>
    <section id="app">
      <ul>        
        <friend-contact v-for="friend in friends"  :friend="friend" :key="friend.id"/>
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