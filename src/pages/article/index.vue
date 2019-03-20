<template>
  <div class="content">
    <ul class="md-list">
      <li v-for="(item, i) in currentList" :key="i">
        <div class="md-item" @click="goTo(item)">
          <h3 class="md-title">{{item.title}}</h3>
          <div class="md-desc">
            <span class="md-time">{{item.createTime}}</span>
            <span class="md-tag" v-for="(keyword, k) in item.keywords" :key="k">{{keyword}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {
    getArticles
  } from "../../api/list";
  export default {
    onShow() {
      //
    },
    created() {},
    mounted() {
      this.getData();
    },
    data() {
      return {
        category: [],
        currentIndex: 0,
        currentList: []
      };
    },
    components: {},
    methods: {
      async getData() {
        const data = await getArticles();
        this.currentList = data.data.category[0].children
      },
      goTo(item) {
        let url = `/pages/articledetail/main?category=${'learning'}&id=${item.src}`
        wx.navigateTo({
          url
        });
      }
    },
    computed: {}
  };

</script>
<style lang='scss' scoped>
  @import "./style";

</style>
