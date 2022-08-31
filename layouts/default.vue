<template>
  <div>
      <NavBar/>
      <Nuxt />
  </div>
</template>
<script>
  export default {
    head:{
      titleTemplate: '%s - 全國電子',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '商品列表'
        },
      ]
    }
  }
</script>
