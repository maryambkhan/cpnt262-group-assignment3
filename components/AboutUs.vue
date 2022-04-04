<template>
  <div>
    <img :src="blok.image.filename" class=" mt-10 m-auto flex justify-center
    h-60 box-border hover:box-content border-2 border-black" />
    <h1 class="flex justify-center font-bold text-2xl text-white">
      {{ blok.name }}
    </h1>
    <p class="flex justify-center font-semibold text-2xl text-white">
      {{ blok.role }}
    </p>
    <p class="flex justify-center text-2xl text-white">{{ blok.skills }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
  },
});
</script>
