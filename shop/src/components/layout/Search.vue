<script setup>
import { Search } from "@lucide/vue";
import { ref, watch } from "vue";

const searchText = ref("");
const emit = defineEmits(["search"]);
watch(searchText, (newValue) => {
  emit("search", newValue);
});
</script>

<template>
  <div>
    <div class="flex my-2">
      <input
        v-model="searchText"
        class="bg-[#1f1d1c] rounded-tr-xl rounded-br-xl p-3 outline-0 focus:bg-[#33302c] sm:w-58 w-44 text-sm sm:text-base focus:w-52 sm:focus:w-80 text-champange shadow-sm shadow-gold duration-700 transition-all placeholder:text-champange"
        type="text"
        placeholder="جستجو در محصولات..."
      />
      <div
        class="bg-gold p-3 hover:cursor-pointer rounded-tl-xl rounded-bl-xl shadow-sm shadow-gold"
      >
        <Search size="20px" />
      </div>
    </div>
  </div>
</template>
