<script setup lang="ts">
import HomeItem from "../common/HomeItem.vue";
</script>
<template>
    <div class="about">
      <span>
      那一天我二十一岁，在我一生的黄金时代，我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云，后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消逝，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己会永远生猛下去，什么也锤不了我。
      </span>
      <br>
      <span style="float: right;">
        ————王小波《黄金时代》
      </span>
    </div>
    <div class="srcoll_view">
      <HomeItem />
    </div>
</template>
<style scoped>

.about {
  line-height: 1.5rem;
  font-size: var(--contentFs);
  letter-spacing: 0.15rem;
  width: 100%;
  color: #666666;
  font-weight: bold;
  font-family:cursive
}
.srcoll_view{
  height: 80%;
  overflow-y: auto;
  width: 100%;
}
</style>
