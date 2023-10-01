<script>
export default {
  methods: {
    login() {},
  },
};
</script>
<template>
  <div class="w-screen h-screen bg-[#657099] flex flex-col items-center">
    <h1 class="font-black text-[40px] text-center mt-[60px]">帳號登入</h1>
    <form>
      <div class="mt-[60px]">
        <label for="email">
          <input
            type="text"
            placeholder="輸入您的email"
            class="w-[240px] h-[40px] bg-[#D9D9D9] text-center mb-[30px]"
            id="email"
          />
        </label>
        <br />
        <label for="password">
          <input
            type="password"
            placeholder="輸入您的密碼"
            class="w-[240px] h-[40px] bg-[#D9D9D9] text-center mb-[30px]"
            id="“password”"
          />
        </label>
      </div>

      <div class="flex justify-center items-center mt-[30px]">
        <button
          @click="login"
          class="w-[77px] h-[44px] bg-[#D9D9D9] rounded-[15px] text-[24px] flex justify-center items-center"
        >
          登入
        </button>
      </div>
    </form>
  </div>
</template>
