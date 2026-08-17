<script setup>
import { computed } from "vue";
import { useCart } from "../../composables/useCart.js";
import Delete from "../sidebar/Delete.vue";
import Add from "./Add.vue";
import Counter from "./Counter.vue";

const {product}=defineProps({ product: {} });

const { addToCart, cartItems } = useCart();
const count = computed(() => {
  const item = cartItems.value.find((p) => p.id == product.id);
  return item ? item.count : 0;
});
</script>

<template>
  <div>
    <div
      class="shadow-sm shadow-champange rounded-lg pb-2 mx-auto w-56 sm:w-60 bg-[#d3cdc0] h-72"
    >
      <img
        class="w-full bg-cover h-[57%] rounded-t-lg"
        :src="product.image"
        :alt="product.name"
      />
      <p class="text-black mt-6 mx-3">{{ product.name }}</p>
      <div class="flex justify-between items-center mt-4 mx-3">
        <p class="text-blackk">{{(product.price).toLocaleString() }}تومان</p>

        <Add v-if="count==0" @click="addToCart(product)" />
        <Counter v-else class="mt-1" :product="product" />
      </div>
    </div>
  </div>
</template>
