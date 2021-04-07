<template>
  <b-container fluid class="display-item">
    <CarouselTwo
      v-if="typeContent === 'products-details-id'"
      :image-list="dataList[0].url"
    />
    <b-container fluid="xl">
      {{ dataList }}
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

<style></style>
