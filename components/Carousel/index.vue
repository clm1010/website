<template>
  <b-container fluid>
    <b-carousel
      ref="carousel"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      @mouseenter="stopSwiper"
      @mouseleave="startSwiper"
    >
      <b-carousel-slide
        v-for="(item, index) in dataImage"
        :key="index"
        :img-src="item.imgUrl"
      ></b-carousel-slide>
    </b-carousel>
    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br />
      Sliding: {{ sliding }}
    </p> -->
  </b-container>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      slide: 0,
      sliding: null,
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
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    startSwiper() {
      this.$refs.carousel.start()
    },
    stopSwiper() {
      this.$refs.carousel.pause()
    }
  }
}
</script>

<style lang="scss" scoped>
.container-fluid {
  padding: 0;
}
</style>
