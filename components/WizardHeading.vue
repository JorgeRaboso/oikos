<template>
    <div class="c-wizard-heading">
        <div class="c-wizard-heading__claim">
            {{ heading.claim }}
        </div>
        <nuxt-link class="c-wizard-heading__close" to="/" @click.native="resetWizard">
            <img src="/media/close.svg">
        </nuxt-link>

        <div class="c-wizard-heading__title">
            {{ heading.title }}
        </div>
        <div class="c-wizard-heading__arrows">
            <Arrows />
        </div>
        <div class="c-wizard-heading__dots">
            <Dots :step="step" />
        </div>
        <div class="c-wizard-heading__text">
            {{ heading.text }}
        </div>
    </div>
</template>

<script>
    import Dots from '@/components/Dots'
    import Arrows from '@/components/Arrows'
    export default {
        components: {
            Dots,
            Arrows
        },
        props: {
            step: {
                type: Number,
                default: undefined
            },
            heading: {
                type: Object,
                default: () => {}
            }
        },
        methods: {
            resetWizard () {
                this.$store.commit('resetStep')
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-wizard-heading {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "claim close" "title arrows" "dots dots" "text text";

    &__claim {
      grid-area: claim;
      color: #666;
      align-self: center;

      @include rem (font-size, 16px);
      @include rem (line-height, 17px);

      font-weight: 300;
    }

    &__close {
      grid-area: close;
      justify-self: end;
    }

    &__title {
      grid-area: title;
      color: $color-primary;
      font-weight: 700;

      @include rem (margin-top, 16px);
      @include rem (font-size, 22px);
      @include rem (line-height, 27px);
    }

    &__arrows {
      @include rem (margin-top, 16px);

      grid-area: arrows;
      justify-self: end;
      align-self: center;
    }

    &__dots {
      grid-area: dots;

      @include rem (margin, 16px 0);
    }

    &__text {
      grid-area: text;
      color: $color-primary;

      @include rem (font-size, 16px);
      @include rem (line-height, 20px);
    }
  }
</style>
