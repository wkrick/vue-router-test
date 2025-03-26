<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// initialize state from params if available
const mydata = ref(route.params.mydata || "")

/*
// this is not needed unless other things can update the URL
watch(
  () => route.params.mydata as string,
  async newVal => {
    console.log("watch params newVal: ", newVal)
    mydata.value = newVal
  }
)
*/

watch(
  mydata, (newVal) => {
    console.log("watch mydata newVal: ", newVal)
    router.push( "/" + newVal );
  }
)

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
