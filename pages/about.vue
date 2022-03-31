<template>
<div>
<main>
<!--StoryBlok -->
 <section>
   <h1 class="flex justify-center font-bold text-orange-900 text-2xl mt-4">Our Team</h1>
  <AboutUs :blok="components[1]" />
  
  <div>
    <pre>
      {{ pageContent }}
    </pre>
  </div>

 </section>
</main>
</div>
</template>


<script setup>

const storyapi = useStoryApi();

const { data: team } = await storyapi.get("cdn/stories/about-us/team-members", {
  version: "draft",
});
const state = reactive({ story: team.story });
const pageContent = state.story.content;
const components = state.story.content.team;
const pageInfo = {
  title: pageContent,
  description: state.story.content.description,
};
</script>

