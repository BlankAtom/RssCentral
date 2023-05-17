<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import ArticleCard from './components/ArticleCard.vue'

console.log("[App.vue]", `Hello world from Electron ${process.versions.electron}!`)
</script>

<template>
  <HelloWorld msg="Electron + Vite + Vue" />
  <ArticleCard msg="DD"/>
  <!-- <ArticleCard msg="DD"/> -->
</template>

<style>

</style>
