<template>
    <div>
        <transition
            name="fade"
            mode="out-in"
        >
            <nuxt />
        </transition>
    </div>
</template>

<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: 0.3s opacity linear;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
