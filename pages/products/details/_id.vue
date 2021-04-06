<template>
  <div>
    {{detItem}}
  </div>
</template>

<script>
export default {
  validate({ params }) {
    console.log(params)
    if (params.id && params.id !== 'undefined') {
      return true
    }
    return false
  },
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    // console.log(route)
    // console.log(params)
    // console.log(query)
    if(Object.keys(query) !== 0 && Object.keys(query.key) !== 0) {
      const detItem = query.key
      return {
        detItem
      }
    }
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
