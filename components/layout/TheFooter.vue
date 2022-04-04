<template>
  <div class="mt-4">
    <footer class="flex justify-between h-30 mt-7 text-white w-full bg-blue-500">
      <p class="text-xl py-8 ml-8">&copy;2022 YYC Code Collective</p>
      <div class="grid col-start-5 pt-6 mb-6 pr-12">
        <a href="/" class="hover:text-blue-300">Instagram</a>
        <a href="/" class="hover:text-blue-300">Git Hub</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "&copy; 2022",
  },
});
</script>