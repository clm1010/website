<template>
  <div>
    details
  </div>
</template>

<script>
export default {
  validate({ params }) {
    console.log(params)
    // if (params.id && params.id !== 'undefined') {
    return true
    // }
    // return false
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style></style>
