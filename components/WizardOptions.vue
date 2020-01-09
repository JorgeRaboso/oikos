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
    export default {
        components: {
            Option
        },
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
    padding-top: rem(32px);
    grid-gap: rem(16px);
  }
</style>
