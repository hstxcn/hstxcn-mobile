<template lang="html">
  <div class="ques">
      <myXHeader header="常见问题" :showQa="showQa"></myXHeader>
  </div>
</template>

<script>
import myXHeader from '../myXHeader.vue'

export default {
  name: 'ques',
  data () {
    return {
      showQa : false,
    }
  },
  components: {
    myXHeader,
  },
}
</script>

<style lang="css">
</style>
