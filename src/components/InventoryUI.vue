<script setup lang="ts">
import { reactive, watch } from 'vue'
import { Build } from '@/classes/Build'
import { useRoute, useRouter } from 'vue-router'
import { compressToBase64URL } from '@/lz-string/base64URL'
import { decompressFromBase64URL } from '@/lz-string/base64URL'

const route = useRoute()
const router = useRouter()

const hashparams = (route.params['state'] || '') as string
const initialState = hashparams ? decompressFromBase64URL(hashparams) : ''
console.log('initial state from URL: ', initialState)
const build = reactive(new Build(initialState))

// if the URL changes, update the build
watch(
  () => route.params['state'],
  async (newVal) => {
    console.log('watch URL params - new value: ', newVal)
    const s = (route.params['state'] || '') as string
    build.state = s ? decompressFromBase64URL(s) : ''
  },
)

// if the build changes, update the URL
watch(
  () => build.state,
  (newVal) => {
    console.log('watch build.state - new value: ', newVal)
    router.push({
      params: {
        state: newVal ? compressToBase64URL(newVal) : '',
      },
    })
  },
)
</script>

<template>
  <div>
    <h1>Builder</h1>

    <div>build.state: {{ build.state }}</div>
    <div>$route.params.state (encoded): {{ $route.params.state }}</div>

    <form>
      <fieldset class="fieldset">
        <legend class="legend">Gear</legend>
        <div class="gear">
          <template v-for="apparel in build.apparel" :key="apparel.label">
            <label>{{ apparel.label }}</label>
            <select v-model="apparel.weight">
              <option disabled value="">Select Weight</option>
              <option value="l">Light</option>
              <option value="m">Medium</option>
              <option value="h">Heavy</option>
            </select>
            <select v-model="apparel.quality">
              <option disabled value="">Select Quality</option>
              <option value="f">Fine</option>
              <option value="s">Superior</option>
              <option value="e">Epic</option>
            </select>
            <select v-model="apparel.trait">
              <option disabled value="">Select Trait</option>
              <option value="a">Aggressive</option>
              <option value="b">Bolstered</option>
              <option value="s">Soothing</option>
            </select>
          </template>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<style scoped>
div.gear {
  width: fit-content;
  display: grid;
  grid-template-columns: max-content max-content max-content max-content;
  grid-gap: 5px;
}
div.gear label {
  display: flex;
  align-items: center;
  text-align: right;
}
div.gear label:after {
  content: ':';
}
</style>
