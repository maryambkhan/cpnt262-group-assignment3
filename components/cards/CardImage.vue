<template>
<div class="flex justify-center">
  <img
    :src="props.url"
    :alt="props.alt"
    class="h-60 w-60 rounded-md"
  />
</div>
</template>
<script setup>
  const props = defineProps({
    url: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
    },
  });
</script>