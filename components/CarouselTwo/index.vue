<template>
  <b-container fluid>
    <div
      ref="swiperTop"
      v-swiper:mySwiper="swiperOptionTop"
      class="gallery-top"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in imageList"
          :key="index"
        >
          <img :src="require(`@/assets/images${item}`)" />
        </div>
      </div>
      <div
        class="swiper-button-next swiper-button-white"
        slot="button-next"
      ></div>
      <div
        class="swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div>
    </div>
    <div
      ref="swiperThumbs"
      v-swiper:mySwiper="swiperOptionThumbs"
      class="gallery-thumbs"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in imageList"
          :key="index"
        >
          <img :src="require(`@/assets/images${item}`)" />
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'CarouselTwo',
  props: {
    imageList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOptionTop: {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
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
  mounted() {
    console.log(this.imageList)
    // this.$nextTick(() => {
    //   const swiperTop = this.$refs.swiperTop.swiper
    //   const swiperThumbs = this.$refs.swiperThumbs.swiper
    //   swiperTop.controller.control = swiperThumbs
    //   swiperThumbs.controller.control = swiperTop
    // })
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
    // img {
    //   width: 50%;
    // }
  }

  .swiper-container {
    background-color: #000;
  }
  .swiper-slide {
    // background-size: cover;
    // background-position: center;
    // &.slide-1 {
    //   background-image: url('/static/images/surmon-1.jpg');
    // }
    // &.slide-2 {
    //   background-image: url('/static/images/surmon-6.jpg');
    // }
    // &.slide-3 {
    //   background-image: url('/static/images/surmon-8.jpg');
    // }
    // &.slide-4 {
    //   background-image: url('/static/images/surmon-9.jpg');
    // }
    // &.slide-5 {
    //   background-image: url('/static/images/surmon-10.jpg');
    // }
  }
  .gallery-top {
    height: 80% !important;
    width: 100%;
  }
  .gallery-thumbs {
    height: 20% !important;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
}
</style>
