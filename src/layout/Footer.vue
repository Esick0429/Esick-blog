<script setup lang="ts">
const linkList = [
  {
    name: "Home",
    url: "/home",
  },
  {
    name: "Archives",
    url: "/archives",
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
            index != linkList.length - 1
              ? { borderRight: '1px dashed' }
              : 'none'
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
  width: 90%;
  margin: 0 auto;
  /* height: 5rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
.footer_left {
  width: 40%;
}
.footer_right {
  width: 40%;
}
.nav {
  justify-content: space-between;
  padding: 0 5px;
}
.nav div {
  width: 20%;
}
@media screen and (max-width: 768px) {
  footer {
    flex-direction: column;
  }
  .footer_left {
    width: 100%;
  }
  .footer_right {
    width: 100%;
  }
}
</style>
