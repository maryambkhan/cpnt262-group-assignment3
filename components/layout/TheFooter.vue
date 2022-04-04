<template>
<div class="mt-4">
<footer class="grid place-items-center text-white text-center">
  <p class="text-xl py-8">&copy;2022 Dev Team</p>
</footer>
</div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '&copy; 2022'
  }
});
</script>