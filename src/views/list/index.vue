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
  async mounted() {
    console.log(this.$route);
    const gid = this.$route.query.classificationId
    const logDate = dayjs().format("YYYY-MM-DD")
    // if (localStorage.getItem("useruuid")) {
    //   console.log("List mounted");
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
