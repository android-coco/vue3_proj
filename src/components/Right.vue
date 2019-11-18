<!--
 * @Author: yhlyl
 * @Date: 2019-11-18 21:29:45
 * @LastEditTime: 2019-11-18 22:42:10
 * @LastEditors: yhlyl
 * @Description: 
 * @FilePath: /webwork/proj/src/components/Right.vue
 * @https://github.com/android-coco
 -->
<template>
  <div>
    <div v-if="type==1">
      <GoodList :goodId="1"></GoodList>
    </div>
    <div v-else-if="type==2">
      <GoodList :goodId="2"></GoodList>
    </div>
    <div v-else-if="type==3">33333333333333</div>
    <div v-else-if="type==4">44444444444444</div>
    <div v-else-if="type==5">55555555555555</div>
    <div v-else-if="type==6">66666666666666</div>
    <div v-else-if="type==7">77777777777777</div>
    <div v-else-if="type==8">88888888888888</div>
    <div v-else-if="type==9">99999999999999</div>
    <div v-else-if="type==10">10-10101010101010</div>
    <div v-else-if="type==11">11-11-111111111111111</div>
    <div v-else>
      <GoodList :goodId="0"></GoodList>
    </div>
  </div>
</template>

<script>
import Msg from "./msg.js";
import GoodList from "./GoodList.vue";
export default {
  data() {
    return {
      type: 0
    };
  },
  mounted: function() {
    var _this = this;
    Msg.$on("val", function(m) {
      _this.type = m;
    });
  },
  components: {
    GoodList
  }
};
</script>