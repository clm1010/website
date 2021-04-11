<template>
  <b-container fluid class="about-main">
    <b-container fluid="xl">
      <div class="title">
        <h3>公司介绍</h3>
        <span style="margin-top: 1.25rem;"></span>
      </div>
      <b-row class="content">
        <b-col sm="12" md="12" lg="6" xl="6">
          <h5 class="mt-0 mb-4"><strong>公司介绍</strong></h5>
          <p class="mb-0 mb-2">
            苏州摩比信通智能系统有限公司是一家专注在自动数据采集的全球领先供应商,
            其领先技术涵盖条码阅读器和数据采集移动终端等领域。为了适用于不同应用场景，摩比信通在物流快递、医疗护理、制造仓储、商业等领域为用户提供更智能更便利的条码解决方案。
          </p>
          <p class="mb-0">
            摩比信通专注技术驱动力，始终以满足客户需求作为产品质量的核心，在研究开发方面付出了大量投资。和欧洲顶级合作伙伴Datalogic一起建立全球顶级研发团队，该团队曾获得苏州工业园区“双百领军人才”的殊荣，在专利积累和创新方面具备极大的热情，目前拥有各类专利40余件。未来，摩比信通将以市场为导向，技术革新为使命，为用户提供更先进的产品和技术服务。
          </p>
        </b-col>
        <b-col sm="12" md="12" lg="6" xl="6">
          <b-img
            :src="require('@/assets/images/about-1.jpg')"
            fluid
            alt="about"
          ></b-img>
        </b-col>
        <!-- <b-media right-align vertical-align="center">
          <template v-slot:aside>
            <b-img
              :src="require('@/assets/images/about-1.jpg')"
              width="480"
              alt="placeholder"
            ></b-img>
          </template>
          <h5 class="mt-0 mb-4"><strong>公司介绍</strong></h5>
          <p class="mb-0 mb-2">
            苏州摩比信通智能系统有限公司是一家专注在自动数据采集的全球领先供应商,
            其领先技术涵盖条码阅读器和数据采集移动终端等领域。为了适用于不同应用场景，摩比信通在物流快递、医疗护理、制造仓储、商业等领域为用户提供更智能更便利的条码解决方案。
          </p>
          <p class="mb-0">
            摩比信通专注技术驱动力，始终以满足客户需求作为产品质量的核心，在研究开发方面付出了大量投资。和欧洲顶级合作伙伴Datalogic一起建立全球顶级研发团队，该团队曾获得苏州工业园区“双百领军人才”的殊荣，在专利积累和创新方面具备极大的热情，目前拥有各类专利40余件。未来，摩比信通将以市场为导向，技术革新为使命，为用户提供更先进的产品和技术服务。
          </p>
        </b-media> -->
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: 'About',
  layout: 'custom',

  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.about-main {
  padding: 0;
  .container-xl {
    padding: 3.75rem 0 7.5rem 0;
    .content {
      margin: 0;
    }
    .title {
      h3 {
        line-height: 2.25rem;
        font-size: 2rem;
        color: $color-181818;
        font-weight: bold;
      }
    }
    span {
      height: 0.375rem;
      width: 7.5rem;
      -webkit-border-radius: 0.3125rem;
      -moz-border-radius: 0.3125rem;
      border-radius: 0.3125rem;
      background-color: $color-ececec;
      display: block;
      margin-bottom: 1.375rem;
    }
    .content {
      p {
        text-indent: 2rem;
        line-height: 2rem;
      }
    }
  }
}
</style>
