<template>
    <div style="position: relative;">
      <div
        ref="swiperTop"
        v-swiper:swiperTop="swiperOptionTop"
        class="gallery-top"
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
        v-swiper:swiperThumbs="swiperOptionThumbs"
        class="gallery-thumbs"
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
    </div>
</template>

<script>
export default {
  name: 'CarouselTwo',
  props: {
    imageList: {
      type: Array,
      default: () => []
    },
    height: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      swiperOptionTop: {
        grabCursor: true,
        // spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        grabCursor: true,
        // spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    }
  },
  mounted() {
    console.log(this.imageList)
    this.$nextTick(() => {
      const swiperTop = this.swiperTop
      const swiperThumbs = this.swiperThumbs
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
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
  border: 1px solid red;
  .swiper-container {
    height: 500px;
    background-color: rgba(0,0,0,0.4);
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .gallery-top {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    padding-bottom: 6rem;
  }

  .gallery-thumbs {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    height: 6rem;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 80px;
    height: auto;
    margin: 0;
    color: #fff;
    border: 4px solid rgba(0, 0, 0, 0);
    p {
      line-height: 30px;
      text-align: center;
    }
  }
  .gallery-thumbs .swiper-slide-active {
    border: 4px solid red;
    color: red;
    p {
      line-height: 30px;
      text-align: center;
    }
  }
}
</style>
