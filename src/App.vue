<template>
  <div id="app">
    <TopBar></TopBar>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TopBar from "./components/topBar.vue";
@Component({
  components: { TopBar },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
}
</style>
