<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  width: 100vw;
  display: flex;
}
</style>
