<template>
  <div id="app">
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from "./components/footer.vue";
import getGoods from "./utils/getGoods";
import getGoodsClassification from "./utils/getGoodsClassifacation";
@Component({
  components: { Footer },
})
export default class App extends Vue {
  public mounted(): void {
    getGoodsClassification();
    getGoods();
  }
}
</script>

<style lang="scss">
#app {
  font-family: apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  // height: 100vh;
  overflow: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
</style>
