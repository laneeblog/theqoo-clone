<template>
  <h1>Class View</h1>
  <div class="container" :class="{ 'text-red': isActive, 'text-big': isBig }">클래스 바인딩</div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      isActive: false,
      isBig: false
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

<style scoped>
.container {
  width: 100px;
  height: 100px;
  background-color: yellow;
}

.text-red {
  color: red;
}

.text-big {
  font-size: 50px;
}
</style>
