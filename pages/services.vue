<template>
  <div>
    <TheHeader />
    <div class="flex justify-center m-auto mt-2">
      <img
        src="../assets/images/servicehero.jpg"
        alt="coding image"
        class="w-90 h-90"
      />
    </div>
    <h1 class="text-center font-semibold text-4xl mt-8 text-blue-900">
      SERVICES WE PROVIDE
    </h1>
    <div class="flex flex-wrap justify-center mt-8">
      <CardLayout v-for="card in cards" :key="card.id">
        <card-image :url="card.image" />
        <card-title>{{ card.title }}</card-title>
        <card-info>{{ card.description }}</card-info>
      </CardLayout>
    </div>
    <TheFooter  />
  </div>
</template>

<script setup>
const cards = [
  {
    title: "Web Development",
    description: "Building and Creating websites from the ground up",
    image: "https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Javascript",
    description: "Take your existing website functionality to the next level",
    image: "../assets/images/java.jpg",
  },
  {
    title: "UX/UI",
    description: "Graphic design tailored to the user experience",
    image:"../assets/images/ux.jpeg",
  },
  {
    title: "SEO Optimization",
    description: "Jump to the top of the list when SEO tactics",
    image: "../assets/images/seo.jpeg",
  },
];
</script>