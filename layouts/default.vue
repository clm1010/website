<template>
  <div>
    <my-header />
    <!-- <Carousel /> -->
    <CarouselOne />
    <!-- <b-container fluid>

    </b-container> -->
    <Nuxt />
    <my-footer />
  </div>
</template>
<script>
import MyHeader from '@/components/public/header/index'
import MyFooter from '@/components/public/footer/index'
// import Carousel from '@/components/Carousel'
import CarouselOne from '@/components/CarouselOne'
export default {
  name: 'Default',
  components: {
    MyHeader,
    MyFooter,
    // Carousel,
    CarouselOne
  },
  data() {
    return {
      title: 'Indutri - Vue Nuxt Industry & Factory Business Template'
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>

<style lang="scss" scoped></style>
