<template>
    <div class="c-new-search">
        <div class="c-new-search__inner">
            <nuxt-link to="/" class="c-new-search__button" @click.native="resetWizard">
                <Button :text="button" />
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    import Button from '@/components/Button'
    export default {
        components: {
            Button
        },
        data () {
            return {
                button: 'Buscar otro viaje ideal'
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
  .c-new-search {
    position: fixed;
    width: 100%;
    left: 0;
    z-index: 10;
    bottom: 0;

    &__inner {
      @include rem(padding, 16px);
      @include rem(margin, 0 4px);

      background: #fff;
      box-shadow: 0 1px 4px 0 rgba(191, 191, 191, 0.9);
      border-radius: 4px;
    }

    &__button {
    }
  }

</style>
