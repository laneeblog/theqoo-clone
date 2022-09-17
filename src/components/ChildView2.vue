<template>
  <div>여기는 Child2</div>
  <br>
  <div>==> {{ msg }} <br>==>{{ myVar }}</div>
</template>
<script>
export default {
  inject: ['msg', 'myVar']
}
</script>
