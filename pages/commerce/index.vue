<script setup lang="ts">
  const state = useState<string>("myplugin");
</script>

<template>
  <div>
    {{ state }}
  </div>
</template>