<template>
  <b-container fluid class="display-item">
    <b-container fluid="xl">
      <template v-if="typeContent === 'products'">
        <div class="title">
          <h3>{{ typeName }}</h3>
          <span style="margin-top: 1.25rem;"></span>
        </div>
        <b-row class="content-list">
          <template v-for="(item, index) in contentList">
            <b-col sm="3" md="3" lg="3" :key="index">
              <!-- {{ item.path }} -->
              <!-- <nuxt-link :to="item.path" > -->
              <nuxt-link :to="item.path">
                <dl>
                  <dt>
                    <img
                      :src="require(`@/assets/images${item.url}`)"
                      alt="Image"
                    />
                  </dt>
                  <dd>{{ item.desc }}</dd>
                </dl>
              </nuxt-link>
            </b-col>
          </template>
        </b-row>
      </template>
      <template v-else>
        <div>应用领域</div>
      </template>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: 'DisplayItem',
  props: {
    typeContent: {
      type: String,
      default: '',
      require: true
    },
    typeName: {
      type: String,
      default: '',
      require: true
    },
    contentList: {
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

  a {
    &:hover {
      dl {
        background-color: $color-Brand;
        color: $color-FFFFFF;
      }
    }
  }
}
</style>
