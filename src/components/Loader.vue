<template>
  <div class="loader-wrapper">
  <div class="loader">
    <div class="circle">
      <div class="ghost">
        <div class="ghost__top">
          <div class="ghost__top__face"></div>
          <div class="ghost__top__arms"></div>
        </div>
        <div class="ghost__tail">
          <div class="ghost__tail__drip"></div>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="ghost-blur" />
          <feColorMatrix in="ghost-blur" mode="matrix" values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 16 -7" result="ghost-gooey" />
        </filter>
      </defs>
    </svg>
  </div>
  </div>
</template>

<script>
export default {

}
</script>
