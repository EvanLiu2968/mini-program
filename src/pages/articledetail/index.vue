<template>
  <div class="content">
    <mp-parse-html :content="content" @preview="preview" @navigate="navigate" />
  </div>
</template>

<script>
  import {
    getArticleDetail
  } from "../../api/list";
  function getQuery() {
    /* 获取当前路由栈数组 */
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1]
    return currentPage.options
  }
  export default {
    onShow() {
      //
    },
    // onLoad(option) {
    //   console.log(option.query)
    // },
    created() {},
    mounted() {
      this.getData();
    },
    data() {
      return {
        content: '<div>我是HTML代码</div>'
      };
    },
    components: {},
    methods: {
      async getData() {
        const { category, id } = getQuery();
        const data = await getArticleDetail(category, id);
        console.log(data)
        this.content = data.data;
      },
      preview(src, e) {
        // do something
      },
      navigate(href, e) {
        // do something
      }
    },
    computed: {}
  };

</script>
<style lang='scss' scoped>
@import "./style";
</style>
