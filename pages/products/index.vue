<template>
  <div>
    <h1 class="text-4xl font-bold">product index</h1>
    <div v-for="product in products" :key="product.id">
      <h3>{{product.name}}</h3>
    </div>
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
      // products(){
      //   return this.$store.state.product.products;
      // }
      ...mapState({
        // products: function(state){
        //   return state.product.products
        // }
        products: state => state.product.products,
        // products: ({product}) => product.products
      })
    },
    methods:{

    },
    async fetch(context){
      try {
        await context.store.dispatch('product/fetchDatas');
      }catch(e){
        context.error({
          statusCode:503,
          message: 'error'
        })
      }
    }
  }
</script>
