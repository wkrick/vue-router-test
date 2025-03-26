<script setup lang="ts">
import { useRouteParams } from '@vueuse/router'

const mydata = useRouteParams('mydata', '')
</script>

<template>
    <div>$route.params.mydata: {{ $route.params.mydata }}</div>
    <div> Selected: {{ mydata }}</div>

    <select v-model="mydata">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
</template>

<style scoped>
</style>
