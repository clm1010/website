<template>
  <b-container fluid>
    <swiper
      :options="swiperOptions"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <!-- <swiper-slide v-for="(item, index) in dataImage" :key="index">
        <img
          :src="item.imgUrl"
          alt=""
          srcset=""
          style="max-width: 100%; height: auto;"
        />
      </swiper-slide> -->
      <swiper-slide>1</swiper-slide>
      <div class="swiper-pagination"></div>
    </swiper>
  </b-container>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      swiperOptions: {
        autoplay: 3000,
        speed: 1000,
        // loop: true,
        // slidesPerView: 'auto',
        // centeredSlides: true,
        // spaceBetween: 30,
        // pagination: {
        //   el: '.swiper-pagination',
        //   dynamicBullets: true
        // }
        // on: {
        //   slideChange() {
        //     console.log('onSlideChangeEnd', this)
        //   },
        //   tap() {
        //     console.log('onTap', this)
        //   }
        // }
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
}
</style>
