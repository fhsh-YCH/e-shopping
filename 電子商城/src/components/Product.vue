<script setup>
const props = defineProps(["product", "price"]);
</script>
<script>
export default {
  methods: {
    gotomaterial() {
      this.$router.push("/material");
    },
  },
};
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
    </div>
  </div>
</template>
