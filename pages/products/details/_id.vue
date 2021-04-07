<template>
  <b-container fluid class="product-body">
    <details-item
      :type-content="'products-details-id'"
      :data-list="dataList"
    ></details-item>
  </b-container>
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
  async asyncData({ app, params, query }) {
    const dataList = await app.$axios
      .$get('/json/product-details.json')
      .then((res) => {
        if (res.status === 200 && res.code === 0) {
          return res.data
        } else {
          return []
        }
      })
      .catch((error) => {
        console.log({ error })
      })

    return {
      dataList
    }
    // if (Object.keys(query) !== 0 && Object.keys(query.key) !== 0) {
    //   const dataItem = query.key
    //   return {
    //     dataItem
    //   }
    // } else {
    //   return {}
    // }
  },
  data() {
    return {
      dataList: []
    }
  },
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style></style>
