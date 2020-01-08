<template>
    <div class="c-card">
        <div class="c-card__inner">
            <div class="c-card__media">
                <img :src="media">
            </div>
            <div class="c-card__content">
                <div class="c-card__days">
                    {{ days }}
                </div>
                <div class="c-card__destination">
                    {{ destination }}
                </div>
                <div class="c-card__price">
                    <div class="c-card__price-text">
                        {{ price.text }}
                    </div>
                    <div class="c-card__price-old">
                        {{ price.old }}
                    </div>
                    <div class="c-card__price-value">
                        {{ price.value }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            destination: {
                type: String,
                default: ''
            },
            days: {
                type: String,
                default: ''
            },
            media: {
                type: String,
                default: ''
            },
            price: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-card {
    &__inner {
      display: grid;
      grid-template-columns: 1fr;
      padding: 16px;
    }

    &__media {
      z-index: 2;
      position: relative;
      grid-column: 1/2;
      grid-row: 1/2;

      img {
        display: block;
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(-180deg, rgba(0, 95, 173, 0) 29%, rgba(0, 25, 117, 0.76) 97%);
      }
    }

    &__content {
      z-index: 3;
      position: relative;
      grid-column: 1/2;
      grid-row: 1/2;
    }

    &__days {
      background: #003175;
      color: #fff;

      @include rem(padding, 8px 4px);
      @include rem(font-size, 14px);
      @include rem(line-height, 17px);
    }

    &__destination {
      background: #fff;
      color: #003175;

      @include rem(padding, 8px 4px);
      @include rem(font-size, 18px);
      @include rem(line-height, 23px);
    }

    &__price {
      color: #fff;
    }
  }
</style>
