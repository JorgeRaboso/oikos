<template>
    <div class="c-dots">
        <button
            v-for="(dot, i) in $store.state.wizard.components.length"
            :key="dot.id"
            class="c-dots__item"
            :class="{'is-active':($store.state.wizard.counter ) >= i}"
        ></button>
    </div>
</template>

<script>
    export default {
        props: {
            step: {
                type: Number,
                default: 0
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-dots {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;

    &__item {
      background: #f6f6f6;
      height: 4px;
      width: 100%;
      border-radius: 4px;
      pointer-events: none;

      &.is-active {
        background: $color-secondary;
        pointer-events: auto;
      }
    }
  }
</style>
