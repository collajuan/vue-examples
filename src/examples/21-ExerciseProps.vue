<script>
import FriendContact from "../components/FriendContactProps.vue";

export default {
  components: {
    FriendContact,
  },
};
</script>

<template>
  <div>
    <header>
      <h1>FriendList</h1>
    </header>
    <section id="app">
      <ul>
        <friend-contact />
        <friend-contact />
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