<template>
  <div>
    <div>{{ gid }}</div>
    <div>{{ goodInfo }}</div>
  </div>
</template>

<script lang="ts">
import dayjs from "dayjs";
import Vue from "vue";
import Component from "vue-class-component";
@Component({
  components: {},
})
export default class Product extends Vue {
  public gid = -1;
  public goodInfo = {};

  created() {
    this.gid = Number(this.$route.query.goodId) ?? -1;
    this.goodInfo = this.$store.getters.getGoodsList.find((item: any) => {
      console.log(typeof item.goodId);
      console.log(typeof this.gid);
      return item.goodId === this.gid;
    });
    console.log(this.$store.getters.getGoodsList);
    console.log(this.goodInfo);
  }

  async mounted() {
    const logDate = dayjs().format("YYYY-MM-DD");
    console.log(this.gid);
    // console.log(this.$route);
  }
}
</script>

<style lang="scss" scoped></style>
