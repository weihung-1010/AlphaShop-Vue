<template>
  <div class="part">
    <div
      v-for="shipInfo in shipInfos"
      :key="shipInfo.id"
      class="ship-way-wrapper"
    >
      <div class="ship-way">
        <input
          class="mr-3"
          name="ship"
          type="radio"
          :value="shipInfo.id"
          v-model="shipWayId"
        />
        <label for="" class="mt-2"
          >{{ shipInfo.shipWay }} <br />
          {{ shipInfo.shipTime }}</label
        >
      </div>
      <div class="ship-price">{{ shipInfo.shipPrice }}<br /></div>
    </div>
  </div>
</template>

<style scoped>
.part {
  height: 300px;
}
.ship-way-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  height: 60px;
  border: 1px solid #f0f0f5;
  border-radius: 4px;
}
.ship-way {
  display: flex;
  align-items: center;
  flex-basis: 37%;
  height: 100%;
  padding-left: 15px;
}
.ship-price {
  margin-right: 34px;
  white-space: nowrap;
  font-size: 14px;
}
</style>

<script>
export default {
  data() {
    return {
      shipWayId: this.initialShipWayId,
    };
  },
  props: {
    step: {
      type: Number,
      required: true,
    },
    shipInfos: {
      type: Array,
      required: true,
    },
    initialShipWayId: {
      type: Number,
      required: true,
    },
  },
  watch: {
    shipWayId: {
      handler: function () {
        console.log("shipWayId change");
        this.$emit("change-ship-way-id", this.shipWayId);
      },
    },
  },
};
</script>