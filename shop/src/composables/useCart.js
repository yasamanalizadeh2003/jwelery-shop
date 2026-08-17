import { computed, ref, watch } from "vue";
import { storage } from "./localstorage";

const cartItems = ref(JSON.parse(localStorage.getItem("product")) || []);


export function useCart() {
  function addToCart(pr) {
    if (pr.stock == 0) {
      return;
    } else {
      pr.count = 1;
      pr.stock--;
      cartItems.value.push({
        id: pr.id,
        count: pr.count,
        stock: pr.stock,
        price: pr.price,
        itemPrice: pr.price,
        image: pr.image,
        name: pr.name,
      });
    }
  }

  function increase(pr) {
    const item = cartItems.value.find((p) => p.id === pr.id);
    if (item.stock == 0) {
      return;
    }
    item.stock--;
    item.count++;
  }

  function decrease(pr) {
    const item = cartItems.value.find((p) => p.id === pr.id);
    item.count--;
    item.stock++;

    if (item.count == 0) {
      cartItems.value = cartItems.value.filter((p) => p.id != pr.id);
    }
    //   console.log(item);
  }

  function remove(pr) {
    cartItems.value = cartItems.value.filter((p) => p.id != pr.id);
  }

  const totalPrice = computed(() => {
    return cartItems.value.reduce((total, item) => {
     return total + item.count * item.price;
    }, 0);
    
  });
  storage(cartItems);

  return { cartItems, increase, decrease, addToCart, remove, totalPrice };
}
