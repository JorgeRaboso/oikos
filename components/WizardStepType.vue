<template>
    <div class="c-wizard-step">
        <WizardHeading :heading="heading" />
        <WizardOptions :options="options" />
    </div>
</template>

<script>
    import WizardHeading from '@/components/WizardHeading'
    import WizardOptions from '@/components/WizardOptions'
    export default {
        components: {
            WizardHeading,
            WizardOptions
        },
        data () {
            return {
                heading: {
                    claim: 'Encuentra tu viaje',
                    title: 'Tipo de viaje',
                    text: '¿En que tipo de viaje estas interesado?'
                },
                options: [
                    {
                        title: 'Playa',
                        media: 'beach'
                    },
                    {
                        title: 'Ciudad',
                        media: 'city'
                    },
                    {
                        title: 'Naturaleza',
                        media: 'nature'
                    },
                    {
                        title: 'Todo Incluido',
                        media: 'beach'
                    },
                    {
                        title: 'Organizado',
                        media: 'city'
                    },
                    {
                        title: 'Ciudad',
                        media: 'nature'
                    }
                ]
            }
        }
    }
</script>
