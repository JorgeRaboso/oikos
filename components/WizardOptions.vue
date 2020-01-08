<template>
    <div class="c-wizard-options">
        <Option
            v-for="option in options"
            :key="option.id"
            :title="option.title"
            :media="option.media"
        />
    </div>
</template>

<script>
    import Option from '@/components/Option'
    import wizardControl from '@/mixins/wizardControl'
    export default {
        components: {
            Option
        },
        mixins: [wizardControl],
        props: {
            options: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-wizard-options {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @include rem(padding-top, 32px);
    @include rem(grid-gap, 16px);
  }
</style>
