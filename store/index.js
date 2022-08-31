export const state = () => ({
  counter: 0,
  title: 'Hello VUEX 123',
  desc: 'lorem ipsumc',
  test: 'test'
});


export const mutations = {
  increment(state) {
    state.counter++
  }
}

