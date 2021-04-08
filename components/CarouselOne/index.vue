<template>
  <b-container fluid>
    <div
      v-swiper:mySwiper="swiperOptions"
      class="swiperWrap"
      @mouseenter="handleMouseenter"
      @mouseleave="handleMouseleave"
    >
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in dataImage"
          :key="index"
        >
          <img :src="item.imgUrl" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
      <div class="swiper-button-next swiper-button-white"></div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'CarouselOne',
  data() {
    return {
      swiperOptions: {
        autoplay: true,
        speed: 1000,
        loop: true,
        slidesPerView: 'auto',
        grabCursor: true,
        // mousewheel: true,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          // 动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
          dynamicBullets: true,
          // 动态分页器的主指示点的数量
          dynamicMainBullets: 2,
          // 此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      dataImage: [
        {
          imgUrl: require('@/assets/images/carousel-1.jpg')
        },
        {
          imgUrl: require('@/assets/images/carousel-2.jpg')
        },
        {
          imgUrl: require('@/assets/images/carousel-3.jpg')
        },
        {
          imgUrl: require('@/assets/images/carousel-4.jpg')
        },
        {
          imgUrl: require('@/assets/images/carousel-5.jpg')
        },
        {
          imgUrl: require('@/assets/images/carousel-6.jpg')
        },
        {
          imgUrl: require('@/assets/images/carousel-7.jpg')
        }
      ]
    }
  },
  methods: {
    handleMouseenter() {
      this.mySwiper.autoplay.stop()
    },
    handleMouseleave() {
      this.mySwiper.autoplay.start()
    }
  }
}
</script>

<style lang="scss" scoped>
.container-fluid {
  padding: 0;
  .swiper-slide {
    img {
      width: 100%;
    }
  }
}
</style>
