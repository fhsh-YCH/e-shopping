<script setup>
import minusSvg from "../assets/minus-solid.svg";
import editSvg from "../assets/pen-to-square-solid.svg";

const props = defineProps(["product", "price"]);
</script>

<template>
  <div class="flex mt-[50px]">
    <div
      class="h-[100px] w-[100px] border-2 border-[#000000] rounded-[8px]"
    ></div>
    <div class="ml-[5vw]">
      <p class="mt-[2vw] text-[15px] font-blod whitespace-nowrap">
        {{ product }}
      </p>
      <p class="mt-[2vw] text-[12px] font-blod">${{ price }}</p>
      <button
        @click="gotomaterial"
        class="w-[50px] h-[20px] text-[#ffffff] rounded-[6px] font-black mt-[2vw] shadow-2xl bg-[#F28383] text-[8px]"
      >
        VIEW
      </button>
      <div class="flex mt-[10px] justify-evenly">
        <button
          class="w-[25px] h-[25px] rounded-[20px] border-2 border-[#000000] flex justify-center items-center"
        >
          <img :src="minusSvg" alt="minusSvg" class="w-[15px] h-[15px]" />
        </button>
        <button
          class="w-[25px] h-[25px] rounded-[20px] border-2 border-[#000000] flex justify-center items-center ml-[10px]"
        >
          <img :src="editSvg" alt="editSvg" class="w-[15px] h-[15px]" />
        </button>
      </div>
    </div>
  </div>
</template>
