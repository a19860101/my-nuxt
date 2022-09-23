export const state = () => ({
  products:[],
  product:{}
});

// 同步處理
export const mutations = {
  GET_DATAS(state,payload){
    state.products = payload
  }
}

// 非同步處理
export const actions = {
  fetchDatas(context){
    return this.$axios.get('http://localhost:3333/data').then(res => {
      context.commit('GET_DATAS',res.data);
    })
  }
}

