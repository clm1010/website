<template>
  <b-container fluid>
    <div
      v-swiper:mySwiper="swiperOptions"
      class="swiperWrap"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
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
        mousewheel: true,
        // centeredSlides: true,
        // spaceBetween: 30,
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
        // on: {
        //   slideChange() {
        //     console.log('onSlideChangeEnd', this)
        //   },
        //   tap() {
        //     console.log('onTap', this)
        //   }
        // }
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
    onSwiper(swiper) {
      console.log(swiper)
    },
    onSlideChange() {
      console.log('slide change')
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
