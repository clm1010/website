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
    console.log(params)
    if (params.id && params.id !== 'undefined') {
      return true
    }
    return false
  },
  async asyncData({ app, params }) {
    const prodList = await app.$axios
      .$get('/json/category.json')
      .then((res) => {
        console.log(res)
        return res.data || []
      })
    return {
      prodList
    }
    // console.log()
  },
  data() {
    return {
      // prodList: []
    }
  },
  head() {
    return {
      title: `${this.productName ? this.productName + ' - ' : ''}产品`
    }
  },
  computed: {
    ...mapState('category', {
      navList: 'productCategoryList'
    }),
    productName() {
      // console.log(this.$route)
      const item = this.navList.filter((item) => {
        return item.type === this.$route.params.id.split('=')[1]
      })[0]
      return item ? item.title : ''
    },
    currentProdList() {
      const resultArr = this.prodList.filter((item) => {
        return item.type === this.$route.params.id.split('=')[1]
      })
      return resultArr
    }
  },
  mounted() {
    console.log(this.$route.params.id.split('='))
    // this.getProdList()
  },
  methods: {
    // getProdList() {
    //   this.$axios.$get('/json/category.json').then((res) => {
    //     console.log(res)
    //     this.tempList = res.data
    //   })
    // }
  }
}
</script>

<style lang="scss" scoped>
.product-body {
  padding: 0;
  // border: 1px solid red;
}
</style>
