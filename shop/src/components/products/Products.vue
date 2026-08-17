<script setup>
import { computed, ref } from "vue";
import ProductCart from "./ProductCart.vue";
import Hero from "../layout/Hero.vue";
import Counter from "./Counter.vue";
import Filter from "../layout/Filter.vue";
import Search from "../layout/Search.vue";
import Pagination from "./pagination.vue";

const currentPage = ref(1);
const products = ref([]);
const sortOption = ref("");
const searchValue = ref("");
async function loadProducts() {
  const response = await fetch("product.json");
  const product = await response.json();
  products.value = product;
}
loadProducts();

function changeSort(value) {
  sortOption.value = value;
  currentPage.value=1
}

function changeSearch(value) {
  searchValue.value = value;
  currentPage.value=1
}

const finalProducts = computed(() => {
  let x = products.value;
  if (searchValue.value) {
    x = x.filter((p) => p.name.includes(searchValue.value));
  }

  if (sortOption.value == "گران ترین") {
    x = x.sort((a, b) => b.price - a.price);
  }
  if (sortOption.value == "ارزان ترین") {
    x = x.sort((a, b) => a.price - b.price);
  }
  return x;
});

const totalPages = computed(() => {
  return Math.ceil(finalProducts.value.length / 8);
});

const paginationProducts = computed(() => {
  const start = (currentPage.value - 1) * 8;
  const end = start + 8;
  return finalProducts.value.slice(start, end);
});
</script>

<template>
  <div class="bg-blackk">
    <div class="pt-24 sm:pt-32 flex flex-col">
      <div class="flex justify-between w-full">
        <p class="text-ivory2 text-2xl sm:text-4xl mb-16 mr-7">محصولات</p>
        <Hero class="" />
      </div>
      <div class="flex justify-between sm:ml-14 ml-3 items-center">
        <Filter @sort="changeSort" /> <Search @search="changeSearch" />
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-7 gap-6 lg:gap-9 sm:px-10 sm:py-8 px-6 py-4"
      >
        <ProductCart
          v-for="product in paginationProducts"
          :key="product.id"
          :product="product"
        />
      
      </div>
        <div class="flex justify-center">
          <Pagination
            class="mx-auto mb-5"
            :totalPages="totalPages"
            :currentPage="currentPage"
            @change="currentPage = $event"
          />
        </div>
    </div>
  </div>
</template>
