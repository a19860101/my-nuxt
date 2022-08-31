<template>
  <div>
    <h1>{{title}}</h1>
    <div>{{counter}}</div>
  </div>
</template>

<script>
export default {
  // layout: 'master',
  name: 'IndexPage',
  head: {
    title: '首頁'
  },
  computed: {
    counter(){
      return this.$store.state.counter;
    },
    title(){
      return this.$store.state.title;
    }
  }
}
</script>
