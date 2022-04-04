<template>
<div class="flex justify-center">
  <img
    :src="props.url"
    :alt="props.alt"
    class="  w-3/6"
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