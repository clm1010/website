<template>
  <b-container fluid class="display-item">
    <b-container fluid="xl">
      {{detailsData}}
    </b-container>
  </b-container>
</template>

<script>
export default {
  props: {
    detailsData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style></style>
