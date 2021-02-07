import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 1,
        fName: "Roman",
        sName: "Jin",
        color: "67b482",
        contacts: [
          {
            contactName: "tel",
            contactValue: "+3806425197"
          },
          {
            contactName: "email",
            contactValue: "testt@gmail.com"
          },
          {
            contactName: "Adres",
            contactValue:
              "Rzeszów ul.Starzyńskiego 2/78 35-508 tdcfyvgubhnijmok,l tfvygbuhn rtyvgbuhn trfytguhkjni hhtjyhghbkh ytghbjbhvujbhjgu jhgbjy7u"
          }
        ]
      },
      {
        id: 2,
        fName: "Liliia",
        sName: "Lawasz",
        contacts: [
          {
            contactName: "tel",
            contactValue: "+346745743452"
          },
          {
            contactName: "email",
            contactValue: "lawasz228@mail.bu"
          }
        ]
      },
      { id: 3, fName: "Vasia", sName: "Pupkin" },
      { id: 4, fName: "Voitek", sName: "Kiebab" },
      { id: 5, fName: "Panalia", sName: "Surafyn" },
      { id: 6, fName: "Juzik", sName: "Juzikowicz", color: "red" }
    ]
  },
  mutations: {
    save_new_contact(state, value) {
      const color = {
        color: Math.floor(Math.random() * 16777215).toString(16)
      };
      const newContact = { ...value, ...color };
      state.users.push(newContact);
    },
    deleteContact(state, id) {
      state.users = state.users.filter(user => user.id != id);
    }
  },
  actions: {
    SAVE_NEW_CONTACT({ commit }, value) {
      commit("save_new_contact", value);
    },
    DELETE_CONTACT({ commit }, id) {
      commit("deleteContact", id);
    }
  },
  getters: {
    getUsers: s => {
      // eslint-disable-next-line no-unused-vars
      return s.users.map(({ contacts, ...user }) => user); // Все окрім contacts
    },
    getSelectedUser: s => id => {
      return s.users.find(user => user.id === id);
    }
  }
});
