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
    class="overflow-x-hidden mt-[10vw] flex items-center justify-center flex-col"
  >
    <div
      class="w-[160px] h-[200px] bg-[#F28383] bg-opacity-40 rounded-[6px] border-[0.8px] border-black overflow-x-hidden flex justify-center items-center"
    >
      <div
        class="w-[140px] h-[180px] bg-[#FFFFFF] bg-opacity-60 border-[0.8px] border-black rounded-[6px] overflow-x-hidden flex flex-col justify-center items-center"
      >
        <img
          src="../assets/Ok.png"
          alt="ok"
          class="w-[70px] h-[70px] mt-[10px]"
        />
        <p class="text-[2vw] font-black text-center mt-[1vw] whitespace-nowrap">
          您的商品<br />已成功預購
        </p>
        <p class="text-[5px] text-center mt-[10px] whitespace-nowrap">
          請 匯 款 到 此 帳 戶<br />( )
        </p>
      </div>
    </div>
    <button
      @click="gotoshopuser"
      class="text-[10px] w-[50px] h-[25px] bg-[#F28383] rounded-[5px] text-white flex justify-center items-center mt-[30px]"
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
