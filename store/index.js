export const state = () => ({
  counter: 0,
  title: 'Hello VUEX 123',
  desc: 'lorem ipsumc',
  test: 'test',
  todos:[
    {id:1,text:123,isCompleted:false},
    {id:2,text:456,isCompleted:true},
    {id:3,text:789,isCompleted:false},
  ]
});

// 同步處理
export const mutations = {
  increment(state) {
    state.counter++
  }
}

// 非同步處理
export const actions = {
  increment(context){
    // console.log(context);
    return context.commit('increment');
  }
}


// computed
export const getters = {
  todoComplete(state){
    return state.todos.filter(data => data.isCompleted === true);
  },
  todoUnComplete(state){
    return state.todos.filter(data => data.isCompleted === false);

  }
}

