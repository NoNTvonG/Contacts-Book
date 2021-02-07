<template>
  <div class="add-new-contact" ref="add-new-contact">
    <div class="new-contact-wrapper">
      <div class="contact-header">
        <h2>Add new contact</h2>
      </div>
      <div class="contact-body">
        <input
          type="text"
          name="fName"
          id="fName"
          required
          autocomplete="off"
          placeholder="Name"
          v-model="user.fName"
        />
        <input
          type="text"
          name="sName"
          id="sName"
          required
          autocomplete="off"
          placeholder="Surname"
          v-model="user.sName"
        />
        <input
          type="tel"
          name="tel"
          id="tel"
          required
          autocomplete="off"
          placeholder="tel."
          v-model="user.contacts[0].contactValue"
        />
      </div>
      <div class="contact-footer">
        <input
          class="btn-hover-green"
          type="button"
          value="Save"
          @click="saveContact"
        />
        <input
          class="btn-hover-red"
          type="button"
          value="Close"
          @click="closeAddNewContact"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddNewContact",
  data() {
    return {
      user: {
        id: Date.now(),
        fName: "",
        sName: "",
        contacts: [
          {
            contactName: "tel",
            contactValue: ""
          }
        ]
      }
    };
  },
  methods: {
    closeAddNewContact() {
      this.$emit("closeAddNewContact");
    },
    saveContact() {
      if (
        (this.user.fName !== "") & (this.user.sName !== "") &&
        this.user.contacts[0].contactValue !== ""
      ) {
        this.$store.dispatch("SAVE_NEW_CONTACT", this.user);
        this.closeAddNewContact();
      } else {
        alert("Please fill in all the fields.");
      }
    }
  },
  mounted() {
    let vm = this;
    document.addEventListener("click", function(item) {
      if (item.target === vm.$refs["add-new-contact"]) {
        vm.closeAddNewContact();
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.add-new-contact {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba($midnight, 0.8);
  z-index: 999;

  .new-contact-wrapper {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 280px;
    background-color: $clouds;
    border-radius: 10px;

    .contact-header {
      text-align: center;
      background-color: $river;
      height: 50px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      h2 {
        margin: 0;
        color: $clouds;
        line-height: 50px;
      }
    }
    .contact-body {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      input {
        width: 260px;
        height: 30px;
        font-size: 18px;
        outline: none;
        margin: 10px 0 10px 0;
        outline: none;
        border: 0;
        background-color: transparent;
        border-bottom: 1px solid $silver;
      }
    }
    .contact-footer {
      display: flex;
      justify-content: space-evenly;
      margin-top: 20px;
      input {
        @include btn-style;
      }
    }
  }
}
</style>
