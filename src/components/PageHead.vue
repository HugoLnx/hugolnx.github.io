<template>
  <meta
    v-for="(content, name) in metatags"
    :key="name"
    :name="name"
    :content="content"
  >
</template>

<script setup>

const { data } = defineProps({
    data: { type: Object, required: true },
});

const {
    title,
    description,
    pageUrl,
    mainTitle,
    socialImage,
} = data;

const metatags = {
    viewport: 'width=device-width, initial-scale=1',
    'og:title': title,
    'og:description': description,
    description,
    'og:url': pageUrl,
    'og:site_name': mainTitle,
    'og:image': socialImage,
};
</script>
