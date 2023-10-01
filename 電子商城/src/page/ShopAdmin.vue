<script setup>
import searchSvg from "../assets/magnifying-glass-solid.svg";
import Product from "../components/ProductEdit.vue";

const products = [
  { productName: "帽踢", price: "650" },
  { productName: "書包", price: "690" },
  { productName: "棒球外套", price: "1080" },
  { productName: "帆布袋", price: "235" },
];
</script>
<template>
  <div class="relative w-screen overflow-x-hidden flex flex-col items-center">
    <div class="w-full h-[55px] bg-[#F28383] flex items-center">
      <button>
        <img
          :src="searchSvg"
          alt="searchSvg"
          class="w-[40px] h-[40px] ml-[10px]"
        />
      </button>
      <input
        class="w-[210px] h-[28px] border-[0.5vw] ml-[10px] border-white rounded-[0.8vw] text-[2vw] text-center"
        placeholder="搜尋想查找的商品"
      />
    </div>
    <div
      class="w-full h-[150px] bg-[#F28383] mt-[25px] flex justify-center items-center"
    >
      <p class="font-black text-[30px] text-[#ffffff]">FHSH MARKET</p>
    </div>
    <div
      class="items-center mt-[4vw] ml-[2vw] grid grid-cols-2 grid-rows-2 gap-[6vw]"
    >
      <Product
        v-for="product in products"
        :key="product.productName"
        :product="product.productName"
        :price="product.price"
      />
    </div>
    <div
      class="w-full h-[10vw] bg-[#F28383] mt-[20vw] text-white flex justify-center items-center text-[2.2vw]"
    >
      校址：112056臺北市北投區復興四路70號 <br />
      電話：02-28914131 傳真：02-28952156
    </div>
  </div>
</template>
