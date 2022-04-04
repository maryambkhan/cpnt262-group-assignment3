<template>
  <div class="mapouter">
    <div class="gmap_canvas">
      <iframe
        width="600"
        height="500"
        id="gmap_canvas"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe
      ><a href="https://www.embedgooglemap.net">google maps embed html</a>
    </div>
  </div>
</template>

<style>
  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 500px;
    width: 600px;
  }
  .mapouter {
    position: relative;
    text-align: right;
    height: 500px;
    width: 600px;
  }
</style>