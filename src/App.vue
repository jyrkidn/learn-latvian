<template>
  <div
    id="app"
    class="container">
    <header>
      <router-link
        to="/"
        class="link"
      >Home</router-link>
      <router-link
        to="/overview"
        class="link"
      >Overview</router-link>
    </header>
    <router-view class="main" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './assets/styles/variables';

.container {
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 100%;

  color: $secondary;
}

header {
  justify-self: end;
  padding: 1rem;
}

.link {
  vertical-align: top;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  letter-spacing: 0.1em;
  text-align: center;
  font-size: 1rem;
  margin: 10px;
  position: relative;

  &.router-link-exact-active {
    text-decoration: underline;
  }
}
</style>
