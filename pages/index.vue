<template>
  <div>
    <button @click="handleIncrement()">+</button>
    <div>{{counter}}</div>
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
  },
  methods:{
    handleIncrement(){
      this.$store.commit('increment');
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
