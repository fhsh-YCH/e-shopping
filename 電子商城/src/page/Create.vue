<script setup>
import { reactive } from "vue";

import { uploadProd } from "../api.js";

const formData = reactive({
  Name: "",
  price: "",
  counts: "",
  description: "",
});

const uploadData = reactive({
  name: formData.itemName,
  summary: formData.description,
  quantity: formData.count,
  price: formData.price,
});

console.log(uploadData);
uploadProd(uploadData);
</script>

<template>
  <div class="max-w-screen h-full">
    <div class="w-full h-[60px] bg-[#D9D9D9]">
      <p class="text-[36px] text-center font-thin">商品新增</p>
    </div>
    <div class="ml-[15px]">
      <img />
      <div class="mt-[20px]">
        <input type="file" ref="fileInput" multiple @change="handleFileInput" />
        <div v-if="imageDataUrls.length" class="image-list">
          <div
            v-for="(imageUrl, index) in imageDataUrls"
            :key="index"
            class="image-item"
          >
            <img
              :src="imageUrl"
              :style="{
                maxWidth: '100px',
                maxHeight: '100px',
              }"
            />
          </div>
        </div>
      </div>

      <div>
        <form @submit.prevent="formData.submit">
          <div class="w-[290px] h-[70px] bg-[#D9D9D9] mt-[20px]">
            <label class="ml-[10px] font-bold">商品名稱:</label>
            <input
              v-model="name"
              maxlength="20"
              class="border-2 border-[#D9D9D9] w-[270px] h-[35px] ml-[10px]"
            />
          </div>
          <div class="w-[290px] h-[70px] bg-[#D9D9D9] mt-[20px]">
            <label class="ml-[10px] font-bold">商品價格$(NT):</label>
            <input
              v-model="price"
              minlength="0"
              type="number"
              class="border-2 border-[#D9D9D9] w-[270px] h-[35px] ml-[10px]"
            />
          </div>
          <div class="w-[290px] h-[70px] bg-[#D9D9D9] mt-[20px]">
            <label class="ml-[10px] font-bold">商品數量:</label>
            <input
              v-model="quantity"
              minlength="0"
              type="number"
              class="border-2 border-[#D9D9D9] w-[270px] h-[35px] ml-[10px]"
            />
          </div>
          <div class="w-[290px] h-[70px] bg-[#D9D9D9] mt-[20px]">
            <label class="ml-[10px] font-bold">商品敘述: </label>
            <input
              v-model="summary"
              maxlength="100"
              class="border-2 border-[#D9D9D9] w-[270px] h-[35px] ml-[10px]"
            />
          </div>
        </form>
      </div>
    </div>

    <div class="w-full">
      <div class="w-full flex justify-evenly items-center mt-[10px]">
        <button
          @click="goToShop"
          type="submit"
          class="border-2 border-[#000000] text-[20px] font-bold text-center w-[100px] h-[40px]"
        >
          上架
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.image-list {
  display: flex;
  flex-wrap: wrap;
}

.image-item {
  flex: 1;
  margin: 5px;
}
</style>
