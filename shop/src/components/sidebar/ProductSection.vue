<script setup>
import { computed, ref } from "vue";
import Counter from "../products/Counter.vue";
import Delete from "./Delete.vue";
import { useCart } from "../../composables/useCart.js";

const { product } = defineProps({ product: {} });


const {cartItems}=useCart()

const count=computed(()=>{
  const item=cartItems.value.find(p=>p.id==product.id)
  return item?item.count:0
})
</script>

<template>
  <div>
    <div
      class="flex justify-between items-center px-3 my-4 border-b pb-4 border-b-champange"
      v-if="count != 0"
    >
      <img
        class="w-16 h-16 rounded-lg"
        :src="product.image"
        :alt="product.name"
      />
      <div class="flex flex-col mb-2 gap-2">
        <p class="text-champange">{{ product.name }}</p>
        <p class="text-gold">{{ product.price }} تومان</p>
        <div class="flex justify-between">
          <Counter :product="product" />
          <Delete :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>
