<script>
import QuantityPlusMinus from "../components/Quantity-plus-minus.vue";
import Back from "../assets/arrow-left-solid.svg";

export default {
  components: {
    QuantityPlusMinus,
  },
  data() {
    return {
      name: "Product 1",
      price: 100,
      quantity: 1,
    };
  },
  methods: {
    addToCart() {
      // 將商品信息添加到products陣列中
      const products = [
        {
          name: this.name,
          price: this.price,
          quantity: this.quantity,
        },
      ];
      this.$emit("add-to-cart", products);

      // 跳轉到 shopping-cart.vue 頁面

      this.$router.push("/shoppingcart");
    },
    backtoshopuser() {
      this.$router.push("/shopuser");
    },
    gotopurchase() {
      this.$router.push("/purchase");
    },
  },
};
</script>

<template>
  <div class="overflow-x-hidden">
    <div class="relative w-screen overflow-x-hidden">
      <div class="w-full h-[250px] bg-[#D9D9D9] flex">
        <button @click="backtoshopuser" class="absolute bg-opacity-70">
          <div
            class="absolute w-[20px] h-[20px] rounded-full bg-[#FFFFFF] ml-[30px] mt-[30px] flex justify-center items-center"
          >
            <img
              src="../assets/arrow-left-solid.svg"
              :src="Back"
              class="w-[9px] h-[10px]"
            />
          </div>
        </button>
      </div>

      <div class="flex flex-col items-center overflow-x-hidden">
        <div class="flex items-center">
          <p class="text-[20px] font-bold text-[#000000] mt-[5vw] pr-[55vw]">
            product
          </p>
          <p class="text-[15px] font-bold text-[#000000] mt-[5vw]">$ price</p>
        </div>

        <div class="flex flex-col">
          <p class="text-[10px] text-[#000000] mt-[30px] pr-[46vw] pl-[15.5vw]">
            something about product 1
          </p>
          <p class="text-[8px] text-[#000000] mt-[10px] pr-[30vw] pl-[15.5vw]">
            そうだ僕は知っていますか博士は堅く時計を握ったまま、そうだろうと答えました。十字になったのでもいいのです。
          </p>
        </div>

        <div
          class="border-[1px] border-[#000000] w-[75px] h-[25px] mt-[20px] mr-[-215px] flex justify-center items-center"
        >
          <QuantityPlusMinus class="w-[75px] h-[25px]" />
        </div>

        <div class="flex mt-[10px]">
          <button
            @click="addToCart"
            class="w-[18vw] h-[5.75vw] border-[0.5vw] border-[#F28383] text-[#F28383] font-black text-[1.5vw] mr-[34vw] flex justify-center items-center style=color:#F28383 style=color:#F28383; border: 1px solid #F28383;"
          >
            加入購物車
          </button>
          <button
            @click="gotopurchase"
            class="w-[18vw] h-[5.75vw] bg-[#F28383] text-white font-black text-[1.5vw] flex justify-center items-center style=color:#F28383"
          >
            結帳
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
