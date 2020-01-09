<template>
    <button class="c-button">
        {{ text }}
    </button>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-button {
    background: $color-secondary;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.17);
    border-radius: 4px;
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    font-size: rem(18px);
    line-height: rem(22px);
    padding: rem(12px 16px);
    letter-spacing: 0.64px;
    transition: 0.3s background;
    cursor: pointer;
    display: block;
    width: 100%;
    font-weight: 700;

    &:hover {
      background: darken($color-secondary, 20%);
    }
  }
</style>
