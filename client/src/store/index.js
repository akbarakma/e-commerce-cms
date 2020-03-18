import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const baseUrl = 'http://localhost:3000';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productData: [],
    editData: null,
  },
  mutations: {
    getData(state, data) {
      state.productData = data;
    },
    logout(state) {
      state.productData = [];
    },
    editData(state, data) {
      state.editData = data;
    },
  },
  actions: {
    getData(context) {
      axios({
        method: 'GET',
        url: `${baseUrl}/product`,
        headers: {
          token: localStorage.getItem('token'),
        },
      })
        .then(({ data }) => {
          context.commit('getData', data);
        }).catch((err) => {
          console.log(err);
        });
    },
    logout(context) {
      context.commit('logout');
    },
    editData(context, data) {
      context.commit('editData', data);
    },
  },
  modules: {
  },
});