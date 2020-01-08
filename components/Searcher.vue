<template>
    <div class="c-searcher">
        <div class="c-searcher__inner">
            <div class="c-searcher__box">
                <h1 class="c-searcher__title">
                    {{ title }}
                </h1>
                <div class="c-searcher__text">
                    <p v-for="txt in text" :key="txt.id">
                        {{ txt }}
                    </p>
                </div>
                <nuxt-link class="c-searcher__button" to="/wizard">
                    <Button :text="button" />
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from '@/components/Button.vue'
    export default {
        components: {
            Button
        },
        data () {
            return {
                title: 'Encuentra tu viaje',
                text: [
                    'Fusce hendrerit ultrices purus, posuere lacinia quam vestibulum sed. Phasellus in rhoncus nisl.',
                    'Ut nec enim quam. Fusce finibus sed tellus sit amet feugiat. Suspendisse potenti. Fusce aliquam arcu nec nisi elementum mattis.'
                ],
                button: 'Buscar mi viaje ideal'
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-searcher {
    color: $color-primary;
    background: url(/media/searcher.png) no-repeat center center/cover;

    @include rem(padding, 16px 8px);

    &__inner {
      display: flex;
      flex-direction: column;

      @include rem(padding-bottom, 48px);
    }

    &__title {
      @include rem(font-size, 22px);
      @include rem(line-height, 28px);
      @include rem(margin-bottom, 16px);

      font-weight: 700;
    }

    &__box {
      @include rem(padding,16px);

      background: #fff;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.18);
      border-radius: 2px;
    }

    &__text {
      p {
        @include rem(margin-bottom, 16px);
        @include rem(font-size, 15px);
        @include rem(line-height, 19px);

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    &__button {
      @include rem(margin-top, 32px);

      display: block;
    }
  }
</style>
