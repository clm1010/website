<template>
  <b-jumbotron text-variant="white">
    <div class="content">
      <h3>产品中心</h3>
      <p>Products</p>
    </div>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'Jumbotron',
  data() {
    return {}
  },
  mounted() {
    // console.log(this.$route)
  }
}
</script>

<style lang="scss" scoped>
.jumbotron {
  background-position: center center;
  background-image: url('@/assets/images/banner1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 17.5rem;
  margin-bottom: 0;
  h3,
  p {
    text-align: center;
    padding-top: 1.125rem;
  }
  h3 {
    line-height: 3.125rem;
    font-size: 2.25rem;
    font-weight: bold;
  }
  p {
    line-height: 0.0625rem;
    text-transform: uppercase;
    font-size: 1.75rem;
  }
}
</style>
