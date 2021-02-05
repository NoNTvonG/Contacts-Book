<template>
  <div id="contacts">
    <div class="container">
      <div class="contacts-list">
        <AddNewContact />
        <ContactCard v-for="user in users" :key="user.id" :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import AddNewContact from "../components/AddNewContact";
import ContactCard from "../components/ContactCard";

export default {
  name: "Contacts",
  components: {
    AddNewContact,
    ContactCard
  },
  data() {
    return {
      color: "#" + ((Math.random() * 0xffffff) << 0).toString(16)
    };
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
    padding: 30px 0;
    background-color: $milk;
    min-height: calc(100vh - 60px - 60px);
    box-shadow: 0px 0px 5px 0px $silver;
  }
}
</style>
