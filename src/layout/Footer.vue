<script setup lang="ts">
const linkList = [
  {
    name: "Home",
    url: "/home",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Github",
    url: "https://github.com/Esick0429",
  },
];
</script>
<template>
  <footer>
    <div class="footer_left">
      <span>八百标兵奔北坡</span>
    </div>
    <div class="footer_right flex column">
      <div class="nav flex_row">
        <div
          v-for="(i, index) of linkList"
          :key="i.name"
          :style="
            index != linkList.length - 1 ? { borderRight: '1px solid' } : 'none'
          "
        >
          <a :href="i.url" class="linkStyle">{{ i.name }}</a>
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
  width: calc(100vw * (1152 / 1920));
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
  width: 25%;
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
