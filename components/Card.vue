<template>
    <div class="c-card">
        <div class="c-card__inner">
            <div class="c-card__media">
                <img :src="media">
            </div>
            <div class="c-card__content">
                <div class="c-card__text">
                    <div class="c-card__days">
                        {{ days }}
                    </div>
                    <div class="c-card__destination">
                        {{ destination }}
                    </div>
                </div>
                <button class="c-card__price">
                    <div class="c-card__price-info">
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
                    <div class="c-card__price-icon">
                        <ChevronLeft />
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    import ChevronLeft from '@/components/ChevronLeft.vue'

    export default {
        components: {
            ChevronLeft
        },
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
    }

    &__text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    &__media {
      z-index: 2;
      position: relative;
      grid-column: 1/2;
      grid-row: 1/2;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0 1px 5px 0 rgba(0, 49, 117, 0.39);

      img {
        display: block;
        width: 100%;
        object-fit: cover;
        max-height: 200px;
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
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: rem(8px 8px 8px 0);
    }

    &__days {
      background: #003175;
      color: #fff;
      letter-spacing: -0.43px;
      padding: rem(4px 8px);
      font-size: rem(14px);
      line-height: rem(17px);
    }

    &__destination {
      background: #fff;
      color: #003175;
      padding: rem(8px 8px);
      font-size: rem(18px);
      line-height: rem(23px);
    }

    &__price {
      display: flex;
      align-self: flex-end;

      &-info {
        background: #fff;
        color: $color-primary;
        display: grid;
        grid-template-columns: auto auto;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-end;
        border-radius: 2px 0 0 2px;
        padding: rem(4px 8px);
      }

      &-icon {
        background: $color-secondary;
        display: flex;
        flex-direction: columns;
        justify-content: center;
        transition: 0.3s background;
        border-radius: 0 4px 4px 0;
        padding: rem(8px 16px);
      }

      &:hover {
        .c-card__price-icon {
          background: darken($color-secondary, 10%);
        }
      }

      &-text {
        font-size: rem(14px);
        line-height: rem(18px);
        justify-self: end;
        letter-spacing: -0.43px;
        text-transform: capitalize;
      }

      &-old {
        font-size: rem(14px);
        line-height: rem(18px);
        padding-left: rem(4px);
        letter-spacing: -0.43px;
      }

      &-value {
        width: 100%;
        font-size: rem(22px);
        line-height: rem(21px);
        grid-column: 1/-1;
        text-align: right;
        font-weight: 700;
      }
    }
  }
</style>
