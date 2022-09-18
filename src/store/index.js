import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    arrBlogs: [],
    pagination: null,
  },
  mutations: {
    setArrBlogs(state, payload) {
      state.arrBlogs = payload.data.items;
      state.pagination = payload.pagination;
    },
    deleteBlog(state, payload) {
      state.arrBlogs = state.arrBlogs.filter((item) => item.id !== payload);
    },
  },
  actions: {
    setArrBlogs({ commit }, payload) {
      commit("setArrBlogs", payload);
    },
    deleteBlog({ commit }, payload) {
      commit("deleteBlog", payload);
    },
  },
  modules: {},
});
