<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { getbilibilixml } from '../api/test-api';
defineProps<{ msg: string }>()

const count = ref(0)
var xmlstring = ref("")
const getxml = () => {
  const xx = getbilibilixml()
  const parser = new DOMParser()
  const doc = parser.parseFromString(xx, "text/xml")

  const errorNode = doc.querySelector('title')
  xmlstring = ref(errorNode?.innerHTML as string)
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="getxml">count is {{ count }}</button>
    <p>
      {{ xmlstring }}
    </p>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
