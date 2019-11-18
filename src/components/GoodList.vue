<!--
 * @Author: yhlyl
 * @Date: 2019-11-18 22:08:51
 * @LastEditTime: 2019-11-18 22:49:06
 * @LastEditors: yhlyl
 * @Description: 
 * @FilePath: /webwork/proj/src/components/GoodList.vue
 * @https://github.com/android-coco
 -->
<template>
  <div class="show">
    <ul class="goodlist">
      <li v-for="good in list" :key="good">
        <img v-bind:src="good.img" />
        <p>{{good.goodName}}</p>
      </li>
    </ul>
  </div>
</template>

<style>
.goodlist li {
  width: 200px;
  height: 200px;
  list-style: none;
  float: left;
  font-size: 6px;
  color: red;
  margin-bottom: 60px;
}
.goodlist img {
  width: 180px;
  height: 180px;
}
</style>

<script>
export default {
  name: "show",
  data() {
    var _this = this;
    var url = "";
    if (_this.goodId == "1") {
      url = "json/bjb.json";
    } else if (_this.goodId == "2") {
      url = "json/shouji.json";
    } else {
      url = "json/bjb.json";
    }
    this.$http.get(url).then(function(res) {
      _this.list = res.data;
    });
    return {
      list: []
    };
  },
  props: {
    goodId: Number
  },
  watch: {
    goodId() {
      var _this = this;
      var url = "";
      if (_this.goodId == "1") {
        url = "json/bjb.json";
      } else if (_this.goodId == "2") {
        url = "json/shouji.json";
      } else {
        url = "json/bjb.json";
      }
      this.$http.get(url).then(function(res) {
        _this.list = res.data;
      });
      return {
        list: []
      };
    }
  }
};
</script>