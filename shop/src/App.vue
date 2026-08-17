<script setup>
import Jeader from './components/layout/Jeader.vue';
import { useRoute } from 'vue-router';
import Products from './components/products/Products.vue';


const route=useRoute()

const side=document.querySelector("aside")
console.log(side)

</script>

<template>
  <div>
    <Jeader/>
    <!-- <Products/> -->
    <RouterView/>
  </div>
</template>
