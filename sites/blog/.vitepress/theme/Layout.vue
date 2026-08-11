<script setup lang="ts">
import { useData } from 'vitepress'

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter, site } = useData()
</script>

<template>
  <div v-if="frontmatter.home">
    <h1>{{ site.title }}</h1>
    <ul>
      <li><a href="/sites/blog/posts/markdown-examples.html">Markdown Examples</a></li>
      <li><a href="/sites/blog/posts/api-examples.html">API Examples</a></li>
      <li><a href="/sites/blog/posts/index.html">Index</a></li>
    </ul>
  </div>
  <div v-else>
    <a href="/sites/blog/index">Home</a>
    <Content />
  </div>
</template>
