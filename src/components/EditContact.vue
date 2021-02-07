<template>
  <div class="edit-contact">
    <div class="edit-contact-wrapper">
      <div class="edit-contact-header">
        <h2>Edit contact</h2>
      </div>
    </div>
    <div class="edit-contact-body"></div>
    <div class="edit-contact-footer"></div>
  </div>
</template>

<script>
export default {};
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
  }
}
</style>
