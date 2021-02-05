<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Contact <span> Book </span></router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&family=Lato:wght@300;400&family=Russo+One&display=swap");
body {
  margin: 0;
  padding: 0;
  background-image: url("assets/email-pattern.png");
}

#app {
  font-family: "Lato", "Roboto Mono", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 60px;
  background-color: $river;
  box-shadow: 0px 1px 5px 1px $asbestos;
  z-index: 5;

  a {
    color: $white;
    font-size: 30px;
    text-decoration: none;

    span {
      color: $midnight;
    }
  }
}
</style>
