<template>
  <div>
    <my-header />
    <Carousel />
    <b-container>
      <Nuxt />
    </b-container>
    <b-container>
      <my-footer />
    </b-container>
  </div>
</template>
<script>
import MyHeader from '@/components/public/header/index'
import MyFooter from '@/components/public/footer/index'
import Carousel from '@/components/Carousel'
export default {
  name: 'Default',
  components: {
    MyHeader,
    MyFooter,
    Carousel
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
