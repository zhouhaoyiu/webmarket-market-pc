<template>
  <div class="home">
    <TopBar></TopBar>
    <ListBar></ListBar>
  </div>
</template>

<script lang="ts">
import ListBar from "@/components/ListBar.vue";
import TopBar from "@/components/topBar.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { TopBar, ListBar },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // flex-wrap: wrap;

}
</style>
