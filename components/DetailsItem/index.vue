<template>
  <b-container fluid class="display-item">
    <b-container fluid="xl">
      <div class="title">
        <h3>{{ dataObject.title }}</h3>
        <span style="margin-top: 1.25rem;"></span>
      </div>
      <b-row>
        <b-col sm="12" md="12" lg="6">
          <CarouselTwo
            v-if="typeContent === 'products-details-id'"
            class="carouse-height"
            :image-list="dataObject.url"
          />
        </b-col>
        <b-col class="display-item-list" sm="6" md="6" lg="6">
          <template v-if="dataObject.title">
            <h3>{{ dataObject.title }}</h3>
            <hr />
          </template>
          <template v-if="dataObject.desc_1 && dataObject.desc_1.title">
            <div class="desc_1">
              <p>{{ dataObject.desc_1.title }}</p>
              <ol type="a">
                <li v-if="dataObject.desc_1.a">{{ dataObject.desc_1.a }}</li>
                <li v-if="dataObject.desc_1.b">{{ dataObject.desc_1.b }}</li>
                <li v-if="dataObject.desc_1.c">{{ dataObject.desc_1.c }}</li>
                <li v-if="dataObject.desc_1.d">{{ dataObject.desc_1.c }}</li>
                <li v-if="dataObject.desc_1.e">{{ dataObject.desc_1.c }}</li>
              </ol>
            </div>
          </template>
          <template v-if="dataObject.desc_2 && dataObject.desc_2.title">
            <div class="desc_2">
              <p>{{ dataObject.desc_2.title }}</p>
              <ol type="a">
                <li v-if="dataObject.desc_2.a">{{ dataObject.desc_2.a }}</li>
                <li v-if="dataObject.desc_2.b">{{ dataObject.desc_2.b }}</li>
                <li v-if="dataObject.desc_2.c">{{ dataObject.desc_2.c }}</li>
                <li v-if="dataObject.desc_2.d">{{ dataObject.desc_2.c }}</li>
                <li v-if="dataObject.desc_2.e">{{ dataObject.desc_2.c }}</li>
              </ol>
            </div>
          </template>
          <template v-if="dataObject.desc_3 && dataObject.desc_3.title">
            <div class="desc_3">
              <p>{{ dataObject.desc_3.title }}</p>
              <ol type="a">
                <li v-if="dataObject.desc_3.a">{{ dataObject.desc_3.a }}</li>
                <li v-if="dataObject.desc_3.b">{{ dataObject.desc_3.b }}</li>
                <li v-if="dataObject.desc_3.c">{{ dataObject.desc_3.c }}</li>
                <li v-if="dataObject.desc_3.d">{{ dataObject.desc_3.d }}</li>
                <li v-if="dataObject.desc_3.e">{{ dataObject.desc_3.e }}</li>
              </ol>
            </div>
          </template>
          <template v-if="dataObject.desc_4 && dataObject.desc_4.title">
            <div class="desc_4">
              <p>{{ dataObject.desc_4.title }}</p>
              <ol type="a">
                <li v-if="dataObject.desc_4.a">{{ dataObject.desc_4.a }}</li>
                <li v-if="dataObject.desc_4.b">{{ dataObject.desc_4.b }}</li>
                <li v-if="dataObject.desc_4.c">{{ dataObject.desc_4.c }}</li>
                <li v-if="dataObject.desc_4.d">{{ dataObject.desc_4.d }}</li>
                <li v-if="dataObject.desc_4.e">{{ dataObject.desc_4.e }}</li>
                <li v-if="dataObject.desc_4.f">{{ dataObject.desc_4.f }}</li>
              </ol>
            </div>
          </template>
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
    dataObject: {
      type: Object,
      default: () => null,
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
  .display-item-list {
    p {
      font-weight: 600;
    }
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
