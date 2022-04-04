<template>
    <!--StoryBlok -->
 <section>
   <h1 class="flex justify-center font-bold text-black text-2xl mt-4">MEET THE TEAM</h1>
  <AboutUs :blok="components[0]" />
  
  <div>
    <pre>
      {{ pageContent }}
    </pre>
  </div>

 </section>
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

