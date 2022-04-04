
<template>
  <div>
    <NuxtLayout name="layout">
      <NuxtPage />
    </NuxtLayout>
    <div>{{ foo }}</div>
  </div>
</template>

<script setup>
const foo = useFoo();
</script>
