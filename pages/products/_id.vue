<template>
  <div>

    <h1>Product #{{this.$route.params.id}}</h1>
    <div>
      {{product}}
      <form action="" method="post">
        <input type="submit" value="刪除" class="bg-red-300 px-5 py-2" @click.prevent="deleteProduct(product.id)">
      </form>
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
    methods:{
      deleteProduct(id){
        this.$axios.delete('http://localhost:3333/data/'+id)
        .then(res=>{
          this.$nuxt.$loading.start();
          alert('資料已刪除');
          this.$router.push('/products')
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
