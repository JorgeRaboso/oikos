<template>
    <div>
        <Wizard :data="step" />
        <!--
        <nuxt-link to="/wizard/destination">
            <Button text="Destination" />
        </nuxt-link>
        -->
    </div>
</template>

<script>
    import Wizard from '@/components/Wizard.vue'
    import Button from '@/components/Button.vue'
    export default {
        components: {
            Button,
            Wizard
        },
        data () {
            return {
                step: {
                    claim: 'Encuentra tu viaje',
                    title: 'Tipo de viaje',
                    description: '¿En que tipo de viaje estás interesado?',
                    items: [
                        {
                            title: 'playa',
                            media: 'beach'
                        },
                        {
                            title: 'ciudad',
                            media: 'city'
                        },
                        {
                            title: 'naturaleza',
                            media: 'nature'
                        }
                    ]
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
