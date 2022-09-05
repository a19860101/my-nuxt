<template>
  <div>
    <h1>Todo #{{todo.id}}</h1>
    <div>
      {{todo.text}}
    </div>
    <nuxt-link to="/">Back</nuxt-link>
  </div>
</template>
<script>
export default {
  async asyncData({$axios,params,error}){
    try{
      const res = await $axios.get('http://localhost:3333/todos/'+ params.id);
      return {
        todo: res.data
      }
    }catch(e){
      error({
        statusCode: 503,
        message: 'unable to get data'
      })
    }
  },
}
</script>
