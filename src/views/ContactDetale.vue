<template>
  <div class="">{{ userInfo.fName + " " + userInfo.sName }}</div>
</template>

<script>
export default {
  name: "ContactDetale",
  data() {
    return {
      userInfo: null
    };
  },
  created() {
    this.userInfo = this.$store.getters.getSelectedUser(
      parseInt(this.$route.params.id)
    );
  }
};
</script>

<style lang="scss" scoped></style>
