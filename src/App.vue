<script setup lang="ts">
import { APP_TITLE } from '@/constants/title'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="text-center">
    <h1 class="font-bold my-8 text-3xl text-black">{{ APP_TITLE }}</h1>

    <RouterView />
  </div>
</template>
