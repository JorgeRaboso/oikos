<template>
    <div class="c-results">
        <div class="c-results__inner">
            <div class="c-results__heading">
                <h1 class="c-results__title">
                    {{ title }}
                </h1>
                <h2 class="c-results__text">
                    {{ text }}
                </h2>
            </div>
            <div class="c-results__content">
                <Card
                    v-for="result in results"
                    :key="result.id"
                    :days="result.days"
                    :destination="result.destination"
                    :price="result.price"
                    :media="result.media"
                />
            </div>
        </div>
    </div>
</template>
s
<script>
    import Card from '@/components/Card'
    export default {
        components: {
            Card
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            text: {
                type: String,
                default: ''
            },
            results: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-results {
    &__inner {
      @include rem(padding,16px);
    }

    &__heading {
      @include rem(margin-bottom,8px);
    }

    &__title {
      font-weight: 700;
      color: $color-primary;

      @include rem(font-size, 22px);
      @include rem(line-height, 27px);
    }

    &__text {
      font-weight: 300;
      color: $color-secondary;

      @include rem(font-size, 14px);
      @include rem(line-height, 17px);
    }
  }
</style>
