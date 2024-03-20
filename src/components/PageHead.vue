<template>
  <meta
    v-for="(content, name) in metatags"
    :key="name"
    :name="name"
    :content="content"
  >
  <link
    rel="canonical"
    :href="pageUrl"
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

const rawMetatags = {
    viewport: 'width=device-width, initial-scale=1',
    'og:title': title,
    'og:description': description,
    description,
    'og:url': pageUrl,
    'og:site_name': mainTitle,
    'og:image': socialImage,
    'google-site-verification': import.meta.env.VITE_GOOGLE_SITE_VERIFICATION,
};

const metatags = Object.fromEntries(
    Object.entries(rawMetatags).filter(([, content]) => content),
);
</script>
