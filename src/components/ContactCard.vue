<template>
  <article class="contact-card">
    <!-- Contact option -->
    <div class="option-panel">
      <div class="delete" @click="deleteContact">
        <i class="fas fa-trash-alt"></i>
      </div>
    </div>
    <!-- Contact logo -->
    <div class="contact-icon" :style="{ backgroundColor: '#' + user.color }">
      <span>{{ user.fName.substr(0, 1) }}</span>
      <span>{{ user.sName.substr(0, 1) }}</span>
    </div>
    <!-- Contact Name -->
    <div class="card-body">
      <p class="card-title">{{ user.fName }} {{ user.sName }}</p>
    </div>
    <!-- Contact Url -->
    <router-link
      :to="{ name: 'ContactDetale', params: { id: user.id } }"
      class="card-url"
    />
  </article>
</template>

<script>
export default {
  name: "ContactCard",
  props: ["user"],
  data() {
    return {};
  },
  methods: {
    deleteContact() {
      if (confirm("are you sure?")) {
        this.$store.dispatch("DELETE_CONTACT", this.user.id);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-card {
  @include card;
  position: relative;
  overflow: hidden;
  z-index: 3;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 5px 2px rgba($concrete, 0.5);
  }
  &:hover .option-panel {
    top: 0px;
    opacity: 1;
  }

  .card-url {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .option-panel {
    position: absolute;
    margin: 5px 5px 0 0;
    top: -50px;
    opacity: 0;
    right: 0;
    transition: all 0.3s;
    z-index: 25;

    .delete {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 35px;
      width: 35px;
      color: $clouds;
      background-color: $alizarin;
      border-radius: 10px;
    }
  }

  .contact-icon {
    @include card-icon;
    border-radius: 50%;
    background-color: $river;
    span {
      font-size: 24px;
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
