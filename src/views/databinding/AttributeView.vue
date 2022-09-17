<template>
  <h1>Attribute View</h1>
  <div>
    <img src="../../assets/logo.png" alt="">
    <!-- <img :src="imgSrc" /> 이건 작동 안 함. webpack 경로 때문인 듯 -->
    <img src="@/assets/logo.png">
  </div>
  <div>
    <input type="text" v-model="txt">
    <button :disabled="txt==''">저장</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      imgSrc: '../../assets/logo.png',
      txt: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
