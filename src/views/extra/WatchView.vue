<template>
  <h1>Computed</h1>
  <div>
    <div>full name: {{ fullname }}</div>
    <input v-model="firstname" />
    <input v-model="lastname" />
    <br /><br />
    <button @click="changeData1">changeData1</button>
    <br />
    <button @click="changeData2">changeData2</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      firstname: 'lan',
      lastname: 'lee',
      fullname: 'lan lee',
      oData: {},
      oldData: {}
    }
  },
  watch: {
    firstname(currentValue, oldValue) {
      console.log(currentValue, oldValue)
      this.fullname = this.firstname + ' ' + this.lastname
    }
    // sumFunc() {
    //   return this.num01 + this.num02
    // }
  },
  setup() {},
  created() {},
  mounted() {
    console.log(this.oData)
    var x = 0.1
    var y = 0.2
    var z = x + y
    console.log(z)
    console.log(z.toFixed(2))
    this.oData = {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D'
    }
    console.log(this.oData)
  },
  unmounted() {
    console.log('unmounting')
  },
  methods: {
    changeData1() {
      console.log(this.oData.a)
      this.oData.a = this.oData.a + 'AAAA'
      console.log(this.oData.a)
    }
  }
}
</script>
