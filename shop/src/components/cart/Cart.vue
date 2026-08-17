<script setup>
import { ref } from "vue";
import Product from "./Product.vue";
import Summary from "./Summary.vue";
import { useCart } from "../../composables/useCart.js";
import { MoveLeft } from "@lucide/vue";

const products = ref();
async function loadProducts() {
  const response = await fetch("product.json");
  const product = await response.json();
  products.value = product;
}
loadProducts();

const { cartItems } = useCart();
</script>

<template>
  <div
    class="bg-[url(src/assets/images/istockphoto-2161066988-612x612.jpg)] bg-cover min-h-screen"
  >
    <div>
      <h1 class="text-[#ffffffe5] absolute mt-18 text-4xl mr-3">سبد خرید</h1>
      <div class="flex flex-col lg:flex-row sm:flex-col justify-between py-24 px-4">
        <div
          v-if="cartItems.length != 0"
          class="bg-blackk sm:w-[22%] rounded-lg shadow-sm shadow-gold mt-10 sm:h-96 h-72"
        >
          <Summary />
        </div>
        <div
          class="flex flex-col bg-blackk px-7 rounded-lg shadow-sm shadow-gold mt-10"
          :class="cartItems.length == 0 ? 'sm:w-full' : 'sm:w-[76%]'"
        >
          <div
            v-if="cartItems.length == 0"
            class="text-gold text-center my-24 text-lg animate-bounce"
          >
            هنوز محصولی اضافه نشده است!
          </div>
          <Product
            v-for="product in cartItems"
            :key="product.id"
            :product="product"
          />
          <RouterLink to="/"
            class="text-blackk bg-linear-to-r from-gold via-[#ae8e4eae] to-gold p-2 rounded-md flex gap-4 w-36 mx-auto my-10 hover:bg-linear-to-r hover:from-[#ae8e4eae] hover:via-gold hover:to-[#ae8e4eae] transition"
          >
             ادامه خرید
            <MoveLeft class="text-blackk" />
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
