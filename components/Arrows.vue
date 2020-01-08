<template>
    <div class="c-arrows">
        <button
            class="c-arrows__item c-arrows__item--prev"
            :class="{'is-active' : this.$store.state.counter >= 1 }"
        >
            <ArrowLeft @click.native="prev" />
        </button>
        <button class="c-arrows__item c-arrows__item--next">
            <ArrowRight @click.native="next" />
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
            prev () {
                this.$store.commit('prevStep')
            },
            next () {
                this.$store.commit('nextStep')
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
        @include rem(margin-right, 16px);
      }
    }
  }
</style>
