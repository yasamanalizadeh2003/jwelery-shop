<script setup>
import {ShoppingCart} from '@lucide/vue'


function addToCart(){
    
}
</script>

<template>
    <div>
        <div @click="addToCart"
         class="bg-blackk text-gold py-1 px-3 rounded-lg hover:scale-105 hover:cursor-pointer transition-all duration-300">
          <ShoppingCart />
        </div>
    </div>
</template>