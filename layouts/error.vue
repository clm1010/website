<template>
  <div class="error-page">
    <div class="error">
      <div class="title">找不到页面</div>
      <nuxt-link class="error-link" to="/">回到首页</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  head() {
    return {
      title: `找不到页面`,
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.error-page {
  padding: 1rem;
  background: $color-F7F8FB;
  color: $color-555555;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  font-weight: 100 !important;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  .title {
    font-size: 1.5rem;
    margin-top: 15px;
    color: $color-RegularText;
    margin-bottom: 8px;
  }
  .error-link {
    display: block;
    margin-top: 24px;
    padding: 14px 24px;
    font-size: 18px;
    color: $color-FFFFFF;
    background-color: $color-0093d4;
    border-radius: 5px;
  }
}
</style>
