<script setup>
import { ref } from "vue";
import QuantityPlusMinus from "./Quantity-plus-minus.vue";
</script>

<template>
  <div class="overflow-x-hidden flex justify-center items-center">
    <div
      class="w-[70vw] h-[30vw] border-[1px] border-black mb-[5vw] flex items-center"
    >
      <label class="flex items-center">
        <input type="checkbox" class="form-checkbox h-[3vw] w-[3vw] ml-[3vw]" />
      </label>
      <img class="w-[25vw] h-[20vw] ml-[3vw] border-[0.2vw] border-black" />
      <div class="flex flex-col ml-[4vw]">
        <p class="font-black text-[3vw] text-black">PRODUCT 1</p>
        <div class="flex">
          <p class="font-black text-[2.8vw] text-black mt-[2vw]">$</p>
          <p class="font-blod text-[2.8vw] ml-[15vw] text-black mt-[2vw]">x</p>
        </div>
        <div
          class="border-[1px] border-[#000000] text-[4vw] font-bold text-center w-[25vw] h-[8vw] mt-[1.15vw] flex justify-center items-center"
        >
          <QuantityPlusMinus />
        </div>
      </div>
    </div>
  </div>
</template>
