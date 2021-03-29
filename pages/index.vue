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
          <dl>
            <dt>
              <img :src="item.imgUrl" alt="Image" />
            </dt>
            <dd>{{ item.text }}</dd>
          </dl>
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
      dl {
        background-color: $color-Brand;
        color: $color-FFFFFF;
      }
    }
  }
  dl {
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    dt {
      width: 100%;
      max-height: 12.5rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        cursor: pointer;
        transition: all 1s;
        &:hover {
          transform: scale(1.4);
        }
      }
    }
    dd {
      text-align: center;
      padding: 0.8rem 0;
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
