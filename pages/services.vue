<template>
  <div>
    <TheHeader />
    <div class="flex m-auto">
      <img
        src="https://img.freepik.com/free-vector/database-with-cloud-server-data-set-process-classification-database-data-analytic_473851-325.jpg?w=1480"
        alt="coding image"
        class="w-full"
      />
    </div>
    <h1 class="text-center font-semibold  text-2xl mt-8 text-white">SERVICES WE PROVIDE</h1>
    <div class="flex flex-wrap justify-center mt-8">
      <CardLayout v-for="card in cards" :key="card.id">
        <card-image :url="card.image" />
        <card-title>{{ card.title }}</card-title>
        <card-info>{{ card.description }}</card-info>
      </CardLayout>
    </div>
   <TheFooter :title="'&copy; team dev'" />
  </div>
</template>

<script setup>
const cards = [
  {
    title: "Web Development",
    description: "Building and Creating websites from the ground up",
    image: "",
  },
  {
    title: "JAVA SCRIPT",
    description: "Take your existing website functionality to the next level",
    image:
      "https://images.pexels.com/photos/4578665/pexels-photo-4578665.jpeg?cs=srgb&dl=pexels-markus-winkler-4578665.jpg&fm=jpg",
  },
  {
    title: "UX/UI",
    description: "Graphic design tailored to the user experience",
    image: "",
  },
  {
    title: "SEO Optimization",
    description: "Jump to the top of the list when SEO tactics",
    image: "",
  },
];
</script>