<script setup>
defineProps(
  { totalPages: { type: Number } ,
   currentPage: { type: Number } }
);

const emit = defineEmits(["change"]);
function changePage(page) {
  emit("change", page);
}
</script>

<template>
  <div class="flex justify-center w-full">
    <div class="flex gap-3 justify-center ">
      <div class="px-4 rounded-lg hover:cursor-pointer"
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page)"
        :class="
          currentPage == page ? 'bg-gold text-blackk' : 'bg-[#ffffffd3] text-blackk'
        "
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>
