<template>
  <footer class="footer-main">
    <div class="line"></div>
    <b-container fluid="xl" class="links">
      <b-row>
        <b-col cols="4" sm="4" md="4" lg="2" xl="2">
          <dl>
            <dt><nuxt-link to="/about">公司介绍</nuxt-link></dt>
            <dd><nuxt-link to="/about">公司介绍</nuxt-link></dd>
            <dd><nuxt-link to="/">新闻资讯</nuxt-link></dd>
          </dl>
        </b-col>
        <b-col cols="4" sm="4" md="4" lg="2" xl="2">
          <dl>
            <dt><nuxt-link to="/products">产品中心</nuxt-link></dt>
            <dd><nuxt-link to="/">手持扫描枪</nuxt-link></dd>
            <dd><nuxt-link to="/">扫码引擎</nuxt-link></dd>
            <dd><nuxt-link to="/">移动数据终端</nuxt-link></dd>
            <dd><nuxt-link to="/">固定式扫描器</nuxt-link></dd>
          </dl>
        </b-col>
        <b-col cols="4" sm="4" md="4" lg="2" xl="2">
          <dl>
            <dt><nuxt-link to="/">应用领域</nuxt-link></dt>
            <dd><nuxt-link to="/">物流仓储</nuxt-link></dd>
            <dd><nuxt-link to="/">智能制造</nuxt-link></dd>
            <dd><nuxt-link to="/">医疗</nuxt-link></dd>
            <dd><nuxt-link to="/">公共事业</nuxt-link></dd>
            <dd><nuxt-link to="/">零售</nuxt-link></dd>
          </dl>
        </b-col>
        <b-col cols="4" sm="4" md="4" lg="2" xl="2">
          <dl>
            <dt><nuxt-link to="/">服务与支持</nuxt-link></dt>
            <dd><nuxt-link to="/">服务与支持</nuxt-link></dd>
          </dl>
        </b-col>
        <b-col cols="4" sm="4" md="4" lg="2" xl="2">
          <dl>
            <dt><nuxt-link to="/">联系我们</nuxt-link></dt>
            <dd><nuxt-link to="/">联系我们</nuxt-link></dd>
          </dl>
        </b-col>
        <b-col cols="4" sm="4" md="4" lg="2" xl="2">
          <dl>
            <dt>联系方式</dt>
            <dd>电话：86-512-68234699</dd>
            <dd>邮箱：Marketing@mobydata.com</dd>
          </dl>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="copyright">
      <nuxt-link to="/"
        >Copyright © 苏州摩比信通智能系统有限公司 苏ICP备19009743号-1</nuxt-link
      >
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'MyFooter',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
footer.footer-main {
  .line {
    background: $color-0093d4;
    padding: 2rem 0;
    color: #fff;
  }
  .links {
    font-size: 14px;
    margin-top: 1.875rem;
    margin-bottom: 3.125rem;
  }
  .copyright {
    border-top: 1px solid $color-e8e8e8;
    text-align: center;
    font-size: 14px;
    height: 4.875rem;
    line-height: 4.875rem;
  }
}
</style>
