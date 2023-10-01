<script>
export default {
  data() {
    return {
      showPassword: false,
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
      let passwordInput = this.$el.querySelector('input[type="password"]');
      if (this.showPassword) {
        passwordInput.setAttribute("type", "text");
      } else {
        passwordInput.setAttribute("type", "password");
      }
    },
    register() {},

    gotoLoginUser() {
      this.$router.push("/loginuser");
    },
  },
};
</script>
<template>
  <div class="relative w-screen overflow-x-hidden flex flex-col items-center">
    <h1 class="font-black text-[45px] text-center mt-[60px] text-[#F59660]">
      帳號註冊
    </h1>
    <form>
      <div class="mt-[40px] flex flex-col items-center">
        <label for="email" class="flex">
          <input
            id="username"
            type="text"
            placeholder="輸入您的email"
            class="w-[325px] h-[59px] text-[20px] border-[4px] border-[#F59660] rounded-md text-center mb-[20px]"
          />
          <img
            src="../assets/CherryBlossoms.png"
            class="w-[50px] h-[50px] absolute ml-[270px] mt-[5px]"
          />
        </label>

        <div>
          <label for="password">
            <input
              type="password"
              placeholder="輸入您的密碼"
              class="w-[325px] h-[59px] text-[20px] border-[4px] border-[#F59660] rounded-md text-center mb-[20px]"
              id="“password”"
            />
            <button
              class="absolute ml-[-55px] mt-[5px]"
              @click="togglePassword"
            >
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

        <label for="confirm-password">
          <input
            type="confirm-password"
            placeholder="確認密碼"
            class="w-[325px] h-[59px] text-[20px] border-[4px] border-[#F59660] rounded-md text-center mb-[20px]"
            id="confirm-password"
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

      <div class="flex justify-center items-center mt-[15px]">
        <button
          @click="gotoLoginUser"
          class="text-[30px] w-[140px] h-[50px] border-[2px] border-[#F59660] rounded-xl text-[#F59660] flex justify-center items-center mr-[10px]"
        >
          已有帳號
        </button>
        <button
          @click="register"
          class="text-[30px] w-[100px] h-[50px] bg-[#F59660] rounded-xl flex justify-center items-center text-white"
        >
          註冊
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
