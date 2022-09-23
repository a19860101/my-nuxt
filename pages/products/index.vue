<template>
  <div>
    <h1 class="text-4xl font-bold">product index</h1>
    <div>{{products}}</div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    head:{
      title: '商品列表',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '商品列表'
        },
      ]
    },
    computed:{
      products(){
        return this.$store.state.product.products;
      }
    },
    methods:{

    },
    async fetch({store,error}){
      try {
        await store.dispatch('product/fetchDatas');
      }catch(e){
        error({
          statusCode:503,
          message: 'error'
        })
      }
    }
  }
</script>
