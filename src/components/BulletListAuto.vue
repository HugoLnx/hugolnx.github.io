<template>
  <BulletList class="bullet-list-auto">
    <BulletListItem
      v-for="item in items"
      :key="item.description"
    >
      <span v-if="item.title" class="bullet-title">{{ item.title }}</span>
      <span class="bullet-description">{{ item.description }}</span>
    </BulletListItem>
  </BulletList>
</template>

<script setup>
import BulletList from './BulletList.vue';
import BulletListItem from './BulletListItem.vue';

const { items: rawItems } = defineProps({
    items: { type: Array, required: true },
});

const items = rawItems.map((item) => {
    if (typeof item === 'string') {
        return { description: item };
    }
    return item;
});
</script>
