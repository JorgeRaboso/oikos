<template>
    <div class="c-wizard">
        <transition name="slide-fade" appear>
            <keep-alive>
                <component :is="this.$store.state.components[this.$store.state.counter]" class="c-wizard__step" />
            </keep-alive>
        </transition>
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
      padding: rem(16px);
      background: #fff;
    }
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }

  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter,
  .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(-10%);
    opacity: 0;
  }
</style>
