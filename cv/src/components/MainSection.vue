<template>
  <main id="main">
    <MainAbout />
    <MainFacts />
    <MainSkills />
    <MainResume />
    <MainServices />
    <MainContact />
  </main><!-- End #main -->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MainServices from './MainServices.vue'
import MainResume from './MainResume.vue'
import MainContact from './MainContact.vue'

@Options({
  components: {
    // MainServices,
    // MainResume,
    MainContact
  }
})

export default class MainSection extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
