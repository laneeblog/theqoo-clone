<template>
  <h1>Textarea View</h1>
  <div>
    <textarea name="" id="" cols="30" rows="10" v-model="message"></textarea>
    <div>{{ message }}</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      message: '입력하세요'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
