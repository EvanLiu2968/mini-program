<!--
富文本解析组件
-->

<template>
<wxParse :content="content" noData="" :className="className" />
</template>

<script>
import wxParse from 'mpvue-wxparse'

export default {
  components: {
    wxParse
  },
  mounted() {
    console.log('start parse')
  },
  props: {
    className: {
      type: String
    },
    content: {
      type: String
    }
  }
}
</script>

<style>
@import url("~mpvue-wxparse/src/wxParse.css");
</style>
