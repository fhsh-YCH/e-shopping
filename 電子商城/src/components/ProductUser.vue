<script setup>
const props = defineProps(["product", "price"]);
</script>

<template>
  <div class="flex justify-center items-center rounded-[5px]">
    <div
      class="h-[200px] w-[200px] border-2 border-[#000000] rounded-[6px]"
    ></div>
    <div class="ml-[40px]">
      <p class="font-blod text-[18px]">
        {{ product }}
      </p>
      <p class="mt-[30px]">${{ price }}</p>
      <button
        class="rounded-[10px] w-[80px] h-[30px] bg-[#F28383] font-black mt-[30px] text-white"
        @click="goToMaterial"
      >
        VIEW
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToMaterial() {
      this.$router.push("/Material");
    },
  },
};
</script>
