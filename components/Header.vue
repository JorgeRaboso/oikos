<template>
    <header class="c-header">
        <div class="c-header__inner">
            <div class="c-header__logo">
                <img src="/media/logo.png" alt="Muchoviaje">
            </div>
        </div>
    </header>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
  .c-header {
    background: $color-primary;
    padding: rem(16px);

    &__logo {
      img {
        display: block;
        height: rem(64px);
      }
    }

    &__inner {
      display: flex;
      align-items: center;
    }
  }
</style>
