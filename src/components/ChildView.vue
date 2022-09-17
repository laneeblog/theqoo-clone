<template>
  <div>여기는 Child</div>
  <br>
  <div>==> {{ msg }} <br>==>{{ myVar }}</div>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      default: 'default'
    },
    myVar: {
      type: String,
      default: 'dd'
    }
  }
}
</script>
