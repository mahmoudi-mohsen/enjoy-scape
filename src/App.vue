<template>
  <div id="app" :class="{'side-cola': $sidebarModel === false}">
    <router-view v-if="isRouterAlive" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isRouterAlive: true,
      }
    },
    created() {
    },

    methods: {
      reload () {
        this.isRouterAlive = false;
        this.$nextTick(() => (this.isRouterAlive = true))
      }
    },
  }
</script>
<style lang="scss">
  @import "@/assets/sass/main.scss";
</style>

