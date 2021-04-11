<template>
  <b-container fluid class="product-body">
    <details-item
      :type-content="'products-details-id'"
      :data-object="currentData"
    ></details-item>
  </b-container>
</template>

<script>
export default {
  validate({ params }) {
    // console.log(params)
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
  },
  data() {
    return {
      dataList: []
    }
  },
  computed: {
    currentData() {
      const tempParams = this.$route.params.id.split('&')
      const prodId = tempParams[0].split('=')
      const detId = tempParams[1].split('=')
      // console.log(prodId)
      // console.log(detId)
      const resultData = this.dataList.find((item) => {
        return item.id === detId[1] && item.prod === prodId[1] ? item : ''
      })
      return resultData
    }
  },
  mounted() {
    // console.log(this.currentData)
  }
}
</script>

<style></style>
