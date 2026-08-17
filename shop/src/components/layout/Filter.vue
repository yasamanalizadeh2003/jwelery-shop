<script setup>
import { ChevronDown } from "@lucide/vue";
import { ref } from "vue";

const controll = ref(false);
const filter = ref("");
const expensive = "گران ترین";
const cheap = "ارزان ترین";
const emit=defineEmits(["sort"])
function setFilter(data) {
  filter.value = data;
  byDefault.value=data
  emit("sort",data)
}

const byDefault = ref("مرتب سازی بر اساس:");

function closeDropdown(){
  if(!event.target.closest(".dropdown")){
    controll.value=false
  }
}

document.addEventListener("click",closeDropdown)
</script>

<template>
  <div class="">
    <div
      @click="controll = !controll"
      class="dropdown bg-blackk text-sm sm:text-base text-gold shadow-sm shadow-gold sm:w-48 py-3 sm:mr-24 mr-3 w-42 rounded-lg px-2 flex gap-2 cursor-pointer justify-between"
    >
      <div class="">{{ byDefault }}</div>

      <ChevronDown
        :class="[
          'transition-transform duration-300',
          controll ? 'rotate-180' : 'rotate-0',
        ]"
      />
    </div>
    <div
      v-if="controll == true"
      class="bg-blackk text-gold flex-col gap-3 sm:w-48 w-42 mr-2 sm:mr-24 mt-1 flex absolute shadow-md shadow-gold rounded-xl p-3"
    >
      <div
        @click="setFilter(expensive), (controll = !controll)"
        class="hover:cursor-pointer h-full w-full hover:text-blackk hover:bg-gold transition duration-300 rounded-lg p-1"
      >
        گران ترین
      </div>
      <hr
        class="origin-center border-0 h-px animate-[line_3s_ease-in-out_infinite] bg-linear-to-r from-transparent via-gold to-transparent"
      />
      <div
        @click="setFilter(cheap), (controll = !controll)"
        class="hover:cursor-pointer h-full w-full hover:text-blackk hover:bg-gold transition duration-300 rounded-lg p-1"
      >
        ارزان ترین
      </div>
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
</style>
