<script setup>
import { Gem } from "@lucide/vue";
</script>

<template>
  <div class="w-full">
    <div class="flex items-center justify-center gap-4 w-full">
      <hr
        class="flex-1 h-px border-0 bg-linear-to-r from-transparent via-gold to-transparent origin-center animate-[line_3s_ease-in-out_infinite]"
      />

      <Gem class="text-gold2 animate-[gem_3s_ease-in-out_infinite]" />

      <hr
        class="flex-1 h-px border-0 bg-linear-to-r from-transparent via-gold to-transparent origin-center animate-[line_3s_ease-in-out_infinite]"
      />
    </div>
   <!-- <div class="flex gap-22 justify-center items-center mt-8 ">
     <div class="bg-gold rounded-lg p-2 text-blackk">محصولات</div>
    <div class="bg-gold rounded-lg p-2 text-blackk">سبد خرید</div>
   </div> -->



    <div class="flex justify-center mt-5">
    </div>
  </div>
</template>

<style>
@keyframes line {
  0% {
    transform: scaleX(0.25);
    opacity: 0.25;
  }

  50% {
    transform: scaleX(1);
    opacity: 1;
  }

  100% {
    transform: scaleX(0.25);
    opacity: 0.25;
  }
}
@keyframes gem{
  0%{
    transform: rotateY(0deg);
  }
  
  50%{
    transform: rotateY(180deg);

  }
  100%{
    transform: rotateY(360deg);

  }
}
</style>
