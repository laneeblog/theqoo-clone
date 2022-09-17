<template>
  <h1>Input View</h1>
  <div>
    <input type="text" v-model="valueModel">
    <h2>{{ valueModel }}</h2>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      valueModel: '입력해봐'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
