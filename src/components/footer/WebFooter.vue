<template>
  <div class="style1">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 py-5 col-sm-6" v-for="items in footerItems" :key="items">
          <ul>
            <b>{{ items.item }}</b>
            <li v-for="sub in items.subItem" :key="sub">{{ sub }}</li>
          </ul>
        </div>

      </div>
      <hr class="border border-2" style="color:white">
      <div class="d-flex pb-5 justify-content-between">
        <div d-flex>
          <i class="fa-brands fa-whatsapp me-3"></i>
          <i class="fa-brands fa-instagram me-3"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
        <div>
          <p>Vintage, 2023</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const footerItems = [
  {
    item: "Vintage",
    subItem: ["About us", "Sustainability", "Blog", "Advertising"],
  },
  {
    item: "Discover",
    subItem: ["How it works", "Help Center", "Infoboard", "Mobile apps"],
  },
  { item: "Help", subItem: ["Help Center", "Buying", "Trust & Safety"] },
  { item: "Community", subItem: ["Forum"] },
];
</script>
<style scoped>
.style1 {
  background-color:#135D66;
  color: white;
}

i {
  font-size: 25px;
}

ul {
  list-style: none;
}
</style>
