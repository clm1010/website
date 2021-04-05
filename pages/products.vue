<template>
  <b-container fluid class="product-main">
    <product-category :product-category-list="prodList"></product-category>
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
    const productCategoryList = store.state.category.productCategoryList
    // console.log(productCategoryList)
    return {
      prodList: productCategoryList || []
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
