<script setup lang="ts"></script>
<template>
  <div class="item">
    <div class="itemTitle">
      <a href="" style="text-decoration:none"> Vue </a>
    </div>
    <div class="itemContent">
      <div class="articleDate">2020-02-20</div>
      <div class="articleTitle">
        <a href="/#/sss">浔阳江头夜送客</a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.itemTitle {
  letter-spacing: 0.01em;
  font-size: 1.5em;
  font-style: normal;
  font-weight: 700;
  color: #2bbc8a;
  margin-top: 3rem;
  margin-bottom: 1rem;
  display: block;
}
.itemContent {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
}
.articleDate{
  margin-right: 3rem;
}
@media screen and (max-width: 768px) {
  .itemContent{
    flex-direction: column;
  }
  .articleDate{
    margin-bottom: .5rem;
  }
}
</style>
