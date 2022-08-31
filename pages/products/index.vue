<template>

  <div>
  <h1>product index</h1>
    <div>{{title}}</div>
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
      ...mapState(['title'])
    },
    methods:{

    }
  }
</script>
