<template>
  <div class="classification-details-content">
    <div class="details">
      <div class="details-title">
        <div class="details-title-link" @click="goPage(SelectClassification)">
          {{ SelectClassification.classificationName }}
        </div>
      </div>
      <div class="details-all">
        <div class="details-content">
          <div
            class="details-content-item"
            v-for="(i, index) in SelectClassification.children"
            :key="i.id"
          >
            <div class="details-content-item-link" @click="goPage(i)">
              <span @mouseover="hoverDetails(index, i.classificationId)">
                {{ i.classificationName }}</span
              >

              <i v-if="hoverIndex === index" class="fas fa-angle-right"></i>
            </div>
          </div>
        </div>
        <div class="goods-list-content">
          <div class="goods-list-box" v-if="GoodsList.length > 0">
            <div class="goods-list-all">全部系列产品</div>
            <div
              class="goods-list-item"
              v-for="good in GoodsList"
              :key="good.goodId"
            >
              {{ good.goodName }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
@Component({
  components: {},
})
export default class GoodsClassificationDeatil extends Vue {
  public hoverIndex = 0; // 鼠标移入的索引
  public hoverDetailsId = this.GoodsClassificationTree[0].classificationId; // 鼠标移入的Id

  @Watch("SelectClassification.classificationId", {
    immediate: true,
    deep: true,
  })
  public onSelectClassificationChange(newVal: number, oldVal: number) {
    this.hoverIndex = -1;
    this.$nextTick(() => {
      this.hoverIndex = 0;
      this.hoverDetailsId = this.GoodsClassificationTree[0].classificationId;
    });
  }

  @Prop({ type: Object }) public SelectClassification: any;
  public emitResetListBarIndex(): void {
    this.$emit("ResetHoverIndex");
  }
  public goPage(SelectClassification: any): void {
    this.$emit("SetShadowMask");
    this.$nextTick(() => {
      this.$router.push({
        path: "/home/list",
        query: {
          classificationId: SelectClassification.classificationId,
        },
      });
    });
  }

  public hoverDetails(index: number, classificationId: number): void {
    this.hoverIndex = index;
    this.hoverDetailsId = classificationId;
  }

  get GoodsClassificationTree() {
    return this.SelectClassification.children;
  }

  get GoodsList() {
    console.log(
      this.goods.filter(
        (item: { goodClassification: any }) =>
          item.goodClassification === this.hoverDetailsId
      )
    );
    return this.goods.filter(
      (item: { goodClassification: any }) =>
        item.goodClassification === this.hoverDetailsId
    );
  }

  get goods() {
    console.log(this.$store.getters.getGoodsList);
    return this.$store.getters.getGoodsList;
  }
}
</script>

<style lang="scss" scoped>
@keyframes leftToRightFadeIn {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.classification-details-content {
  position: fixed;
  top: 130px;
  height: 700px;
  width: 100%;
  left: 0;
  // background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background: #fff;
  .details {
    width: 1440px;
    height: 100%;
    position: relative;
    padding: 24px;
    .details-title {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .details-title-link {
        position: relative;
        width: max-content;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 32px;
        font-weight: 700;
        color: #333;
        cursor: pointer;
      }
      .details-title-link:after {
        content: "";
        display: block;
        position: absolute;
        top: 100%;
        left: 50%;
        width: 0;
        margin-top: 2px;
        border-bottom: 2px solid #000;
        -webkit-transition: left 0.2s cubic-bezier(0.4, 0, 0.2, 1),
          width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        transition: left 0.2s cubic-bezier(0.4, 0, 0.2, 1),
          width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .details-title-link:hover {
        color: #000;
      }
      .details-title-link:hover.details-title-link:after {
        width: 100%;
        left: 0;
      }
    }
    .details-all {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      .details-content {
        width: 20%;
        height: calc(100% - 60px);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding-top: 24px;
        padding-right: 24px;
        .details-content-item {
          width: 100%;
          height: 60px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 18px;
          font-weight: 700;
          color: #333;
          cursor: pointer;
          &:hover {
            color: #000;
          }
          .details-content-item-link {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #333;
            cursor: pointer;
            .fas {
              animation: leftToRightFadeIn 0.5s ease-in-out;
              animation-fill-mode: forwards;
            }
          }
        }
      }
      .goods-list-content {
        width: 40%;
        height: calc(100% - 200px);
        // background: saddlebrown;
        padding: 24px;
        padding-left: 96px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        border-right: 1px solid #999;
        .goods-list-box {
          .goods-list-all,
          .goods-list-item {
            width: 100%;
            height: 60px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 18px;
            position: relative;
            // font-weight: 300;

            cursor: pointer;
            &:hover {
              color: #000;
              font-weight: 700;
            }
          }
          .goods-list-all,
          .goods-list-item {
            &:after {
              content: "";
              display: block;
              position: absolute;
              top: 100%;
              left: 50%;
              width: 0%;
              margin-top: 2px;
              border-bottom: 2px solid #000;
              -webkit-transition: left 0.2s cubic-bezier(0.4, 0, 0.2, 1),
                width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
              transition: left 0.2s cubic-bezier(0.4, 0, 0.2, 1),
                width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            }
          }
          .goods-list-all:hover.goods-list-all:after,
          .goods-list-item:hover.goods-list-item:after {
            width: 100%;
            left: 0;
          }
        }
      }
    }
  }
}
</style>
