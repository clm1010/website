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
        <!-- <li class="nav-item">
          <nuxt-link class="nav-link" to="/">首页</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/about"
            >公司简介
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/products">产品中心</nuxt-link>
        </li> -->
        <b-nav-item to="/">首页</b-nav-item>
        <b-nav-item-dropdown text="公司简介" right>
          <b-dropdown-item to="/about">公司简介</b-dropdown-item>
          <b-dropdown-item to="#">新闻资讯</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="产品中心" right>
          <b-dropdown-item to="/products">产品中心</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
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
