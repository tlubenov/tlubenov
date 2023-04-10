<template>
  <i class="bi bi-list mobile-nav-toggle d-lg-none"></i>
  <HeaderSection />
  <HeroSection />
  <MainSection />

  <FooterSection />

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import HeaderSection from '@/components/HeaderSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import MainSection from '@/components/MainSection.vue'
import FooterSection from '@/components/FooterSection.vue'

@Options({
  components: {
    HeaderSection,
    HeroSection,
    FooterSection,
    MainSection
  }
})
export default class HomeView extends Vue {}
</script>
