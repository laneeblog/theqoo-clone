<template>
  <h1>Checkbox View</h1>
  <div>
    <label><input type="checkbox" v-model="cities" value="02"> 서울</label>
    <label><input type="checkbox" v-model="cities" value="21"> 제주</label>
    <label><input type="checkbox" v-model="cities" value="064"> 부산</label>
    <div>{{ cities }}</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      cities: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
