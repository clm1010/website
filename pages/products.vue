<template>
  <b-container fluid class="product-main">
    <product-category :category="prodList"></product-category>
    <nuxt-child></nuxt-child>
  </b-container>
</template>

<script>
import ProductCategory from '@/components/Product/productCategory'
export default {
  name: 'Products',
  components: {
    ProductCategory
  },
  layout: 'custom',
  async asyncData({ app, store }) {
    const category = store.state.category.data
    // console.log(productCategoryList)
    return {
      prodList: category || []
    }
  },
  data() {
    return {
      prodList: []
    }
  }
}
</script>

<style lang="scss" scoped>
.product-main {
  padding: 0;
}
</style>
