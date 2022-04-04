<template>
  <div class="mt-10">
    <div
      class="
        max-w-md
        mx-auto
        bg-white
        rounded-xl
        overflow-hidden
        md:max-w-2xl
        mb-8
      "
    >
      <div class="md:flex">
        <div class="md:shrink-0">
          <img
            :src="blok.image.filename"
            class="
              m-auto
              flex
              justify-center
              h-60
              box-border
              hover:box-content
            "
          />
        </div>
        <div class="p-8">
          <h1 class="flex justify-start font-bold text-2xl text-blue-900 ">
            {{ blok.name }}
          </h1>
          <p class="flex justify-start font-semibold text-2xl text-blue-500 ">
            {{ blok.role }}
          </p>
          <p class="flex justify-start text-lg text-blue-500">{{ blok.skills }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
  },
});
</script>
