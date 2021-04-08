<template>
  <b-container fluid class="display-item">
    <b-container fluid="xl">
      <div class="title">
        <h3>{{ dataList[0].title }}</h3>
        <span style="margin-top: 1.25rem;"></span>
      </div>
      <b-row>
        <b-col sm="12" md="12" lg="6">
          <CarouselTwo
            v-if="typeContent === 'products-details-id'"
            class="carouse-height"
            :image-list="dataList[0].url"
          />
        </b-col>
        <b-col sm="6" md="6" lg="6">
          {{ dataList }}
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import CarouselTwo from '@/components/CarouselTwo'
export default {
  name: 'DetailsItem',
  components: {
    CarouselTwo
  },
  props: {
    typeContent: {
      type: String,
      default: ''
    },
    dataList: {
      type: Array,
      default: () => [],
      require: true
    }
  },
  data() {
    return {}
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.display-item {
  padding: 3.75rem 0 7.5rem 0;
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
}
.carouse-height {
  height: 400px;
}
@media (min-width: 576px) {
  .carouse-height {
    height: 400px;
  }
}
@media (min-width: 768px) {
  .carouse-height {
    height: 600px;
  }
}
@media (min-width: 992px) {
  .carouse-height {
    height: 520px;
  }
}
@media (min-width: 1200px) {
  .carouse-height {
    height: 600px;
  }
}
</style>
