const state = {
    counter: 0,
    components: [
        'WizardStepType',
        'WizardStepDestination',
        'WizardStepMonth'
    ]
}

const mutations = {
    nextStep (state) {
        if ((state.counter + 1) <= state.components.length) {
            state.counter++
        }
    },
    prevStep (state) {
        if (state.counter > 0 && state.counter <= state.components.length) {
            state.counter--
        }
    },
    resetStep (state) {
        state.counter = 0
    }
}

export default {
    namespaced: true,
    state,
    mutations
}
