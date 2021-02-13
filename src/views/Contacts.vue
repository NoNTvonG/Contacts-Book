<template>
  <div id="contacts">
    <div class="container">
      <div class="contacts-list">
        <!-- Button to add a new contact. Stylized for all cards -->
        <NewContact @showAddNewContact="showAddNewContact" />
        <!-- List of all available contacts -->
        <ContactCard v-for="user in users" :key="user.id" :user="user" />
      </div>
    </div>
    <!-- Pop-up to add a new contact -->
    <AddNewContact
      @closeAddNewContact="showAddNewContact"
      v-if="showaddNewContact"
    />
  </div>
</template>

<script>
import NewContact from "../components/NewContact";
import ContactCard from "../components/ContactCard";
import AddNewContact from "../components/AddNewContact.vue";

export default {
  name: "Contacts",
  components: {
    NewContact,
    ContactCard,
    AddNewContact
  },
  data() {
    return {
      popupVisible: false,
      showaddNewContact: false,
      color: "#" + ((Math.random() * 0xffffff) << 0).toString(16)
    };
  },
  methods: {
    showAddNewContact() {
      this.showaddNewContact = !this.showaddNewContact;
    }
  },
  computed: {
    users() {
      return this.$store.getters.getUsers;
    }
  }
};
</script>

<style lang="scss" scoped>
#contacts {
  z-index: -1;
  .contacts-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    grid-auto-rows: 250px;
    grid-gap: 15px;
    justify-content: center;
    @include sub-container;
  }
}
</style>
