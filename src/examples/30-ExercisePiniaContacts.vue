<script>
import FriendContact from "../components/FriendContactPinia.vue";

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
      createName: "",
      createPhone: "",
      createEmail: "",
    };
  },
  methods: {
    addContact() {
      this.friends.push({
        id: this.createName.toLowerCase(),
        name: this.createName,
        phone: this.createPhone,
        email: this.createEmail,
      });
      this.createName = "";
      this.createPhone = "";
      this.createEmail = "";
    },
    deleteContact(id) {
      this.friends = [...this.friends.filter((friend) => friend.id !== id)];
    }
  }
};
</script>

<template>
  <div class="h-full">
    <section class="flex flex-col items-center h-full place-content-between" id="app">
      <ul class="flex flex-wrap overflow-auto flex-grow grow-0">
        <friend-contact v-for="friend in friends" :key="friend.id" :friend="friend" @delete="deleteContact" />
      </ul>
      <form class="flex flex-col my-4 p-4 w-1/2">
        <input class="p-2 m-2 border-2" type="text" v-model="createName" placeholder="Name" />
        <input class="p-2 m-2 border-2" type="text" v-model="createPhone" placeholder="Phone" />
        <input class="p-2 m-2 border-2" type="text" v-model="createEmail" placeholder="Email" />
        <button @click.prevent="addContact" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">Create
          contact</button>
      </form>
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