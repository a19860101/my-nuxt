<template>
  <div class="text-center container">
    <h1 v-if="error.statusCode === 404" class="text-5xl font-bold p-6">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/" class="hover:text-blue-400 underline">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
