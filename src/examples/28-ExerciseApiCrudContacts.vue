<script>
import FriendContact from "../components/FriendContact.vue";

const MY_USERNAME = "aleh";
const API_URL = `https://contacts-api-yy1b.onrender.com/users/${MY_USERNAME}`;

if (MY_USERNAME == 'aleh') {
  console.error("MY_USERNAME is the default 'aleh', please set MY_USERNAME to something different in src/examples/28-ExerciseApiCrudContacts.vue");
}

export default {
  components: {
    FriendContact,
  },
  data() {
    return {
      friends: [],
      createName: "",
      createPhone: "",
      createEmail: "",
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
  <div class="flex flex-col items-center h-full">
    <section id="app" class="w-full flex flex-grow overflow-scroll">
      <ul class="flex flex-wrap">
        <friend-contact
          v-for="friend in friends"
          :key="friend.id"
          :friend="friend"
        />
      </ul>
    </section>
    <form class="flex flex-col my-4 p-4 w-1/2">
      <input class="p-2 m-2 border-2" type="text" v-model="createName" placeholder="Name" />
      <input class="p-2 m-2 border-2" type="text" v-model="createPhone" placeholder="Phone" />
      <input class="p-2 m-2 border-2" type="text" v-model="createEmail" placeholder="Email" />
      <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">Create contact</button>
    </form>
  </div>
</template>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>