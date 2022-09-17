<template>
  <h1>Computed</h1>
  <div>
    <div>full name: {{ fullnameFunc }}</div>
    <input v-model="firstname">
    <input v-model="lastname">
    <br><br>
    <input type="number" v-model="num01">
    <input type="number" v-model="num02">
    <div>num01 + num02 = {{ sumFunc }}</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      firstname: 'lan',
      lastname: 'lee',
      num01: 1,
      num02: 2
    }
  },
  computed: {
    fullnameFunc() {
      return this.firstname + ' ' + this.lastname
    },
    sumFunc() {
      return this.num01 + this.num02
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
