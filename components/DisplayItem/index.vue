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
              <!-- <nuxt-link :to="item.path" > -->
              <!-- :to="{
                  name: 'products-details-id',
                  params: { id: item.id, typeId: item.type }
                }" -->
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
        <div class="title">
          <h3>{{ typeName }}</h3>
          <span style="margin-top: 1.25rem;"></span>
        </div>
        <b-row v-if="contentList.length !== 0" class="content-application">
          <b-col sm="12" md="12" lg="6" xl="6">
            <b-img
              :src="require(`@/assets/images${contentList[0].url}`)"
              fluid
              :alt="contentList[0].content.title"
            ></b-img>
          </b-col>
          <b-col sm="12" md="12" lg="6" xl="6">
            <h5 class="mt-0" style="font-weight: 600;">
              {{ contentList[0].content.title }}
            </h5>
            <template v-for="(item, index) in contentList[0].content.desc">
              <p :key="index">
                <span>{{ item.k }}.</span> {{ item.v }}
              </p>
            </template>
          </b-col>
          <!-- <b-media v-if="contentList.length !== 0">
              <template v-slot:aside>
                <b-img
                  :src="require(`@/assets/images${contentList[0].url}`)"
                  width="600"
                  alt="placeholder"
                ></b-img>
              </template>

              <h5 class="mt-0" style="font-weight: 600;">
                {{ contentList[0].content.title }}
              </h5>
              <template v-for="(item, index) in contentList[0].content.desc">
                <p :key="index">
                  <span>{{ item.k }}.</span> {{ item.v }}
                </p>
              </template>
            </b-media> -->
        </b-row>
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
  // .content-application {
  //   border-bottom: solid 1px #e6e9ea;
  // }
}
</style>
