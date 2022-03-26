<template>
  <div>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component({
  components: {},
})
export default class List extends Vue {
  mounted() {
    console.log("List mounted");
  }
}
</script>

<style lang="scss" scoped></style>
