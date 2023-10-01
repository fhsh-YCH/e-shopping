<template>
  <div class="flex justify-center items-center">
    <button
      class="w-[12px] h-[12px] text-[12px] disabled:opacity-50 disabled:cursor-default"
      :disabled="count <= 0"
      @click="decrement"
    >
      -
    </button>
    <span class="mx-[8px] text-[12px]">{{ count }}</span>
    <button class="w-[12px] h-[12px] text-[10px]" @click="increment">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    decrement() {
      this.count--;
    },
    increment() {
      this.count++;
    },
  },
};
</script>

<style scoped>
button {
  @apply flex justify-center items-center focus:outline-none;
}

button:disabled {
  @apply opacity-50 cursor-default;
}
</style>
