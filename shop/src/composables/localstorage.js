import { ref, watch } from "vue";

export function storage(data) {
  watch(
    data,
    (newValue) => {
      localStorage.setItem("product", JSON.stringify(newValue));
    },
    { deep: true }
  );
}
