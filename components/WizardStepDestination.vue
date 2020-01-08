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
                    title: 'Destino del viaje',
                    text: '¿Dónde te gustaría ir?'
                },
                options: [
                    {
                        title: 'Europa',
                        media: 'europe'
                    },
                    {
                        title: 'Asia',
                        media: 'asia'
                    },
                    {
                        title: 'America',
                        media: 'america'
                    },
                    {
                        title: 'Africa',
                        media: 'africa'
                    }
                ]
            }
        }
    }
</script>
