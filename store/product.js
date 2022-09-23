export const state = () => ({
  products:[],
  product:{}
});

// 同步處理
export const mutations = {
  GET_DATAS(state,payload){
    state.products = payload
  },
  GET_DATA(state,payload){
    state.product = payload
  }
}

// 非同步處理
export const actions = {
  fetchDatas(context){
    return this.$axios.get('http://localhost:3333/data').then(res => {
      context.commit('GET_DATAS',res.data);
    })
  },
  fetchData(context,id){
    console.log(id);
    return this.$axios.get('http://localhost:3333/data/'+id).then(res => {
      context.commit('GET_DATA',res.data);
    })
  }
}

