<template>
  <div>
    <div>
      <div v-for="good in shoppingCar" :key="good.goodId">
        <div>{{ good.goodName }}</div>
        <div>{{ good.goodPrice }}</div>
        <div>{{ good.goodNumber }}</div>
        <div>{{ good.goodPrice * good.goodNumber }}</div>
      </div>
      <!-- {{ shoppingCar }} -->
    </div>
    <button @click="clearShoppingCar" class="">清空购物车</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {},
})
export default class shoppingCar extends Vue {
  clearShoppingCar() {
    this.$store.commit("clearShoppingCar");
  }
  get shoppingCar() {
    return this.$store.state.shoppingCar;
  }
}
</script>

<style lang="scss" scoped></style>
