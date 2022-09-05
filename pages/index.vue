<template>
  <div>
    <button @click="increment()">+</button>
    <div>{{ counter }}</div>
    <div v-for="todo in todos" :key="todo.id" class="p-3 bg-gray-200 mb-3">
      <div>{{ todo.text }}</div>
      <nuxt-link :to="`todo/${todo.id}`">檢視</nuxt-link>
    </div>
    <div>{{ error }}</div>
    <!-- <div>{{todoUnComplete}}</div> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
  // layout: 'master',
  name: 'IndexPage',
  head: {
    title: '首頁'
  },
  // asyncData(context){
  //   return context.$axios.get('http://localhost:3333/todos').then(res => {
  //     return {
  //       todos: res.data
  //     }
  //   });
  // },
  // computed:{

  // asyncData({$axios}){
  //   return $axios.get('http://localhost:3333/todos').then(res => {
  //     return {
  //       todos: res.data
  //     }
  //   }).catch(e=>{
  //     return {
  //       error: e,
  //     }
  //   });
  // },

  async asyncData({$axios,error}){
    try{
      const res = await $axios.get('http://localhost:3333/todos');
      return {
        todos: res.data
      }
    }catch(e){
      error({
        statusCode: 503,
        message: 'unable to get data'
      })
    }
  },
  computed:{
    // spread operator
    ...mapState(['counter','title','desc','test']),
    ...mapGetters(['todoComplete','todoUnComplete']),
    qty(){
      return 123;
    }
  },
  methods:{
    // ...mapActions(['increment'])
    increment(){
      // this.$store.commit('increment');
      this.$store.dispatch('increment');
    }
  }
  // computed: {
  //   counter(){
  //     return this.$store.state.counter;
  //   },
  //   title(){
  //     return this.$store.state.title;
  //   }
  // }
}
</script>
