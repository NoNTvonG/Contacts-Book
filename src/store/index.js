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
            contactValue: "+44562153264"
          },
          {
            contactName: "email",
            contactValue: "testt@gmail.com"
          }
        ],
        history: []
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
            contactValue: "lawasz228@mail.gg"
          }
        ]
      },
      {
        id: 3,
        fName: "Vasia",
        sName: "Pupkin",
        color: "",
        contacts: [],
        history: []
      },
      {
        id: 4,
        fName: "Voitek",
        sName: "Kiebab",
        color: "",
        contacts: [],
        history: []
      },
      {
        id: 5,
        fName: "Panalia",
        sName: "Surafyn",
        color: "",
        contacts: [],
        history: []
      },
      {
        id: 6,
        fName: "Juzik",
        sName: "Juzikowicz",
        color: "",
        contacts: [],
        history: []
      }
    ]
  },
  mutations: {
    save_new_contact(state, value) {
      state.users.push(value);
    },
    delete_contact(state, id) {
      state.users = state.users.filter(user => user.id != id);
    },
    add_new_contact_info(state, value) {
      state.users.forEach(u => {
        if (u.id === value.cId) {
          u.contacts.push({
            contactName: value.contactName,
            contactValue: value.contactValue
          });
        }
      });
      // const user = state.users.find(user => user.id === value.cId);
      // user.contacts.push({
      //   contactName: value.contactName,
      //   contactValue: value.contactValue
      // });
    },
    delete_one_contact_info(state, value) {
      state.users.forEach(u => {
        if (u.id === value.cId) {
          u.contacts.splice(value.infoId, 1);
        }
      });
    },
    edit_one_contact_info(state, value) {
      state.users.forEach(u => {
        if (u.id === value.userId) {
          u.contacts[value.infoId].contactName = value.contactName;
          u.contacts[value.infoId].contactValue = value.contactValue;
        }
      });
    }
  },
  actions: {
    SAVE_NEW_CONTACT({ commit }, value) {
      const color = {
        color: Math.floor(Math.random() * 16777215).toString(16)
      };
      const newContact = { ...value, ...color };
      commit("save_new_contact", newContact);
    },
    DELETE_CONTACT({ commit }, id) {
      commit("delete_contact", id);
    },
    ADD_NEW_CONTACT_IFNO({ commit }, value) {
      commit("add_new_contact_info", value);
    },
    DELETE_ONE_CONTACT_INFO({ commit }, value) {
      commit("delete_one_contact_info", value);
    },
    EDIT_ONE_CONTACT_INFO({ commit }, value) {
      commit("edit_one_contact_info", value);
    }
  },
  getters: {
    getUsers: s => {
      // eslint-disable-next-line no-unused-vars
      return s.users.map(({ contacts, history, ...user }) => user); // Все окрім contacts, history
    },
    getSelectedUser: s => id => {
      return s.users.find(user => user.id === id);
    }
  }
});
