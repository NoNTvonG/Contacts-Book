<template>
  <div class="edit-contact">
    <div class="edit-contact-wrapper">
      <div class="edit-contact-header">
        <h2>Edit info</h2>
      </div>
      <form @submit.prevent class="edit-contact-body">
        <input
          type="text"
          name="title"
          id="title"
          required
          autocomplete="off"
          placeholder="Please write title"
          v-model="contactName"
        />
        <input
          type="text"
          name="description"
          id="description"
          required
          autocomplete="off"
          placeholder="Please write description"
          v-model="contactValue"
        />
        <div class="edit-contact-footer">
          <input
            class="btn-hover-green"
            type="submit"
            value="Save"
            @click="editOneContactInfo"
          />
          <input
            class="btn-hover-red"
            type="button"
            value="Back"
            @click="showEditInfo"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cId", "selectedInfo"],
  data() {
    return {
      contactName: "",
      contactValue: ""
    };
  },
  methods: {
    showEditInfo() {
      if (confirm("Are you sure you want to close this window?")) {
        this.$emit("showEditInfo");
      }
    },
    editOneContactInfo() {
      this.$store.dispatch("EDIT_ONE_CONTACT_INFO", {
        userId: this.cId,
        infoId: this.selectedInfo,
        contactName: this.contactName,
        contactValue: this.contactValue
      });
      if (this.contactName !== "" && this.contactValue !== "") {
        this.$emit("showEditInfo");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.edit-contact {
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

  .edit-contact-wrapper {
    width: 300px;
    display: flex;
    flex-direction: column;
    background-color: $clouds;
    border-radius: 10px;

    .edit-contact-header {
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
    .edit-contact-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      @include input-text-style;

      .edit-contact-footer {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        margin: 15px 0;
        input {
          @include btn-style;
        }
      }
    }
  }
}
</style>
