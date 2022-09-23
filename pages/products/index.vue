<template>
  <div class="p-4">
    <h1 class="text-4xl font-bold">product index</h1>
    <div v-for="product in products" :key="product.id">
      <h3>{{product.name}}</h3>
      <nuxt-link :to="`products/${product.id}`">檢視</nuxt-link>
      <form action="" method="post">
        <input type="submit" value="刪除" class="bg-red-300 px-5 py-2" @click.prevent="deleteProduct(product.id)">
      </form>
      <hr>
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
      deleteProduct(id){
        this.$axios.delete('http://localhost:3333/data/'+id)
        .then(res=>{
          this.$nuxt.$loading.start();
          alert('資料已刪除');
          // this.$router.push('/products')
          window.location.href='/products'
        })
      }
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
