<script>
import FriendContact from "../components/FriendContact.vue";

const MY_USERNAME = "aleh";
const API_URL = `https://contacts-api-yy1b.onrender.com/users/${MY_USERNAME}`;

export default {
  components: {
    FriendContact,
  },
  data() {
    return {
      friends: [],
    };
  },
  methods: {
    getFriends() {
      try {
        fetch(`${API_URL}/contacts`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.friends = data;
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getFriends();
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