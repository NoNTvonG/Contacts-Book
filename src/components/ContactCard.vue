<template>
  <article class="contact-card">
    <!-- Contact option -->
    <div class="option-panel">
      <div class="edit">
        <i class="fas fa-edit"></i>
      </div>
      <div class="delete">
        <i class="fas fa-trash-alt"></i>
      </div>
    </div>
    <!-- Contact logo -->
    <div
      class="contact-icon"
      :style="{ backgroundColor: randomColor(user.id) }"
    >
      <span>{{ user.fName.substr(0, 1) }}</span>
      <span>{{ user.lName.substr(0, 1) }}</span>
    </div>
    <!-- Contact Name -->
    <div class="card-body">
      <p class="card-title">{{ user.fName }} {{ user.lName }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "ContactCard",
  props: ["user"],
  data() {
    return {
      colorCache: {}
    };
  },
  methods: {
    randomColor(id) {
      const r = () => Math.floor(256 * Math.random());

      return (
        this.colorCache[id] ||
        (this.colorCache[id] = `rgb(${r()}, ${r()}, ${r()})`)
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-card {
  @include card;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 5px 2px rgba($concrete, 0.5);
  }
  &:hover .option-panel {
    top: 0px;
    opacity: 1;
  }
  .option-panel {
    position: absolute;
    display: flex;
    margin: 5px 5px 0 0;
    top: -50px;
    opacity: 0;
    right: 0;
    transition: all 0.3s;

    .edit {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 35px;
      width: 35px;
      background-color: $orange;
      margin-right: 5px;
      border-radius: 10px;
    }

    .delete {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 35px;
      width: 35px;
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
