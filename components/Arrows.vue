<template>
    <div class="c-arrows">
        <button
            class="c-arrows__item c-arrows__item--prev"
            :class="{'is-active' : this.$store.state.wizard.counter >= 1 }"
        >
            <ArrowLeft @click.native="prevStep" />
        </button>
        <button class="c-arrows__item c-arrows__item--next">
            <ArrowRight @click.native="nextStep" />
        </button>
    </div>
</template>

<script>
    import ArrowLeft from '@/components/ArrowLeft'
    import ArrowRight from '@/components/ArrowRight'
    export default {
        components: {
            ArrowLeft,
            ArrowRight
        },
        methods: {
            prevStep () {
                this.$store.commit('wizard/prevStep')
            },
            nextStep () {
                this.$store.commit('wizard/nextStep')
            }
        }
    }
</script>

<style lang="scss" >
  .c-arrows {
    display: flex;
    align-items: center;

    &__item {
      pointer-events: none;

      .icon {
        transition: 0.3s fill;
      }

      &.is-active {
        pointer-events: auto;

        .icon {
          fill: $color-secondary;
        }
      }

      &:first-child {
        margin-right: rem(16px);
      }
    }
  }
</style>
