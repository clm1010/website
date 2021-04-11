<template>
  <b-container fluid class="product-body">
    <display-item
      :type-content="'products'"
      :type-name="productName"
      :content-list="currentProdList"
    ></display-item>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  validate({ params }) {
    // console.log(params)
    if (params.id && params.id !== 'undefined') {
      return true
    }
    return false
  },
  // async asyncData({ app, params }) {
  //   const prodList = await app.$axios
  //     .$get('/json/category.json')
  //     .then((res) => {
  //       if (res.status === 200 && res.code === 0) {
  //         return res.data
  //       } else {
  //         return []
  //       }
  //     })
  //     .catch((error) => {
  //       console.log({ error })
  //     })
  //   return {
  //     prodList
  //   }
  //   // console.log()
  // },
  data() {
    return {
      // navList: this.category.category,
      // prodList: this.categoryList.categoryList
    }
  },
  head() {
    return {
      title: `${this.productName ? this.productName + ' - ' : ''}产品`
    }
  },
  computed: {
    ...mapState(['category', 'categoryList']),
    productName() {
      const item = this.category.data.filter((item) => {
        return item.type === this.$route.params.id
      })[0]
      return item ? item.title : ''
    },
    currentProdList() {
      const resultArr = this.categoryList.data.filter((item) => {
        return item.type === this.$route.params.id
      })
      return resultArr
    }
  },
  mounted() {
    // console.log(this.$route.params.id.split('='))
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.product-body {
  padding: 0;
  // border: 1px solid red;
}
</style>
