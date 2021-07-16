<template>
  <div class="clearfix mb4 xs-hide">
  <!--<div>Categories <p v-for="cat of technology.tech" v-bind:key="cat">{{ cat.category }}</p>
  </div>-->
    <div class="sm-col sm-col-3 md-col-2 px2 py3" v-for="item of technology.tech" v-bind:key="item">
      <a
        v-bind:href="item.uri"
        class="h-60 flex flex-column justify-center"
        target="_blank">
        <img
          v-bind:src="item.icon"
          class="fit block mx-auto grayscale opacity-50 opacity-100-hover grayscale-0-hover"
          v-bind:alt="item.description"/>
      </a>
    </div>
  </div>
</template>

<script>
import technology from '../data/tech';

console.log(technology);

export default {
  name: 'Technologies',
  data() {
    return {
      technology,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
