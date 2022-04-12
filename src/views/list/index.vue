<template>
  <div>123213</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import dayjs from "dayjs";
@Component({
  components: {},
})
export default class List extends Vue {
  public gid = -1;

  created() {
    if (!localStorage.getItem("useruuid")) {
      this.$router.push("/login");
    }
    this.gid = Number(this.$route.query.classificationId) ?? -1;
  }

  get GoodsList() {
    return this.$store.getters.getGoodsList.filter((item: any) => {
      return item.classificationId === this.gid;
    });
  }

  async mounted() {
    console.log(this.$route);
    const logDate = dayjs().format("YYYY-MM-DD");
    // if (localStorage.getItem("useruuid")) {
    //   const res = await this.axios.post("/userLog/addUserLog", {
    //     useruuid: localStorage.getItem("useruuid"),
    //     type: "list",
    //     // gid: this.$route.query.gid,
    //   });
    // }
  }
}
</script>

<style lang="scss" scoped></style>
