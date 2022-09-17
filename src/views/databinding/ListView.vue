<template>
  <h1>List View</h1>
  <select v-model="selectedValue" @change="onChange($event)">
    <option v-for="city in cities" :value="city.v" :key="city.t">
      {{ city.t }}
    </option>
  </select>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selectedValue: '',
      cities: [
        { t: 'seoul', v: '02' },
        { t: 'busan', v: '21' },
        { t: 'jeju', v: '064' }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    onChange(event) {
      console.log('The new value is: ', event.target.value)
    }
  }
}
</script>
