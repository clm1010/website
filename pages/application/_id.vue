<template>
  <b-container fluid-xl>
    <b-tabs pills align="center">
      <b-tab title="物流仓储" active>
        <h3>物流仓储</h3>
      </b-tab>
      <b-tab title="物流仓储"><b-card-text>Tab contents 2</b-card-text></b-tab>
      <b-tab title="物流仓储"><b-card-text>Tab contents 2</b-card-text></b-tab>
      <b-tab title="物流仓储"><b-card-text>Tab contents 2</b-card-text></b-tab>
    </b-tabs>
  </b-container>
</template>

<script>
export default {
  components: {},
  layout: 'custom',
  validate({ params }) {
    if (params.id && params.id !== 'undefined') {
      return true
    }
    return true
  }
}
</script>

<style lang="scss" scoped>
.container-fluid {
  // padding: 0;
  border: 1px solid red;
}
</style>
