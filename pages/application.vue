<template>
  <b-container fluid class="product-main">
    <app-category :category="appList"></app-category>
    <nuxt-child></nuxt-child>
  </b-container>
</template>

<script>
import AppCategory from '@/components/Application/appCategory'
export default {
  name: 'Application',
  components: {
    AppCategory
  },
  layout: 'custom',
  async asyncData({ app, store }) {
    const category = store.state.appCategory.data
    // console.log(productCategoryList)
    return {
      appList: category || []
    }
  },
  data() {
    return {
      appList: []
    }
  }
}
</script>

<style lang="scss" scoped>
.product-main {
  padding: 0;
}
</style>
