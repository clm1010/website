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
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/">首页</nuxt-link>
        </li>
        <b-nav-item-dropdown ref="dropdown" text="公司简介" right>
          <li>
            <nuxt-link class="dropdown-item" to="/about">公司简介</nuxt-link>
            <nuxt-link class="dropdown-item" to="/about">新闻资讯</nuxt-link>
          </li>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown ref="dropdown" text="产品中心" right>
          <li>
            <!--    :to="item.path" -->
            <nuxt-link
              v-for="(item, index) in category.data"
              :key="index"
              class="dropdown-item"
              :to="{
                name: 'products-prod-id',
                params: { id: item.type }
              }"
              >{{ item.title }}</nuxt-link
            >
          </li>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown ref="dropdown" text="应用领域" right>
          <li>
            <nuxt-link
              v-for="(item, index) in appCategory.data"
              :key="index"
              class="dropdown-item"
              :to="{
                name: 'application-id',
                params: { id: item.type }
              }"
              >{{ item.title }}</nuxt-link
            >
          </li>
        </b-nav-item-dropdown>
        <nuxt-link class="nav-link" to="/support">服务与支持</nuxt-link>
        <nuxt-link class="nav-link" to="/">联系我们</nuxt-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Nav',
  data() {
    return {}
  },
  computed: {
    ...mapState(['category', 'appCategory'])
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
