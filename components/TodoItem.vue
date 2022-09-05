<template>
  <div class="p-3 bg-gray-200 mb-3">
    <div>{{todo.text}}</div>
    <nuxt-link :to="`todo/${todo.id}`">檢視</nuxt-link>
  </div>
</template>
<script>
  export default {
    props:{
      todo: Object
    }
  }
</script>
