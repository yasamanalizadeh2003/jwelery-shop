<script setup>
import { Trash2 } from "@lucide/vue";
import { useCart } from "../../composables/useCart";
defineProps({ product: {} });
const {remove}=useCart()

// defineEmits
</script>

<template>
  <div>
    <Trash2
      @click="remove(product)"
      class="text-gold hover:scale-110 transition duration-500 hover:cursor-pointer"
    />
  </div>
</template>
