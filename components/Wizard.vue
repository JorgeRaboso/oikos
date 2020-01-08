<template>
    <div class="c-wizard">
        <keep-alive>
            <component :is="this.$store.state.components[this.$store.state.counter]" class="c-wizard__step" />
        </keep-alive>
    </div>
</template>

<script>
    import WizardStepType from '@/components/WizardStepType'
    import WizardStepDestination from '@/components/WizardStepDestination'
    import WizardStepMonth from '@/components/WizardStepMonth'
    export default {
        components: {
            WizardStepType,
            WizardStepDestination,
            WizardStepMonth
        },
        props: {
            data: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-wizard {
    &__step {
      @include rem(padding,16px);

      background: #fff;
    }
  }
</style>
