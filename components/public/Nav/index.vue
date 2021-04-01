<template>
  <b-navbar toggleable="lg" type="dark">
    <h1>
      <nuxt-link to="/" class="navbar-brand"
        ><img src="@/assets/images/logo.jpg" alt="" srcset=""
      /></nuxt-link>
    </h1>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/">首页</b-nav-item>
        <b-nav-item-dropdown ref="dropdown" text="公司简介" right>
          <b-dropdown-item to="/about">公司简介</b-dropdown-item>
          <b-dropdown-item to="#">新闻资讯</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="产品中心" right>
          <b-dropdown-item to="/products">产品中心</b-dropdown-item>
          <b-dropdown-item to="/">移动数据终端</b-dropdown-item>
          <b-dropdown-item to="/">固定式扫描器</b-dropdown-item>
          <b-dropdown-item to="/">扫码引擎</b-dropdown-item>
          <b-dropdown-item to="/">手持扫描枪</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="应用领域" right>
          <b-dropdown-item to="/products">物流仓储</b-dropdown-item>
          <b-dropdown-item to="/">医疗</b-dropdown-item>
          <b-dropdown-item to="/">公共事业</b-dropdown-item>
          <b-dropdown-item to="/">零售</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item to="/">服务与支持</b-nav-item>
        <b-nav-item to="/">联系我们</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {}
  },
  mounted() {
    // this.$root.$on('bv::dropdown::show', (bvEvent) => {
    //   console.log('Dropdown is about to be shown', bvEvent)
    // })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.navbar {
  padding: 0;
  h1 {
    margin: 0;
  }
  .navbar-nav {
    ::v-deep.nav-link {
      color: $color-555555;
      .nav-item {
        border: 1px solid red;
      }
    }
  }
  .navbar-brand {
    padding-top: 0;
  }
  .navbar-toggler {
    background-color: rgba(140, 140, 140, 0.6);
  }
  .navbar-collapse {
    background-color: $color-FFFFFF;
    .navbar-nav {
      li {
        padding: 0 0.625rem;
      }
    }
  }
}
</style>
