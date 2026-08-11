<script setup lang="ts">
import { useData } from 'vitepress'

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter, site, page } = useData()
</script>

<template>
  <div v-if="page && page.isNotFound">
    <a href="/">Home</a>
    <h1>NOT FOUND PAGE VALUE</h1>
    <p>{{ page }}</p>
  </div>
  <div v-if="frontmatter.home">
    <h1>{{ site.title }}</h1>
    <ul>
      <li><a href="/posts/markdown-examples.html">Markdown Examples</a></li>
      <li><a href="/posts/api-examples.html">API Examples</a></li>
      <li><a href="/posts/taming-the-elephant-heard/">Taming the Elephant Heard</a></li>
      <li><a href="/posts/index.html">Index</a></li>
      <li><a href="/index.html">Index ROOT</a></li>
    </ul>
  </div>
  <div v-else>
    <a href="/">Home</a>
    <Content />
  </div>
</template>
