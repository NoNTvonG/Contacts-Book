<template>
  <article class="new-contact" @click="showAddNewContact">
    <div class="contact-icon">
      <i class="fas fa-user-plus"></i>
    </div>
    <!-- Contact Name -->
    <div class="card-body">
      <p class="card-title">Add new contact</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "NewContact",
  data() {
    return {
      active: false
    };
  },
  methods: {
    showAddNewContact() {
      this.$emit("showAddNewContact");
      this.active = !this.active;
    }
  }
};
</script>

<style lang="scss" scoped>
.new-contact {
  @include card;

  .contact-icon {
    @include card-icon;
    i {
      color: $concrete;
      font-size: 60px;
    }
  }

  .card-body {
    @include card-body;
    .card-title {
      @include card-title;
    }
  }
}
</style>
