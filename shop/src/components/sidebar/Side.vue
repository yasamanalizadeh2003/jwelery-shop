<script setup>
import { ref } from "vue";
import ProductSection from "./ProductSection.vue";

const products = ref();
async function loadProducts() {
  const response = await fetch("product.json");
  const product = await response.json();
  products.value = product;
}
loadProducts();

defineProps({ cart: {}, toggleCart: {} });
</script>

<template>
  <aside
    class="w-72 flex bg-[#141313] flex-col absolute overflow-y-auto left-0  shadow-sm shadow-ivory2"
  >
    <div
      class="flex flex-col justify-between items-center px-3 sticky top-0 bg-[#141313]"
    >
      <div class="flex justify-between items-center w-full">
        <h1 class="text-2xl text-[#ffffffe5]">سبد خرید</h1>
        <div
          v-if="cart == true"
          @click="toggleCart"
          class="text-6xl text-[#611c1c] hover:cursor-pointer"
        >
          ×
        </div>
      </div>
      <hr class="border border-champange w-full blur-md" />
    </div>
    <div class="h-screen">
      <ProductSection
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </aside>
</template>
