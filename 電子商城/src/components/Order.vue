<script setup>
import Material from "./Material.vue";

const props = defineProps(["num", "name", "number"]);

const materials = [
  { product: "帽踢", quantity: "2" },
  { product: "書包", quantity: "1" },
];
</script>

<template>
  <div class="flex flex-col items-center">
    <div
      class="w-[70vw] h-[60vw] bg-[#F28383] bg-opacity-40 rounded-[10px] ml-[10px] mt-[20px] flex items-center"
    >
      <label>
        <input type="checkbox" class="form-checkbox h-[5vw] w-[5vw] mx-[2vw]" />
      </label>
      <div class="flex flex-col">
        <div class="font-bold mt-[10px] ml-[10px]">訂單編號 {{ num }}</div>
        <div class="font-bold mt-[10px] ml-[10px]">登入帳號 {{ name }}</div>
        <div class="font-bold mt-[10px] ml-[10px]">
          匯款帳號後五碼 {{ number }}
        </div>
        <div>
          <Material
            v-for="material in materials"
            :key="material.product"
            :product="material.product"
            :quantity="material.quantity"
          />
        </div>
        <div class="font-bold mt-[10px] ml-[10px] text-[2vw]">金額＄</div>
      </div>
    </div>
  </div>
</template>
