<template>
  <div>
    여기는 Parent.<br />전달 받은 메시지는 => {{ msg }}<br />그리고 =>
    {{ myVar }}
  </div>
  <br />
  <Child :msg="msg" />
  <Child2 />
</template>
<script>
import Child from './ChildView.vue'
import Child2 from './ChildView2.vue'
export default {
  components: {
    Child,
    Child2
  }
  // props: {
  //   msg: {
  //     type: String,
  //     default: ''
  //   },
  //   myVar: {
  //     type: Number,
  //     default: 1
  //   }
  // }
}
</script>
