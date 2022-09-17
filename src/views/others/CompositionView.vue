<template>
  <Parent :msg="message" :myVar="myVar" />
</template>
<script>
import Parent from '../../components/ParentView.vue'
export default {
  components: {
    Parent
  },
  data() {
    return {
      message: 'Hello world!',
      myVar: 3
    }
  },
  provide() {
    // 여러 컴포넌트를 거쳐서 data를 전달할 경우
    return {
      msg: this.message,
      myVar: this.myVar
    }
  }
}
</script>
