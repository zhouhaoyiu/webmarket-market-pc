<template>
  <div>
    <div>推荐商品</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component({
  components: {},
})
export default class RecommendGoods extends Vue {
  mounted() {
    console.log("RecommendGoods mounted");
  }
}
</script>

<style lang="scss" scoped></style>
