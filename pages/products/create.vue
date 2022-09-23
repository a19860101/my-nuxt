<template>
  <div>
    <h1>product create</h1>
    <form action="" method="post">
      <input type="text" v-model="name" class="border border-gray-500 p-2">
      <input type="submit" value="送出" class="px-5 py-2" @click.prevent="storeProduct()">
    </form>
    {{name}}
  </div>
</template>
<script>
  export default {
    data(){
      return {
        name:''
      }
    },
    methods:{
      storeProduct(){
        this.$axios.post('http://localhost:3333/data',{
          name: this.name
        }).then(res=>{
          this.$nuxt.$loading.start();
          console.log(res);
          alert('資料已新增');
          this.$router.push('/products')
        })
        .catch(e=>{
          console.log(e)
        })
        .finally(()=>{
          this.$nuxt.$loading.finish();
        })
      },

    }
  }
</script>
