<template>
  <div class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-screen flex items-center justify-center">
    <div class="text-center p-10 bg-white bg-opacity-75 rounded-lg shadow-xl">
      <h1 class="text-5xl font-bold text-gray-800 mb-4">Welcome 👋</h1>
      <p class="text-lg text-gray-700">This is the Raygun x Nuxt demo</p>
      <button @click="throwError" class="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click to throw error</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    throwError() {
      console.log("Throwing error");
      throw new Error("Something bad happened!");
    }
  }
}
</script>