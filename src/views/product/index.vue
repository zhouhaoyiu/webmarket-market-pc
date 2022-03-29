<template>
  <div></div>
</template>

<script lang="ts">
import dayjs from "dayjs";
import Vue from "vue";
import Component from "vue-class-component";
@Component({
  components: {},
})
export default class Product extends Vue {
  async mounted() {
    const gid = this.$route.query.goodsId;
    const logDate = dayjs().format("YYYY-MM-DD");
    // console.log(this.$route);
  }
}
</script>

<style lang="scss" scoped></style>
