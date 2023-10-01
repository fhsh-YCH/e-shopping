<script setup>
import searchSvg from "../assets/magnifying-glass-solid.svg";
import plusSvg from "../assets/plus-solid.svg";
</script>

<template>
  <div>
    <div class="w-full h-[55px] bg-[#F28383] flex items-center">
      <button @click="goToEdit" class="ml-[3vw]">
        <img :src="searchSvg" alt="searchSvg" class="w-[40px] h-[40px]" />
      </button>
      <input
        class="w-[210px] h-[30px] border-[0.5vw] ml-[20px] border-white rounded-[0.8vw] text-[10px] text-center"
        placeholder="搜尋想查找的商品"
      />
      <button @click="goToEdit" class="ml-auto mr-[5vw]">
        <img :src="plusSvg" alt="plusSvg" class="w-[40px] h-[40px]" />
      </button>
    </div>
    <div class="flex flex-col justify-center items-center my-[10vw]">
      <div class="text-center text-[40px] font-bold pr-[0vw]">Admin</div>
      <div class="border-black w-[500px] border-b my-[20px]"></div>
      <div class="flex justify-center items-center mt-[40px]">
        <button
          @click="goToShop"
          class="w-[500px] h-[500px] rounded-[5px] border-black border-[0.8px] font-bold text-[10px] mr-[30px]"
        >
          瀏覽商品
        </button>
        <button
          @click="goToOrder"
          class="w-[500px] h-[500px] rounded-[5px] border-black border-[0.8px] font-bold text-[10px] ml-[30px]"
        >
          訂單查詢
        </button>
      </div>
    </div>
  </div>
  <div
    class="w-full h-[50px] bg-[#F28383] mt-[50px] text-white flex justify-center items-center text-[15px]"
  >
    校址：112056臺北市北投區復興四路70號 <br />
    電話：02-28914131 傳真：02-28952156
  </div>
</template>

<script>
export default {
  methods: {
    goToShop() {
      this.$router.push("/AdminShop");
    },
    goToOrder() {
      this.$router.push("/Reserve");
    },
    goToEdit() {
      this.$router.push("/Edit");
    },
  },
};
</script>
