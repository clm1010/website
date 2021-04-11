<template>
  <b-jumbotron
    text-variant="white"
    :style="showObj && showObj.img ? showObj.img : ''"
  >
    <div class="content" v-if="showObj">
      <h3>{{ showObj.title }}</h3>
      <p>{{ showObj.desc }}</p>
    </div>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'Jumbotron',
  data() {
    return {}
  },
  computed: {
    showObj() {
      const _tempName = this.$route.name
      if (_tempName === 'about') {
        return {
          title: '公司介绍',
          img: `background-image:url(${require('@/assets/images/banner1.jpg')})`,
          desc: 'About Mobydata'
        }
      }
      if (_tempName === 'products-prod-id') {
        return {
          title: '产品中心',
          img: `background-image:url(${require('@/assets/images/banner2.jpg')})`,
          desc: 'Products'
        }
      }
      if (_tempName === 'application-id') {
        return {
          title: '应用领域',
          img: `background-image:url(${require('@/assets/images/banner3.jpg')})`,
          desc: 'Application Area'
        }
      }
      if (_tempName === 'support') {
        return {
          title: '服务与支持',
          img: `background-image:url(${require('@/assets/images/banner4.jpg')})`,
          desc: 'Services and Support'
        }
      }
      return null
    }
  },
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style lang="scss" scoped>
.jumbotron {
  background-position: center center;
  // background-image: url('@/assets/images/banner1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 17.5rem;
  margin-bottom: 0;
  h3,
  p {
    text-align: center;
    padding-top: 1.125rem;
  }
  h3 {
    line-height: 3.125rem;
    font-size: 2.25rem;
    font-weight: bold;
  }
  p {
    line-height: 0.0625rem;
    text-transform: uppercase;
    font-size: 1.75rem;
  }
}
</style>
