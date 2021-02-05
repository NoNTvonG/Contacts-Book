import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      { id: 1, fName: "Roman", lName: "Pyrih" },
      { id: 2, fName: "Liliia", lName: "Prots" },
      { id: 3, fName: "Vasia", lName: "Pupkin" },
      { id: 4, fName: "Voitek", lName: "Kiebab" },
      { id: 5, fName: "Panalia", lName: "Surafyn" },
      { id: 6, fName: "Juzik", lName: "Juzikowicz" }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getUsers: s => s.users
  }
});
