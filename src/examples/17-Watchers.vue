<script>
export default {
  data() {
    return {
      searchText: '',
      answer: ''
    }
  },
  watch: {
    searchText(newSearchText, oldSearchText) {
      this.getAnswer(newSearchText)
    }
  },
  methods: {
    async getAnswer(newSearchText) {
      this.answer = 'Loading the results...'
      try {
        this.answer = this.fetchExternalService(newSearchText)
      } catch (error) {
        this.answer = 'Error! Could not reach the API. ' + error
      }
    },
    fetchExternalService(newSearchText) {
      if (newSearchText === 4) {
        return 'Correct!'
      }

      return `The answer is not ${newSearchText}, try again!`
    }
  }
}
</script>

<template>
  <input
    type="number"
    placeholder="Type some number"
    class="border border-black"
    v-model="searchText"
  />
  <h1>The answer to 2 + 2 is: {{ answer }}</h1>
</template>
