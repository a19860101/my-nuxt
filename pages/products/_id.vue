<template>
  <div>

    <h1>Product #{{this.$route.params.id}}</h1>
    <div>
      {{product}}
    </div>
    <!-- <h1>Product #{{this.$route.query}}</h1> -->
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  export default {
    computed:{
      ...mapState({
        product: state => state.product.product,
      })
    },
    async fetch(context){
      try {
        await context.store.dispatch('product/fetchData',context.params.id);
      }catch(e){
        context.error({
          statusCode:503,
          message: 'error'
        })
      }
    }
  }
</script>
