<script>
export default {
  data: () => {
    return {
      message: "check out!",
    };
    definePageMeta({
      middleware: ["shopify"], // もしくは 'auth'
      // middleware: 'auth',
    });
  },
};
</script>
<template>
  <div>
    {{ message }}
  </div>
</template>
<style></style>
