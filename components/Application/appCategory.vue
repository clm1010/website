<template>
  <b-container fluid class="about-category">
    <b-container fluid="xl">
      <b-row class="about-category-row">
        <b-col
          class="about-category-col"
          sm="6"
          md="6"
          lg="2"
          xl="2"
          v-for="(item, index) in category"
          :key="index"
        >
          <nuxt-link
            :class="{
              'nav-item--active': item.type == currentType
            }"
            :to="{
              name: 'application-id',
              params: { id: item.type }
            }"
            >{{ item.title }}</nuxt-link
          >
        </b-col>
      </b-row>
    </b-container>
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
  props: {
    category: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  computed: {
    currentType() {
      let _tempId = this.$route.params.id
      // console.log(_tempId)
      if (_tempId.indexOf('&') > 0) {
        _tempId = _tempId.split('&')
        _tempId = _tempId[0].split('=')
        return _tempId[1]
      } else {
        return _tempId
      }
    }
  },
  mounted() {
    // console.log(this.currentType)
  }
}
</script>

<style lang="scss" scoped>
.about-category {
  width: 100%;
  line-height: 2.5rem;
  padding-top: 0.125rem;
  background-color: $color-f9f9f9;
  border-bottom: solid 1px $color-e6e9ea;
  padding: 0.75rem 0;
  .about-category-row {
    .about-category-col {
      padding: 0 2rem;
      text-align: center;
    }
    .nav-item--active,
    .nav-item--active:hover {
      background-color: $color-0093d4;
      color: $color-FFFFFF;

      > a {
        color: $color-FFFFFF;
      }
    }
  }
  a {
    display: block;
    background-color: $color-e8e8e8;
    line-height: 2.5rem;
    border-radius: 1.5625rem;
  }
}
</style>
