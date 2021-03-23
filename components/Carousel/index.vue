<template>
  <div v-swiper:swiper="swiperOption">
    <div class="swiper-wrapper">
      <div v-for="(item, index) in dataImage" :key="index" class="swiper-slide">
        <img :src="item.imgUrl" />
      </div>
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
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
      ],
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        },
        speed: 1000,
        lazy: {
          loadPrevNext: true
        },
        preventClicksPropagation: true, // 阻止click冒泡。拖动Swiper时阻止click事件。
        // simulateTouch: false, // 鼠标模拟手机触摸。默认为true，Swiper接受鼠标点击、拖动。
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  swiper() {
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    return this.$refs.swiperBox.swiper
  },
  methods: {
    // 改动四
    stopSwiper() {
      // 鼠标移入停止播放
      this.swiper.autoplay.stop()
    },
    startSwiper() {
      // 移出继续播放
      this.swiper.autoplay.start()
    }
  }
}
</script>

<style lang="scss" scoped></style>
