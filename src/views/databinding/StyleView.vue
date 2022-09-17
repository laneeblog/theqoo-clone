<template>
  <h1>Style View</h1>
  <div style="color:red;font-size:10px;">인라인 스타일 적용</div>
  <div :style="styleObject">스타일 데이터 바인딩</div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      styleObject: {
        color: 'blue',
        fontSize: '30px'
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
