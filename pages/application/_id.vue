<template>
  <b-container fluid class="product-body">
    <display-item
      :type-content="'application'"
      :type-name="appName"
      :content-list="currentAppList"
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
  async asyncData({ app, params }) {
    const appList = await app.$axios
      .$get('/json/appList.json')
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
      appList
    }
  },
  data() {
    return {
      // navList: this.category.category,
      // prodList: this.categoryList.categoryList
    }
  },
  head() {
    return {
      title: `${this.appName ? this.appName + ' - ' : ''}应用领域`
    }
  },
  computed: {
    ...mapState(['appCategory']),
    appName() {
      const item = this.appCategory.data.filter((item) => {
        return item.type === this.$route.params.id
      })[0]
      return item ? item.title : ''
    },
    currentAppList() {
      const resultArr = this.appList.filter((item) => {
        return item.app === this.$route.params.id
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
.application-body {
  padding: 0;
  // border: 1px solid red;
}
</style>
