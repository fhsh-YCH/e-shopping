<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      errorMsg: "",
    };
  },
  methods: {
    login() {
      if (!this.username || !this.password) {
        this.errorMsg = "帳號名稱或密碼不能為空";
        return;
      }
    },
  },
};
</script>

<template>
  <div class="relative w-screen overflow-x-hidden flex flex-col items-center">
    <h1 class="font-black text-[45px] text-center mt-[60px] text-[#F59660]">
      帳號登入
    </h1>
    <form @submit.prevent="login">
      <div class="mt-[60px] flex flex-col items-center">
        <label for="email">
          <input
            id="username"
            v-model.trim="username"
            required
            minlength="3"
            maxlength="20"
            type="text"
            placeholder="輸入您的帳號名稱"
            class="w-[325px] h-[59px] text-[20px] border-[4px] border-[#F59660] rounded-md text-center mb-[20px]"
          />

          <img
            src="../assets/CherryBlossoms.png"
            class="w-[50px] h-[50px] absolute ml-[270px] mt-[-70px]"
          />
        </label>
        <br />
        <label for="password">
          <input
            type="password"
            placeholder="輸入您的密碼"
            class="w-[325px] h-[59px] text-[20px] border-[4px] border-[#F59660] rounded-md text-center mb-[20px]"
            id="“password”"
          />
          <button class="absolute ml-[-55px] mt-[5px]" @click="togglePassword">
            <img
              src="../assets/CherryBlossomSeeds.png"
              alt="password visibility toggle"
              class="w-[35px] h-[50px]"
              :class="{ hidden: showPassword }"
            />
            <img
              src="../assets/CherryBlossoms.png"
              alt="password visibility toggle"
              class="w-[50px] h-[50px]"
              :class="{ hidden: !showPassword }"
            />
          </button>
        </label>
      </div>

      <div class="flex justify-center items-center mt-[2vw]">
        <button
          @click="login"
          class="text-[30px] w-[100px] h-[50px] bg-[#F59660] rounded-xl flex justify-center items-center text-white"
        >
          登入
        </button>
      </div>
    </form>
    <div
      class="w-full h-[60px] bg-[#F59660] mt-[80px] text-white flex justify-center items-center text-[15px]"
    >
      校址：112056臺北市北投區復興四路70號 <br />
      電話：02-28914131 傳真：02-28952156
    </div>
  </div>
</template>
