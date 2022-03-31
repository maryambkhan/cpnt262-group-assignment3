<template>
  <div>
    <h1 class="flex justify-center font-bold text-2xl text-orange-700">
      {{ blok.name }}
    </h1> 
    <p> {{blok.role}}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
  },
});
console.log(`Movies content ${props.blok}`);
</script>
