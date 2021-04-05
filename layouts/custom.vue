<template>
  <div>
    <my-header />
    <Jumbotron />
    <Nuxt />
    <my-footer />
  </div>
</template>
<script>
import MyHeader from '@/components/public/header/index'
import MyFooter from '@/components/public/footer/index'
import Jumbotron from '@/components/Jumbotron/index'
export default {
  name: 'Custom',
  components: {
    MyHeader,
    MyFooter,
    Jumbotron
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
