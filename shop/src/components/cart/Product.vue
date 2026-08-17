<script setup>
import { computed } from "vue";
import { useCart } from "../../composables/useCart.js";
import Counter from "../products/Counter.vue";
import Delete from "../sidebar/Delete.vue";

const {product}=defineProps({ product: {} });
const {cartItems}=useCart()
const count=computed(()=>{
const item=cartItems.value.find(p=>p.id==product.id)
return item?item.count:0
})
</script>

<template>
  <div v-if="count != 0">
    <div class="flex justify-between items-center flex-col sm:flex-row">
      <div class="flex items-center sm:gap-7 gap-4">
        <img
          class="mt-8 sm:h-32 sm:w-32 h-24 w-24 rounded-sm mb-3 shadow-sm shadow-gold"
          :src="product.image"
          :alt="product.name"
        />
        <div class="flex flex-col sm:gap-7 gap-3">
          <p class="text-gold">{{ product.name }}</p>
          <p class="text-champange">{{ (product.price).toLocaleString() }} تومان</p>
        </div>
      </div>
      <div class="my-4 flex justify-between w-full sm:w-auto sm:gap-24 px-3">
        <Counter :product="product" />
        <p class="text-ivory">{{ (product.price*product.count).toLocaleString() }} تومان</p>
        <Delete :product="product" />
      </div>
      
    </div>
      <hr
        class="origin-center border-0 h-px animate-[line_6s_ease-in-out_infinite] bg-linear-to-r from-transparent via-gold to-transparent"
      />
  </div>
</template>

<style>
@keyframes line {
  0% {
    transform: scaleX(0.75);
    opacity: 0.25;
  }

  50% {
    transform: scaleX(1);
    opacity: 1;
  }

  100% {
    transform: scaleX(0.75);
    opacity: 0.25;
  }
}
</style>

