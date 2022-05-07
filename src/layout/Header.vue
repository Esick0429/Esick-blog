<script setup lang="ts">
import { ref } from "vue";
const logo =
  "http://119.91.27.40:4000/images/image_1641988377959_a8a933dd84336dc9c3570b3886bf0c9a.jpeg";
const linkList = [
  {
    name: "Home",
    url: "/#/index",
  },
  {
    name: "About",
    url: "/#/about",
  },
  {
    name: "Github",
    url: "https://github.com/Esick0429",
  },
];
let flag = ref(false);

function openDrop() {
  flag.value = !flag.value;
}
</script>
<template>
  <header class="flex_row">
    <div class="logo">
      <img :src="logo" alt="" />
    </div>
    <div class="header_right flex column">
      <div class="title">Hello Esick</div>
      <div class="nav flex_row">
        <div
          v-for="(i, index) of linkList"
          :key="i.name"
          :style="
            index != linkList.length - 1
              ? { borderRight: '1px dashed' }
              : 'none'
          "
          class="nav_content"
        >
          <a :href="i.url" class="linkStyle">{{ i.name }}</a>
        </div>
      </div>
    </div>
    <div class="menuDown" @click="openDrop()">
      <svg
        class="icon"
        width="30"
        height="30"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        data-v-4194ce60=""
      >
        <path fill="currentColor" d="M192 384l320 384 320-384z"></path>
      </svg>
    </div>
    <div class="dropDown" v-show="flag">
      <ul>
        <li v-for="i of linkList" :key="i.name">
          <a :href="i.url">{{ i.name }}</a>
        </li>
      </ul>
    </div>
  </header>
  <!-- <div class="mb" v-show="flag"></div> -->
</template>
<style scoped>
header {
  width: 100%;
  /* height: 100%; */
  align-items: center;
  position: relative;
  top: 10px;
  z-index: 100000;
}
.flex_row {
  display: flex;
  flex-direction: row;
}
.flex_column {
  display: flex;
  flex-direction: column;
}
.logo img {
  width: calc(100vw * (80 / 1920));
  height: calc(100vw * (80 / 1920));
  border-radius: calc(100vw * (80 / 1920));
}
.header_right {
  width: 100%;
  padding-left: calc(100vw * (15 / 1920));
}
.title {
  font-size: calc(100vw * (50 / 1920));
  color: #ffffcc;
}
.nav {
  justify-content: space-between;
  padding: 0 5px;
}
.nav div {
  width: 20%;
  font-size: var(--contentFs);
  text-align: center;
  flex: 1;
}
.linkStyle {
  text-decoration: none;
  color: #fff;
}
.linkStyle:visited {
  color: #fff;
}
.linkStyle:hover {
  color: #999999;
  text-decoration: underline;
}
.menuDown {
  display: none;
}
.dropDown {
  position: absolute;
  top: 30px;
  /* left: -0.3rem; */
  width: 100%;
}
.dropDown ul {
  width: 100%;
  padding: 0;
  list-style: none;
  text-align: center;
  background: #eee;
}
.dropDown li {
  height: 1.5rem;
  line-height:1.5rem
}
.dropDown li a {
  color: #666;
  line-height: calc(100vw * (15 / 1920));
  text-decoration: none;
}
.dropDown li a:hover {
  color: blue;
  text-decoration: underline;
}
.mb {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(2.5px);
}
@media screen and (min-width:769px) {
  .header_right{
    width: 50%;
  }
}
@media screen and (max-width: 768px) {
  header {
    justify-content: space-between;
  }
  .logo img {
    width: 2rem;
    height: 2rem;
  }
  .title {
    font-size: 1.5rem;
  }
  .nav {
    display: none;
  }
  .menuDown {
    display: block;
  }
}
</style>
