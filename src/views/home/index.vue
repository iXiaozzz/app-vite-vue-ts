<template>
  <p>this is vue3.</p>
  <p>count: {{ count }}</p>
  <p>vuex中的count: {{ vuexCount }}</p>
  <p>vuex中的home中的msg: {{ msg }}</p>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { key } from "@/store";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const count = ref(0);
    const $store = useStore(key);

    const msg = ref($store.state.storeHome.msg);

    console.log("store:", $store);

    count.value++;

    console.log("vuex home中的msg:");

    $store.dispatch("increaseAction", 100);

    const vuexCount = computed(() => $store.state.count);

    console.log("vuex中的count:", vuexCount);

    return {
      count,
      vuexCount,
      msg,
    };
  },
});
</script>

<style>
</style>