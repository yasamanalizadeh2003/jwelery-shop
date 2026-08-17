<script setup>
import { RouterLink } from "vue-router";
import { ShoppingCart } from "@lucide/vue";
import Search from "./Search.vue";
import { ref } from "vue";
import Side from "../sidebar/Side.vue";
import { useCart } from "../../composables/useCart.js";

const menu = ref(false);
const cart = ref(false);

function toggleCart() {
  cart.value = !cart.value;
}

function toggleMenu() {
  menu.value = !menu.value;
}

const { cartItems } = useCart();

function closeSidebar(){
  if(!event.target.closest(".close")){
    cart.value=false
  }
}

document.addEventListener("click",closeSidebar)
</script>

<template>
  <div>
    <!-- desktop -->
    <div class="">
      <!-- items -->
      <div
        class="hidden sm:hidden lg:flex px-4 pl-5 text-[#d3ba89] bg-blackk fixed w-full items-center justify-between shadow-sm shadow-gold"
      >
        <!-- logo -->
        <div class="text-[#F8F5EF] ">
          <img
            src="../../assets/gimme_jewelry_logo_transparent.png"
            alt="logo"
          />
        </div>
        <div class="flex gap-5 ml-15 self-center">
          <RouterLink
            to="/home"
            class="hover:scale-105 transition text-champange pb-1 w-14 text-center"
            active-class="border-b-[#ba9551] border-b border-b-[#b4904e] text-ivory"
            >خانه</RouterLink
          >
          <RouterLink
            to="/"
            class="hover:scale-105 transition text-champange pb-1 w-18 text-center"
            active-class="border-b border-b-[#ba9551] text-ivory"
            >محصولات</RouterLink
          >
          <RouterLink
            to="/cart"
            class="hover:scale-105 transition text-champange pb-1 w-16 text-center"
            exact-active-class="border-b border-b-[#ba9551] text-ivory"
            >سبد خرید</RouterLink
          >
        </div>
        <div class="flex items-center close">
          <ShoppingCart
            class="hover:scale-105 hover:text-champange transition relative"
            @click="toggleCart"
          />
          <Transition
            enter-active-class="transition-transform duration-600 ease-out"
            enter-from-class=" scale-0"
            enter-to-class="scale-100"
            leave-active-class="transition-transform duration-600 ease-in"
            leave-from-class="scale-100"
            leave-to-class="scale-0"
          >
            <div
              v-if="cartItems.length != 0"
              :key="cartItems.length"
              class="absolute top-2 left-3 rounded-full bg-gold text-blackk w-5 h-5 text-center"
            >
              {{ cartItems.length }}
            </div>
          </Transition>
          <Transition
            enter-active-class="transition-transform duration-1000 ease-out"
            enter-from-class="-translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transition-transform duration-600 ease-in"
            leave-from-class="translate-x-0"
            leave-to-class="-translate-x-full"
          >
            <Side
              :cart="cart"
              :toggleCart="toggleCart"
              class="mt-[59%] sm:pb-10 scrollbar-thumb-gold scrollbar-thin close"
              v-if="cart == true"
            />
          </Transition>
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div>
      <div
        class="flex sm:flex lg:hidden gap-2 px-4 text-[#d3ba89]  fixed w-full items-center justify-between z-50"
      >
        <div
          v-if="menu == false"
          @click="toggleMenu"
          class="flex flex-col sm:flex lg:hidden text-2xl hover:cursor-pointer"
        >
          <div class="h-1.5 text-gold">__</div>
          <div class="h-1.5 text-gold">__</div>
          <div class="h-1.5 text-gold">__</div>
        </div>

        <div
          v-else
          @click="toggleMenu"
          class="lg:hidden hover:cursor-pointer text-gold"
        >
          <div class="text-5xl sm:text-6xl">×</div>
          <div
            class="bg-blackk text-gold rounded-lg p-2 w-32 shadow-sm shadow-gold "
          >
            <RouterLink  to="/home" class="">خانه</RouterLink>
            <hr
              class="my-2 border-0 h-px bg-linear-to-r from-transparent via-gold to-[#ae8e4eae]"
            />
            <RouterLink to="/">محصولات</RouterLink>
            <hr
              class="my-2 border-0 h-px bg-linear-to-r from-transparent via-gold to-[#ae8e4eae]"
            />
            <RouterLink to="/cart">سبدخرید</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes line {
  0% {
  }

  50% {
  }

  100% {
  }
}
</style>
