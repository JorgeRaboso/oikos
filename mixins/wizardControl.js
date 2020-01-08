export default {
    data () {
        return {
            currentStep: 0,
            components: ['WizardStepType', 'WizardStepDestination', 'WizardStepMonth'],
            activeComponent: 'no'
        }
    },
    methods: {
        currentCompo () {
            const activeComponent = this.activeComponent = this.components[this.currentStep]
            return activeComponent
        },
        nextStep () {
            if (this.currentStep < this.components.length) {
                this.currentStep++
                this.currentCompo()
            }
            console.log({
                step: 'next',
                currentStep: this.currentStep,
                component: this.currentCompo()
            })
        },
        prevStep () {
            if (this.currentStep > this.components.length) {
                this.currentStep--
            }
        }
        // emitWizard () {
        //     this.$root.$emit('swapComponent')
        // },
        // swapComponent: function (component) {
        //     this.currentComponent = component
        // }
    }
}
