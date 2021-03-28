<template>
  <header class="header-main">
    <b-container fluid="xl">
      <Nav />
    </b-container>
  </header>
</template>

<script>
import Nav from '@/components/public/Nav/index'
export default {
  name: 'MyHeader',
  components: {
    Nav
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.header-main {
  position: sticky;
  top: 0;
  width: 100%;
  height: 6.375rem;
  box-shadow: 0 0 10px #ccc;
  background-color: #fff;
  z-index: 999;
  .container {
    padding: 0;
  }
}
</style>
