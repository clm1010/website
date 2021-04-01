<template>
  <b-container fluid-xl>
    <b-tabs pills align="center">
      <b-tab title="移动数据终端" active>
        <h3>移动数据终端</h3>
        <p>213123123</p>
      </b-tab>
      <b-tab title="固定式扫描器"
        ><b-card-text>Tab contents 2</b-card-text></b-tab
      >
      <b-tab title="扫码引擎"><b-card-text>Tab contents 2</b-card-text></b-tab>
      <b-tab title="手持扫描枪"
        ><b-card-text>Tab contents 2</b-card-text></b-tab
      >
    </b-tabs>
  </b-container>
</template>

<script>
export default {
  name: 'Products',
  components: {},
  layout: 'custom_layout'
}
</script>

<style lang="scss" scoped>
.container-fluid {
  // padding: 0;
  border: 1px solid red;
}
</style>
