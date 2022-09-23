<template>
  <div>

    <h1>Product #{{this.$route.params.id}}</h1>
    <h2>{{product.name}}</h2>
    <div>
      <form action="" method="post">
        <input type="text" v-model="name" class="border border-gray-400 p-2">
        <input type="submit" value="儲存" class="bg-blue-300 px-5 py-2" @click.prevent="updateProduct(product.id)">
      </form>
      <form action="" method="post">
        <input type="submit" value="刪除" class="bg-red-300 px-5 py-2" @click.prevent="deleteProduct(product.id)">
      </form>
    </div>
    <!-- <h1>Product #{{this.$route.query}}</h1> -->
  </div>
</template>
<script>
  import { get } from 'http';
import { mapState } from 'vuex';
  export default {
    data(){
      return {
        name:''
      }
    },
    computed:{
      // ...mapState({
      //   product: state => state.product.product,
      // })
      product(){
        this.name = this.$store.state.product.product.name;
        return this.$store.state.product.product
      }
    },
    methods:{
      deleteProduct(id){
        this.$axios.delete('http://localhost:3333/data/'+id)
        .then(res=>{
          this.$nuxt.$loading.start();
          alert('資料已刪除');
          this.$router.push('/products')
        })
      },
      updateProduct(id){
        this.$axios.put('http://localhost:3333/data/'+id,{
          name: this.name
        })
        .then(res=>{
          this.$nuxt.$loading.start();
          alert('資料已更新');
          // this.$router.push('/products/'+id)
          window.location.href='/products/'+id
        })
      }
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
