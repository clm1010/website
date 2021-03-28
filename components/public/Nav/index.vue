<template>
  <b-navbar toggleable="lg" type="dark">
    <h1>
      <nuxt-link to="/" class="navbar-brand"
        ><img src="@/assets/images/logo.jpg" alt="" srcset=""
      /></nuxt-link>
    </h1>
    <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/">首页</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/about">公司简介</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/products">产品中心</nuxt-link>
        </li>
        <!-- <b-nav-item href="/Home">首页</b-nav-item>
        <b-nav-item href="/about">Disabled</b-nav-item> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  padding: 0;
  .navbar-nav {
    .nav-link {
      color: $color-555555;
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
