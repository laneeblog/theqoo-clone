<template>
  <h1>Radio View</h1>
  <div>
    <label><input type="radio" v-model="city" value="02"> 서울</label>
    <label><input type="radio" v-model="city" value="21"> 제주</label>
    <label><input type="radio" v-model="city" value="064"> 부산</label>
    <div>{{ city }}</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      city: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
