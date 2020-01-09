<template>
    <button class="c-option" :class="{'is-active': selected}" @click="setValue">
        <div v-if="media" class="c-option__media">
            <img :src="'/media/options/' + media + '.png'" :alt="media">
        </div>
        <div class="c-option__title">
            {{ title }}
        </div>
    </button>
</template>

<script>
    export default {
        props: {
            media: {
                type: String,
                default: undefined
            },
            title: {
                type: String,
                default: undefined
            }
        },
        data () {
            return {
                selected: false
            }
        },
        methods: {
            resetActive () {
                this.$parent.$children.forEach(el => el.$el.classList.remove('is-active'))
            },
            gotToResultPage () {
                this.$router.push({
                    path: '/results/'
                })
            },
            setValue () {
                this.selected = !this.selected
                this.resetActive()
                this.$store.commit('wizard/nextStep')
                if (this.$store.state.wizard.counter === this.$store.state.wizard.components.length) {
                    this.gotToResultPage()
                }
            }
        }

    }
</script>

<style lang="scss" scoped>
  .c-option {
    @include rem(padding, 16px);

    background: #f6f6f6;
    color: $color-primary;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.3s background, 0.3s border;
    border: 1px solid transparent;
    border-radius: 4px;

    &.is-active,
    &:hover {
      background: #fff;
      border-color: $color-secondary;

      img {
        transform: scale(1.05);
      }
    }

    &__media {
      margin-bottom: rem(8px);
      pointer-events: none;

      img {
        margin: 0 auto;
        display: block;
        max-width: rem(85px);
        max-height: rem(85px);
        width: 100%;
        height: 100%;
        transition: 0.3s transform;
      }
    }

    &__title {
      font-size: rem(15px);
      pointer-events: none;
      text-transform: uppercase;
      text-align: center;
    }
  }
</style>
