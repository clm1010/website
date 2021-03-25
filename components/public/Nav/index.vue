<template>
  <b-navbar toggleable="lg" type="dark">
    <nuxt-link to="/" class="navbar-brand"
      ><img src="@/assets/images/logo.jpg" alt="" srcset=""
    /></nuxt-link>
    <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <nuxt-link to="/Home">首页</nuxt-link>
        <!-- <b-nav-item href="Home"></b-nav-item> -->
        <!-- <b-nav-item href="Demo1">Disabled</b-nav-item> -->
        <nuxt-link to="/Demo1">Disabled</nuxt-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"
            >Search</b-button
          >
        </b-nav-form> -->

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
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
