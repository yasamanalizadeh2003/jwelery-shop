<script setup>
import { computed, ref } from "vue";
import { useCart } from "../../composables/useCart";

const { product } = defineProps({ product: {} });

const { increase, decrease, cartItems } = useCart();
const count = computed(() => {
  const item = cartItems.value.find((p) => p.id == product.id);
  return item ? item.count : 0;
});

const stock = computed(() => {
  const item = cartItems.value.find((p) => p.id == product.id);
  return  item.stock
});
</script>

<template>
  <div class="flex gap-0.5">
    <div 
      @click="increase(product)"
      class="border border-ivory text-champange  bg-[#090909] p-2 rounded-lg  hover:scale-105 hover:shadow-sm hover:shadow-blackk transition duration-300 w-7 h-7 flex items-center justify-center"
      :class="(stock==0) ? 'cursor-not-allowed  hover:cursor-not-allowed ':'flex hover:cursor-pointer'"
    >
      +
    </div>
    <div
      class="border border-ivory text-champange bg-[#090909] p-2 rounded-lg w-7 h-7 flex items-center justify-center"
    >
      {{ count }}
    </div>
    <div
      @click="decrease(product)"
      class="border border-ivory text-champange bg-[#090909] p-2 rounded-lg hover:cursor-pointer hover:scale-105 hover:shadow-sm hover:shadow-blackk transition duration-300 w-7 h-7 flex items-center justify-center"
    >
      -
    </div>
  </div>
</template>
