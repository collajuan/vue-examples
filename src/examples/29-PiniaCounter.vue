<script>
import { useCounterStore } from '@/stores/counter';

export default {
  setup() {
    const counterStore = useCounterStore();

    return {
      // You have access to counterStore anywhere in the component
      counterStore,
    };
  },
  methods: {
    increment() {
      this.counterStore.increment();
    },
    incrementBy(quantity) {
      this.counterStore.increment(quantity);
    },
    reset() {
      this.counterStore.$reset();
    },
  },
}
</script>

<template>
  <header>
    <h1>Pinia Counter</h1>
  </header>
  <section>
    <p>Count: {{ counterStore.count }}</p>
    <p>Double count: {{ counterStore.doubleCount }}</p>
    <button class="p-4 rounded bg-green-400 m-4" @click="increment">Increment</button>
    <button class="p-4 rounded bg-green-400 m-4" @click="incrementBy(2)">Increment by 2</button>
    <button class="p-4 rounded bg-red-400 m-4" @click="reset">Reset store</button>
    
  </section>
</template>

<style scoped>
</style>
