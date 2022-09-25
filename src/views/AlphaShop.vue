<template>
  <div class="container py-5">
    <Navbar />
    <h4 class="mb-4">結帳</h4>
    <main class="row">
      <!-- check-left-section -->
      <section class="col-6">
        <ShopMain :step="step" />
        <component
          :step="step"
          :ship-infos="shipInfos"
          :initial-ship-way-id="shipWayId"
          @change-ship-way-id="changeShipWayId"
          :is="componentName"
        />

        <hr />

        <!-- form control -->
        <div
          id="btn-control"
          class="control-panel d-flex justify-content-between"
        >
          <button
            v-show="step !== 0"
            @click.stop.prevent="onPrevStep"
            class="btn btn-prev"
          >
            ← 上一步
          </button>
          <button class="fake-btn"></button>
          <button
            @click.stop.prevent="onNextStep"
            class="btn btn-next text-center"
          >
            {{ btnText }}
          </button>
        </div>
      </section>

      <!-- check-right-section -->
      <section class="col-5">
        <Checkout :ship-infos="shipInfos" :ship-way-id="shipWayId" />
        <hr />
      </section>
    </main>
  </div>
</template>

<style scoped>
.btn-next {
  width: 125px;
  background-color: #f67599;
  color: #fff;
}
.fake-btn {
  visibility: hidden;
}
</style>

<script>
import ShopMain from "./../components/ShopMain";
import Checkout from "./../components/Checkout";
import Navbar from "./../components/Navbar";
import FormStep0 from "./../components/FormStep0";
import FormStep1 from "./../components/FormStep1";
import FormStep2 from "./../components/FormStep2";
const dummyData = {
  shipInfos: [
    {
      id: 1,
      shipWay: "標準運送",
      shipTime: "約 3~7 個工作天",
      shipPrice: "免費",
    },
    {
      id: 2,
      shipWay: "DHL 貨運",
      shipTime: "48 小時內送達",
      shipPrice: "$500",
    },
  ],
};
export default {
  components: {
    ShopMain,
    Checkout,
    Navbar,
    FormStep0,
    FormStep1,
    FormStep2,
  },
  data() {
    return {
      step: 0,
      shipInfos: dummyData.shipInfos,
      shipWayId: 1,
    };
  },
  methods: {
    onPrevStep() {
      if (this.step <= 0) return;
      this.step--;
    },
    onNextStep() {
      if (this.step >= 2) return;
      this.step++;
    },
    changeShipWayId(shipWayId) {
      this.shipWayId = shipWayId;
      console.log("shipWayId", this.shipWayId);
    },
  },
  computed: {
    btnText() {
      return this.step === 2 ? "確認下單" : "下一步 →";
    },
    componentName() {
      if (this.step === 0) {
        return FormStep0;
      } else if (this.step === 1) {
        return FormStep1;
      } else {
        return FormStep2;
      }
    },
  },
};
</script>