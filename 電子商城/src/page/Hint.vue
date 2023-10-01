<script>
export default {
  methods: {
    gotoshopuser() {
      this.$router.push("/");
    },
  },
};
</script>
<template>
  <div
    class="overflow-x-hidden mt-[50px] flex items-center justify-center flex-col"
  >
    <div
      class="w-[250px] h-[160px] bg-[#F28383] bg-opacity-40 rounded-[10px] border-[1px] border-black overflow-x-hidden flex justify-center items-center"
    >
      <div
        class="w-[120px] h-[120px] bg-[#FFFFFF] bg-opacity-60 border-[1px] border-black rounded-[10px] overflow-x-hidden text-center flex flex-col justify-center items-center"
      >
        <p
          class="text-[20px] font-black text-center mt-[1vw] whitespace-nowrap"
        >
          您的商品<br />已成功預購
        </p>
        <p class="text-[1.4vw] text-center mt-[2vw] whitespace-nowrap">
          請 匯 款 到 此 帳 戶<br />( )
        </p>
      </div>
      <img src="../assets/Ok.png" alt="ok" class="w-[17vw] h-[17vw] ml-[1vw]" />
    </div>
    <button
      @click="gotoshopuser"
      class="text-[20px] w-[60px] h-[35px] bg-[#F28383] rounded-[10px] flex justify-center items-center text-white mt-[20px]"
    >
      確認
    </button>
    <div
      class="w-full h-[60px] bg-[#F28383] mt-[25px] text-white flex justify-center items-center text-[15px]"
    >
      校址：112056臺北市北投區復興四路70號 <br />
      電話：02-28914131 傳真：02-28952156
    </div>
  </div>
</template>
