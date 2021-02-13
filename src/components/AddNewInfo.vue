<template>
  <div class="add-contact" ref="popup">
    <div class="add-contact-wrapper">
      <div class="add-contact-header">
        <h2>Add new info</h2>
      </div>
      <!-- Form of adding a new contact information -->
      <form @submit.prevent class="add-contact-body">
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
        <div class="add-contact-footer">
          <input
            class="btn-hover-green"
            type="submit"
            value="Save"
            @click="saveNewInfo"
          />
          <input
            class="btn-hover-red"
            type="button"
            value="Back"
            @click="showAddNewInfo"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cId"],
  data() {
    return {
      contactName: "",
      contactValue: ""
    };
  },
  methods: {
    showAddNewInfo() {
      this.$emit("showAddNewInfo");
    },
    // Check and call function (ADD_NEW_CONTACT_IFNO) from VueX
    saveNewInfo() {
      if (this.contactName !== "" && this.contactValue !== "") {
        this.$store.dispatch("ADD_NEW_CONTACT_IFNO", {
          cId: this.cId,
          contactName: this.contactName,
          contactValue: this.contactValue
        });
        this.showAddNewInfo();
      }
    }
  },
  mounted() {
    let vm = this;
    document.addEventListener("click", function(item) {
      if (item.target === vm.$refs["popup"]) {
        vm.showAddNewInfo();
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.add-contact {
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

  .add-contact-wrapper {
    width: 300px;
    display: flex;
    flex-direction: column;
    background-color: $clouds;
    border-radius: 10px;

    .add-contact-header {
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
    .add-contact-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      @include input-text-style;

      .add-contact-footer {
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
