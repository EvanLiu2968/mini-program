<template>
  <div class="content">
    <div class="waterfall column-count-1">
        <div class="waterfall-item" v-for="(item, index) in photoList" :key="index">
          <div class="img-box" :title="item.title">
            <img :src="item.img" mode="widthFix"/>
          </div>
          <p class="description">{{item.desc}}</p>
        </div>
    </div>
  </div>
</template>

<script>
  import {
    getPhotos
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
        photoList: []
      };
    },
    components: {},
    methods: {
      async getData() {
        const data = await getPhotos();
        this.photoList = data.data.photoList;
      },
      goTo(url) {
        if (toLogin()) {
          wx.navigateTo({
            url: url
          });
        }
      },
      toLogin() {
        if (!this.userInfo.avatarUrl) {
          wx.navigateTo({
            url: "/pages/login/main"
          });
        }
      }
    },
    computed: {}
  };

</script>
<style lang='scss' scoped>
  @import "./style";

</style>
