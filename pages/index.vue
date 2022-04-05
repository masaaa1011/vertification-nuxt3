<script>
import Aparrel from "../components/shop/aparrel.vue";

export default {
  data: () => {
    return {
      message: "Hello Commerce!",
    };
  },
  components: { Aparrel },
};

definePageMeta({
  middleware: ['shopify'], // もしくは 'auth'
  // middleware: 'auth',
})
</script>

<template>
  <div>
    {{ message }}
    <Aparrel />
  </div>
</template>
