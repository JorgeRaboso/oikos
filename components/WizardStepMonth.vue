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
                    title: 'Mes del viaje',
                    text: '¿Cuando quieres viajar?'
                },
                options: [
                    { title: 'enero' },
                    { title: 'febrero' },
                    { title: 'marzo' },
                    { title: 'abril' },
                    { title: 'mayo' },
                    { title: 'junio' },
                    { title: 'julio' },
                    { title: 'agosto' },
                    { title: 'septiembre' },
                    { title: 'octubre' },
                    { title: 'noviembre' },
                    { title: 'diciembre' }
                ]
            }
        }
    }
</script>
