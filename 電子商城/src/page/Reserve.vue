<script setup>
import Order from "../components/Order.vue";

const Orders = [
  { num: "12345678", name: "812020", number: "83233" },
  { num: "9210290", name: "829393", number: "83201" },
];
</script>
<script>
export default {
  methods: {
    gotoadminfrontpage() {
      this.$router.push("/adminfrontpage");
    },
  },
};
</script>

<template>
  <div>
    <div class="w-full h-[40px] bg-[#F28383] flex items-center">
      <button @click="gotoadminfrontpage">
        <img
          src="../assets/arrow-left-solid.svg"
          class="w-[5vw] h-[5vw] ml-[1vw]"
        />
      </button>
      <p class="font-black text-[20px] ml-[28vw]">商品預約情況</p>
    </div>
    <div class="mt-[20px]">
      <Order
        v-for="Order in Orders"
        :key="Order.num"
        :num="Order.num"
        :name="Order.name"
        :number="Order.number"
      />
    </div>
  </div>
</template>
