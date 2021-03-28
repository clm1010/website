<template>
  <div class="page-index">
    <h2>应用领域</h2>
    <b-row class="index-content">
      <template v-for="(item, index) in appField">
        <nuxt-link
          :to="item.linkUrl"
          :key="index"
          class="col-sm-1-3 col-sm-1-5 col-md-1-5 col-lg-1-5"
        >
          <b-card :img-src="item.imgUrl" img-alt="Image" img-top align="center">
            <b-card-text>
              {{ item.text }}
            </b-card-text>
          </b-card>
        </nuxt-link>
      </template>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {},
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
.page-index {
  margin: 1.875rem auto 5rem auto;
  padding: 0;
  h2 {
    text-align: center;
  }
  a {
    &:hover {
      .card-body {
        background-color: $color-Brand;
        color: $color-FFFFFF;
      }
    }
  }
  // .col-xs-1-5,
  // .col-sm-1-5,
  // .col-md-1-5,
  // .col-lg-1-5 {
  //   position: relative;
  //   min-height: 1px;
  //   padding-right: 10px;
  //   padding-left: 10px;
  // }

  // .col-xs-1-5 {
  //   flex: 0 0 20%;
  //   max-width: 20%;
  // }
  .col-sm-1-3 {
    flex: 0 0 233.333333%;
    max-width: 33.333333%;
  }

  @media (min-width: 576px) {
    // .col-sm-1-5 {
    //     flex: 0 0 20%;
    //     max-width: 20%;
    //   }
    .col-sm-1-3 {
      flex: 0 0 233.333333%;
      max-width: 33.333333%;
    }
  }
  @media (min-width: 768px) {
    .col-sm-1-3 {
      flex: 0 0 233.333333%;
      max-width: 33.333333%;
    }
  }
  @media (min-width: 992px) {
    .col-sm-1-3 {
      flex: 0 0 233.333333%;
      max-width: 33.333333%;
    }
  }
  @media (min-width: 1200px) {
    .col-lg-1-5 {
      flex: 0 0 20%;
      max-width: 20%;
    }
  }
}
</style>
