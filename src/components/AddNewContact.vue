<template>
  <article class="add-new-contact">
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
  name: "AddNewContact"
};
</script>

<style lang="scss" scoped>
.add-new-contact {
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
