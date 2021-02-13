import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: JSON.parse(localStorage.getItem("users") || "[]")
    // users: [
    // {
    //   id: 1,
    //   fName: "Roman",
    //   sName: "Test",
    //   color: "67b482",
    //   contacts: [
    //     {
    //       contactName: "tel",
    //       contactValue: "+44562153264"
    //     },
    //     {
    //       contactName: "email",
    //       contactValue: "testt@gmail.com"
    //     }
    //   ]
    // },
    //   {
    //     id: 2,
    //     fName: "Liliia",
    //     sName: "Lawasz",
    //     color: "fcd5ce",
    //     contacts: [
    //       {
    //         contactName: "tel",
    //         contactValue: "+346745743452"
    //       },
    //       {
    //         contactName: "email",
    //         contactValue: "lawasz228@mail.gg"
    //       }
    //     ]
    //   }
    // ]
  },
  mutations: {
    save_new_contact(state, value) {
      state.users.push(value);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    delete_contact(state, id) {
      state.users = state.users.filter(user => user.id != id);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    save_new_data(state, value) {
      state.users.forEach(u => {
        if (u.id === value.uId) {
          u.contacts = value.contacts;
        }
      });
      localStorage.setItem("users", JSON.stringify(state.users));
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
      localStorage.setItem("users", JSON.stringify(state.users));
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
    SAVE_NEW_DATA({ commit }, value) {
      commit("save_new_data", value);
    },
    ADD_NEW_CONTACT_IFNO({ commit }, value) {
      commit("add_new_contact_info", value);
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
