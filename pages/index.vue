<template>
  <div>
    <h1>{{title}}</h1>
    <div>{{counter}}</div>
    <div>{{desc}}</div>
    <div>{{qty}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  // layout: 'master',
  name: 'IndexPage',
  head: {
    title: '首頁'
  },
  computed:{
    // spread operator
    ...mapState(['counter','title','desc','test']),
    qty(){
      return 123;
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
