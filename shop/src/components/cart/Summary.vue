<script setup>
import { useCart } from "../../composables/useCart";
import { MoveLeft } from '@lucide/vue';
const { totalPrice } = useCart();
</script>

<template>
  <div class="">
    <h2 class="text-[#ffffffe5] p-8 text-2xl">خلاصه سفارش</h2>
    <div class="flex flex-col gap-6">
      <div class="flex justify-between px-3">
        <p class="text-gold">ارسال</p>
        <p class="text-gold">رایگان</p>
      </div>
      <div class="flex justify-between px-3">
        <p class="text-gold">مبلغ نهایی</p>
        <p class="text-gold">{{ totalPrice.toLocaleString() }} تومان</p>
      </div>
    </div>
    <div class="text-blackk bg-linear-to-r from-gold via-[#ae8e4eae] to-gold p-2 rounded-md flex gap-4 w-36 mx-auto my-10 hover:bg-linear-to-r hover:from-[#ae8e4eae] hover:via-gold hover:to-[#ae8e4eae] transition ">
   ثبت سفارش
        <MoveLeft class="text-blackk"/>
    </div>
  </div>
</template>
