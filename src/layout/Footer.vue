<script setup lang="ts">
import { useRouter } from "vue-router";
import config from "../assets/js/config.js";
const router = useRouter();
// const linkList = [
//   {
//     name: "Home",
//     url: "index",
//   },
//   {
//     name: "tagList",
//     url: "tagList",
//   },
//   {
//     name: "Github",
//     url: "https://github.com/Esick0429",
//     outside: true,
//   },
// ];
const linkList = config.linkList;
function jump(index: string) {
  router.push(index);
}
</script>
<template>
  <footer>
    <div class="footer_left">
      <span>安得广厦千万间，大庇天下寒士俱欢颜！</span>
    </div>
    <div class="footer_right flex column">
      <div class="nav flex_row">
        <div
          v-for="(i, index) of linkList"
          :key="i.name"
          :style="
            index != linkList.length - 1
              ? { borderRight: '1px solid #fff' }
              : 'none'
          "
        >
          <div @click="jump(i.url)" v-if="!i.outside">{{ i.name }}</div>
          <a :href="i.url" class="linkStyle" v-if="i.outside">{{ i.name }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.flex_row {
  display: flex;
  flex-direction: row;
}
.flex_column {
  display: flex;
  flex-direction: column;
}
footer {
  width: 100%;
  /* margin: 0 auto; */
  bottom: 0;
  position: absolute;
  /* height: 5rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-size: var(--contentFs);
  font-weight: 500;
}
.footer_left {
  width: 49%;
  text-align: left;
}
.footer_right {
  width: 50%;
}
.nav {
  justify-content: space-between;
  padding: 0 5px;
}
.nav div {
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.linkStyle {
  text-decoration: none;
  color: #000;
}
.linkStyle:visited {
  color: #000;
}
.linkStyle:hover {
  color: #999999;
  text-decoration: underline;
}
@media screen and (max-width: 768px) {
  footer {
    flex-direction: column;
    width: 100%;
  }
  .footer_left {
    width: 100%;
    text-align: center;
  }
  .footer_right {
    width: 100%;
  }
}
</style>
