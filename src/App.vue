<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { examples } from '@/examples/examples.js'
</script>

<template>
  <div class="h-screen flex flex-col bg-gray-100 font-mono">
    <header class="p-5">
      <h1 class="text-3xl font-bold">Vue Examples</h1>
    </header>

    <div class="flex flex-row flex-grow bg-gray-200 overflow-hidden pb-8">
      <nav class="w-96 p-4 divide-solid divide-y divide-white overflow-scroll">
        <div class="py-2 hover:bg-gray-100 rounded-md" :key="path" v-for="({ description }, path) in examples">
          <RouterLink activeClass="bg-yellow-100" :to="'/' + path">{{ description }}</RouterLink>
        </div>
      </nav>
      <section class="p-4 pb-0 w-full flex">
        <div class="shadow-lg w-full bg-white p-5 rounded-md flex-grow">
          <RouterView />
        </div>
      </section>
    </div>
  </div>
</template>
