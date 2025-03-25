<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();

const mydata = ref(route.params.mydata || "");

watch(
  () => route.params.mydata,
  (newVal, oldVal) => {
    console.log("watch params oldVal: ", oldVal)
    console.log("watch params newVal: ", newVal)
    mydata.value = newVal;
    // Perform any other actions needed when the data changes
  }
)

watch(mydata, (newVal, oldVal) => {
  console.log("watch mydata oldVal: ", oldVal)
  console.log("watch mydata newVal: ", newVal)

  if (newVal) {
    router.push({
      name: "content2",
        params: {
          mydata: newVal,
        },
    });
  } else {
    mydata.value = ""
    router.push({
      name: "content",
    });
  }

});

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
