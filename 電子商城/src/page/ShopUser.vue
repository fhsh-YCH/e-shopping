<script setup>
import searchSvg from "../assets/magnifying-glass-solid.svg";
import shoppingcartSvg from "../assets/cart-shopping-solid.svg";
import Product from "../components/ProductUser.vue";

const products = [
  { productName: "帽踢", price: "650" },
  { productName: "書包", price: "690" },
  { productName: "棒球外套", price: "1080" },
  { productName: "帆布袋", price: "235" },
];
</script>
<script>
export default {
  methods: {
    gotosignup() {
      this.$router.push("/signup");
    },
    gotologin() {
      this.$router.push("/loginuser");
    },
  },
};
</script>
<template>
  <div class="relative w-screen overflow-x-hidden flex flex-col items-center">
    <div class="w-full h-[55px] bg-[#F28383] flex items-center">
      <button>
        <img
          :src="searchSvg"
          alt="searchSvg"
          class="w-[30px] h-[30px] ml-[10px]"
        />
      </button>
      <input
        class="w-[210px] h-[28px] border-[0.5vw] ml-[10px] border-white rounded-[0.8vw] text-[10px] text-center"
        placeholder="搜尋想查找的商品"
      />
      <button
        class="w-[70px] h-[30px] bg-[#ffffff] ml-[10px] rounded-[10px]"
        @click="gotosignup"
      >
        註冊
      </button>
      <button
        class="w-[70px] h-[30px] bg-[#ffffff] mx-[10px] rounded-[10px]"
        @click="gotologin"
      >
        登入
      </button>
    </div>
    <div
      class="w-full h-[150px] bg-[#F28383] mt-[25px] flex justify-center items-center"
    >
      <p class="font-black text-[30px] text-[#ffffff]">FHSH MARKET</p>
    </div>
    <div
      class="w-full mt-[25px] grid grid-cols-1 md:grid-cols-2 items-center justify-self-center gap-2 gap-y-8"
    >
      <Product
        v-for="product in products"
        :key="product.productName"
        :product="product.productName"
        :price="product.price"
      />
    </div>
    <div
      class="w-full h-[60px] bg-[#F28383] mt-[25px] text-white flex justify-center items-center text-[15px]"
    >
      校址：112056臺北市北投區復興四路70號 <br />
      電話：02-28914131 傳真：02-28952156
    </div>
  </div>
</template>

<!-- <button class="ml-auto">
        <img
          :src="shoppingcartSvg"
          aly="shoppingcartSvg"
          class="w-[30px] h-[30px] mr-[10px]"
        />
      </button> -->
