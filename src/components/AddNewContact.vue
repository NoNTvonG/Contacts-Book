<template>
  <div class="add-new-contact">
    <div class="new-contact-panel">
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
          v-model="user.tel"
        />
      </div>
      <div class="contact-footer">
        <input class="save" type="button" value="Save" @click="saveContact" />
        <input
          class="close"
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
        tel: ""
      }
    };
  },
  methods: {
    closeAddNewContact() {
      this.$emit("closeAddNewContact");
    },
    saveContact() {
      this.$store.dispatch("SAVE_NEW_CONTACT", this.user);
      this.closeAddNewContact();
    }
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

  .new-contact-panel {
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
        height: 30px;
        width: 80px;
        font-size: 20px;
        color: $concrete;
        border: 1px solid $concrete;
        border-radius: 25px;
        outline: none;
        transition: 0.3s;
        cursor: pointer;
      }
      .save {
        &:hover {
          border-color: $emerald;
          color: $emerald;
        }
      }
      .close {
        &:hover {
          border-color: $alizarin;
          color: $alizarin;
        }
      }
    }
  }
}
</style>
