<script setup lang="ts">
import { useData } from "vitepress"

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
      <li><a href="/posts/markdown-examples">Markdown Examples</a></li>
      <li><a href="/posts/api-examples">API Examples</a></li>
      <li><a href="/posts/taming-the-elephant-heard/">Taming the Elephant Heard</a></li>
      <li><a href="/posts/index">Index</a></li>
      <li><a href="/index">Index ROOT</a></li>
    </ul>
    <Content />
  </div>
  <div v-else>
    <a class="home-link" href="/">Home</a>
    <main>
      <Content />
    </main>
  </div>
</template>
