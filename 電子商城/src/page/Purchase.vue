<script setup>
import { useRouter } from "vue-router";
import Purchase from "../components/Purchase.vue";
</script>
<script>
export default {
  methods: {
    gotohintmobile() {
      this.$router.push("/hintmobile");
    },
  },
};
</script>
<template>
  <div class="overflow-x-hidden">
    <div class="relative w-screen overflow-x-hidden">
      <!-- Gray block title -->
      <div class="w-full h-[6vw] bg-[#F28383] flex justify-center items-center">
        <p class="font-bold text-[3vw] text-white">訂單詳情</p>
      </div>

      <div>
        <Purchase />
        <Purchase />
      </div>

      <!-- Bottom gray block (total price, checkout) -->
      <footer>
        <div
          class="w-full h-[40vw] bg-[#F28383] mt-[3vw] flex flex-col items-center"
        >
          <div
            class="w-[90vw] h-[6vw] bg-[#FFFFFF] mb-[2vw] mt-[2vw] flex items-center"
          >
            <p class="font-black text-[3vw] ml-[2vw]">付款方式</p>
            <p class="text-[3vw] pl-[60vw]">僅限匯款</p>
          </div>
          <input
            class="w-[90vw] h-[6vw] bg-[#FFFFFF] mb-[2vw] flex items-center font-black text-[3vw] pl-[2vw]"
            placeholder="請輸入 (匯款帳號)後五碼"
          />
          <div class="w-[90vw] h-[6vw] bg-[#FFFFFF] mb-[2vw] flex items-center">
            <p class="font-black text-[3vw] ml-[2vw]">總金額</p>
            <p class="font-black text-[3vw] pl-[63vw]">＄</p>
          </div>

          <button
            @click="gotohintmobile"
            class="w-[90vw] h-[12vw] bg-[#FFFFFF] font-black text-[3vw]"
          >
            結帳
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>
