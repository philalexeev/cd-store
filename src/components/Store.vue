<template>
  <div class="store">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Store'
}
</script>

<style scoped lang="scss">
@import "../styles/transitions";
</style>
