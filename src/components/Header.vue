<template>
  <div class="header">
    <div id="circularMenu" class="circular-menu" :class="{'active': openMenu === true}">
      <a class="floating-btn" @click="openMenu ? openMenu = false : openMenu = true">
        <i class="fas fa-bars"></i></a>
      <div class="items-wrapper">
        <router-link to="/" class="menu-item"><i class="far fa-home-alt"></i></router-link>
        <a href="https://www.instagram.com/enjoy_escape" target="_blank" class="menu-item"><i class="fab fa-instagram"></i></a>
        <a href="https://wa.me/989107707929" class="menu-item"><i class="fab fa-whatsapp"></i></a>
        <a href="tel:+989107707929" class="menu-item"><i class="far fa-phone-square"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openMenu: false,
    }
  }
}
</script>