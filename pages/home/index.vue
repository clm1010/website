<template>
  <b-container fluid="xl">
    <h2>应用领域</h2>
    <b-row class="content-list">
      <template v-for="(item, index) in appField">
        <nuxt-link
          :to="item.linkUrl"
          :key="index"
          class="col-sm-1-3 col-sm-1-5 col-md-1-5 col-lg-1-5"
        >
          <dl>
            <dt>
              <img :src="item.imgUrl" alt="Image" />
            </dt>
            <dd>{{ item.text }}</dd>
          </dl>
        </nuxt-link>
      </template>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  layout: 'default',
  data() {
    return {
      appField: [
        {
          text: '物流仓储',
          imgUrl: require('@/assets/images/yz-1.jpg'),
          linkUrl: '/'
        },
        {
          text: '智能制造',
          imgUrl: require('@/assets/images/yz-2.jpg'),
          linkUrl: '/products'
        },
        {
          text: '医疗',
          imgUrl: require('@/assets/images/yz-3.jpg'),
          linkUrl: '/'
        },
        {
          text: '公共事业',
          imgUrl: require('@/assets/images/yz-4.jpg'),
          linkUrl: '/'
        },
        {
          text: '零售',
          imgUrl: require('@/assets/images/yz-5.jpg'),
          linkUrl: '/'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container-xl {
  margin: 1.875rem auto 5rem auto;
  h2 {
    text-align: center;
  }
  a {
    &:hover {
      dl {
        background-color: $color-Brand;
        color: $color-FFFFFF;
      }
    }
  }
}
</style>
